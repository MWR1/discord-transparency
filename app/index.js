const { ipcRenderer } = require("electron");
const { decode } = require("js-base64").Base64;

const mainHeading = document.querySelector(".main h1");
const mainLoader = document.querySelector(".main__loader");
const mainUpdateButton = document.querySelector(".main__update");
const updateSteps = document.querySelector(".main__update-steps");

// https://stackoverflow.com/questions/19275776/node-js-how-to-get-the-os-platforms-user-data-folder
const userDataPath =
    process.env.APPDATA ||
    (process.platform === "darwin"
        ? process.env.HOME + "/Library/Preferences"
        : process.env.HOME + "/.config");
const discordUserDataPath = userDataPath + "\\discordcanary\\";
const desktopCorePath = "\\modules\\discord_desktop_core";
const cmdSeparator = process.platform.startsWith("win") ? "&" : ";";
const scriptURL =
    "https://api.github.com/repos/MWR1/discord-transparency/contents/startup-with-discord.js";

function getFullPath(firstHalfOfPath, restOfPath) {
    /*
     * reading the directory within the Discord folder to see the name of the first folder
     * we do this because the name of the first folder represents the version of Discord,
     * and thus, it might change in the future, therefore we can't hardcode the version.
     */

    ipcRenderer.send("get-dir-version", firstHalfOfPath);

    return new Promise((resolve, reject) => {
        ipcRenderer.once("dir-version", (event, error, dirVersion) => {
            if (error) return reject(error);
            resolve(firstHalfOfPath.concat(dirVersion, restOfPath));
        });
    });
}

function getSourceCode(pathToFile) {
    ipcRenderer.send("get-source-code", pathToFile);

    return new Promise((resolve, reject) => {
        ipcRenderer.once("source-code", (event, error, sourceCode) => {
            if (error) return reject(error);
            resolve(sourceCode);
        });
    });
}

async function alterSourceCode({ pathToFile, repositoryScript }) {
    let sourceCode;
    try {
        //fetching the source code of core.asar
        sourceCode = await getSourceCode(pathToFile);
    } catch (e) {
        return alert(e);
    }

    // we are essentially dividing the code into 2 parts, one part holds the normal code
    // which would be above the pointer "//---", and the second part is the code that it's
    // inserted by the installer.
    // This will return [ --source code-- ] if there's no script there,
    // and [ --source code--, --script--] if the script is, in fact, there.
    sourceCode = sourceCode.split("//---");

    // we can conclude if the script is already installed if the "//---" pointer is there,
    // thus the source code already having a second part, the one which holds the actual script.
    // So, in order to remove the old script version, we simply remove the second part
    if (sourceCode.length > 1) sourceCode = [sourceCode[0]];

    sourceCode.push(`//---
        const __interval = setInterval(() => {
            if(mainWindow){
                clearInterval(__interval);
                ${repositoryScript}
            }
        }, 500)`);

    sourceCode = sourceCode.join("");

    return sourceCode;
}

function executeShell({ eventName, command }) {
    ipcRenderer.send(eventName, command);

    return new Promise((resolve, reject) => {
        ipcRenderer.once(eventName.concat("-ok"), (event, error) => {
            if (error) return reject(error);
            resolve(1);
        });
    });
}

function writeToFile(pathToFile, code) {
    ipcRenderer.send("write-file", { pathToFile, code });

    return new Promise((resolve, reject) => {
        ipcRenderer.once("write-file-ok", (event, error) => {
            if (error) return reject(error);
            resolve(1);
        });
    });
}

async function applyScript(repositoryScript) {
    try {
        const transparencyUnloadPath = await getFullPath(discordUserDataPath, desktopCorePath);
        /*
         * unpacking core.asar with a shell command
         */
        await executeShell({
            eventName: "unpack-core-app",
            command: `cd ${transparencyUnloadPath} ${cmdSeparator} npx asar extract core.asar __unpacked`,
        });
        modifyToFinished(updateSteps.children[0]);

        /*
         * reading the file mainScreen.js to modify the contents, so we can implement the
         * script
         */
        const alteredSourceCode = await alterSourceCode({
            pathToFile: `${transparencyUnloadPath}\\__unpacked\\app\\mainScreen.js`,
            repositoryScript,
        });

        //applying the script code
        await writeToFile(
            `${transparencyUnloadPath}\\__unpacked\\app\\mainScreen.js`,
            alteredSourceCode
        );
        modifyToFinished(updateSteps.children[1]);

        //packing everything back together
        await executeShell({
            eventName: "pack-core-app",
            command: `cd ${transparencyUnloadPath} ${cmdSeparator} npx asar pack __unpacked core.asar`,
        });

        modifyToFinished(updateSteps.children[2]);
    } catch (e) {
        return alert(e);
    }
}

//checking for updates
fetch(scriptURL)
    .then((r) => r.json())
    .then((response) => {
        /*
         * getting current version from localStorage and the repository version
         * from fetch
         */
        const currentVersion = window.localStorage.getItem("currentVersion");
        const repositoryVersion = response.sha;

        //removing the loader and making the button visible because in any case,
        //these 2 steps will happen
        mainLoader.classList.add("main__loader--inactive");
        mainUpdateButton.classList.add("main__update--active");

        if (currentVersion === repositoryVersion) {
            //updating title and button text, then concluding execution
            mainHeading.textContent = "Your current version is up to date.";
            mainUpdateButton.textContent = "Reinstall script";
            return scriptApplier("reinstall", response.content);
        } else {
            mainHeading.textContent = !currentVersion
                ? "Install the script for the first time!"
                : "Update found!";
            mainUpdateButton.textContent = !currentVersion ? "Install" : "Update";

            return scriptApplier(
                !currentVersion ? "install" : "update",
                response.content,
                repositoryVersion
            );
        }
    });

function modifyToFinished(li) {
    li.classList.add("li--finished");
    li.textContent += " COMPLETED!";
}

function scriptApplier(type, script, repositoryVersion) {
    mainUpdateButton.onclick = () => {
        mainUpdateButton.onclick = null;
        const repositoryScript = decode(script);

        /*
         * changing the appearence and text of the button and initializing
         * the progress list
         */
        mainUpdateButton.textContent =
            type === "update"
                ? "Updating..."
                : type === "install"
                ? "Installing..."
                : "Reinstalling...";
        mainUpdateButton.disabled = true;
        updateSteps.classList.add("main__update-steps--active");

        applyScript(repositoryScript)
            .then(() => {
                if (type !== "reinstall")
                    window.localStorage.setItem("currentVersion", repositoryVersion);

                //setting a timeout for the user to see that the list is finished
                setTimeout(() => {
                    updateSteps.classList.remove("main__update-steps--active");
                    mainHeading.textContent = `${
                        type === "update" ? "Update" : type === "install" ? "Install" : "Reinstall"
                    } successful! Restart Discord to see changes`;
                    mainUpdateButton.textContent =
                        type === "update"
                            ? "Updated!"
                            : type === "install"
                            ? "Installed!"
                            : "Reinstalled!";
                    mainUpdateButton.style.cursor = "default";
                }, 1000);
            })
            .catch(alert);
    };
}

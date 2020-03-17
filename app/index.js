const mainHeading = document.querySelector(".main h1");
const mainLoader = document.querySelector(".main__loader");
const mainUpdateButton = document.querySelector(".main__update");
const updateSteps = document.querySelector(".main__update-steps");

// https://stackoverflow.com/questions/19275776/node-js-how-to-get-the-os-platforms-user-data-folder
const userDataPath =
    process.env.APPDATA ||
    (process.platform === "darwin"
        ? process.env.HOME + "/Library/Preferences"
        : process.env.HOME + "/.local/share");
const discordUserDataPath = userDataPath + "\\discordcanary\\";
const desktopCorePath = "\\modules\\discord_desktop_core";
const insertionPositionString =
    "mainWindow.webContents.on('did-finish-load', () => {";
const scriptURL =
    "https://api.github.com/repos/MWR1/discord-transparency/contents/startup-with-discord.js";

///////
const { ipcRenderer } = require("electron");
///////

const { decode } = require("js-base64").Base64;

function assembleFullPath(firstHalfOfPath, restOfPath) {
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

async function alterSourceCode({
    pathToFile,
    insertionPositionString,
    repositoryScript,
    currentScriptCodeLength
}) {
    //fetching the source code of core.asar
    let sourceCode = await getSourceCode(pathToFile).catch(alert);

    /*
     * getting the index of "did-finish-load", where the script will go, plus the length
     * of "mainWindow.webContents.on('did-finish-load', () => {" to get the correct index
     * at which we append the script
     */
    const neededIndex =
        sourceCode.indexOf(insertionPositionString) +
        insertionPositionString.length;

    //converting the code of mainScreen.js to an array
    sourceCode = sourceCode.split("");
    //checking to see if there is old code that needs to be deleted
    if (currentScriptCodeLength !== 0)
        sourceCode.splice(neededIndex, currentScriptCodeLength);

    //inserting the repository script at neededIndex
    sourceCode.splice(neededIndex, 0, repositoryScript);
    return sourceCode.join("");
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

async function applyUpdates(repositoryScript, currentScriptCodeLength) {
    const transparencyUnloadPath = await assembleFullPath(
        discordUserDataPath,
        desktopCorePath
    ).catch(alert);
    /*
     * unpacking core.asar with a shell command
     */
    await executeShell({
        eventName: "unpack-core-app",
        command: `cd ${transparencyUnloadPath} & npx asar extract core.asar __unpacked`
    });
    modifyToFinished(updateSteps.children[0]);

    /*
     * reading the file mainScreen.js to modify the contents, so we can implement the
     * script
     */
    const alteredSourceCode = await alterSourceCode({
        pathToFile: `${transparencyUnloadPath}\\__unpacked\\app\\mainScreen.js`,
        insertionPositionString,
        repositoryScript,
        currentScriptCodeLength
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
        command: `cd ${transparencyUnloadPath} & npx asar pack __unpacked core.asar`
    });
    modifyToFinished(updateSteps.children[2]);
}

//checking for updates

//TODO: replace './repo.json' to scriptURL
//TODO: delete __unpacked after packing -- probably..?
//TODO: BETTER* error handling... lol
//TODO: minify code before building
//TODO: make reinstaller button so we can reapply script if it stops functioning after update
/*
 * TODO: maybe add some sort of pointers at which we could put the script, because
 * this logic will break if the user has the script already and decides to
 * reinstall/delete the installer (based on localStorage)
 */
fetch(scriptURL)
    .then(r => r.json())
    .then(response => {
        /*
         * getting current version from localStorage and the repository version
         * from fetch
         */
        const currentVersion =
            window.localStorage.getItem("currentVersion") || null;
        const repositoryVersion = response.sha;

        //removing the loader and making the button visible because in any case,
        //these 2 steps will happen
        mainLoader.classList.add("main__loader--inactive");
        mainUpdateButton.classList.add("main__update--active");

        if (currentVersion === repositoryVersion) {
            //updating title and button text, then concluding execution
            mainHeading.textContent = "Your current version is up to date.";
            mainUpdateButton.textContent = "No update needed";
            mainUpdateButton.disabled = true;
            return;
        } else {
            mainHeading.textContent = "Update found!";

            /*
             * getting the repository script itself by base64 decoding it, then initializing
             * a current script code variable that indicates the length of the old version
             * of the script. this is to remove the old code.
             */
            const repositoryScript = decode(response.content);
            const currentScriptCodeLength =
                currentVersion === null
                    ? 0
                    : decode(window.localStorage.getItem("currentCodeScript"))
                          .length;

            mainUpdateButton.onclick = () => {
                /*
                 * changing the appearence and text of the button and initializing
                 * the progress list
                 */
                mainUpdateButton.textContent = "Updating...";
                mainUpdateButton.disabled = true;
                updateSteps.classList.add("main__update-steps--active");

                applyUpdates(repositoryScript, currentScriptCodeLength)
                    .then(() => {
                        /*
                         * we update the currentVersion/initialize it in localStorage
                         * it is to check against the repository version to conclude
                         * whether there have been any changes
                         * we also update currentCodeScript. this is for getting
                         * the script length for the currentScriptCodeLength variable
                         * mentioned above
                         */
                        window.localStorage.setItem(
                            "currentVersion",
                            repositoryVersion
                        );

                        window.localStorage.setItem(
                            "currentCodeScript",
                            response.content
                        );

                        //setting a timeout for the user to see that the list is finished
                        setTimeout(() => {
                            updateSteps.classList.remove(
                                "main__update-steps--active"
                            );
                            mainHeading.textContent =
                                "Update successful! Restart Discord to see changes";
                            mainUpdateButton.textContent = "Updated!";
                            mainUpdateButton.style.cursor = "default";
                        }, 1000);
                    })
                    .catch(alert);
            };
        }
    });

function modifyToFinished(li) {
    li.classList.add("li--finished");
    li.textContent += " COMPLETED!";
}

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

const fs = require("fs");
const { promisify } = require("util");
const { exec } = require("child_process");
const { decode } = require("js-base64").Base64;
const fsReadFile = promisify(fs.readFile);
const fsWriteFile = promisify(fs.writeFile);
const fsReadDirectory = promisify(fs.readdir);
const asyncExec = promisify(exec);

function sanitize(input) {
    return input.replace(/[^.0-9]/g, "");
}

async function assembleFullPath(firstHalfOfPath, restOfPath) {
    /*
     * reading the directory within the Discord folder to see the name of the first folder
     * we do this because the name of the first folder represents the version of Discord,
     * and thus, it might change in the future, therefore we can't hardcode the version.
     */
    const files = await fsReadDirectory(firstHalfOfPath).catch(console.log);
    return firstHalfOfPath.concat(sanitize(files[0]), restOfPath);
}

async function alterSourceCode({
    pathToFile,
    insertionPositionString,
    repositoryScript,
    currentScriptCodeLength
}) {
    let sourceCode = await fsReadFile(pathToFile, "utf8").catch(console.log);

    //getting the index of "did-finish-load", where the script will go
    const neededIndex =
        sourceCode.indexOf(insertionPositionString) +
        insertionPositionString.length;

    sourceCode = sourceCode.split("");
    if (currentScriptCodeLength !== 0)
        sourceCode.splice(neededIndex, currentScriptCodeLength);

    sourceCode.splice(neededIndex, 0, repositoryScript);
    return sourceCode.join("");
}

async function applyUpdates(repositoryScript, currentScriptCodeLength) {
    const transparencyUnloadPath = await assembleFullPath(
        discordUserDataPath,
        desktopCorePath
    );
    /*
     * unpacking core.asar with a shell command
     */
    await asyncExec(
        `cd ${transparencyUnloadPath} & npx asar extract core.asar __unpacked`
    ).catch(console.log);
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
    await fsWriteFile(
        `${transparencyUnloadPath}\\__unpacked\\app\\mainScreen.js`,
        alteredSourceCode
    );
    modifyToFinished(updateSteps.children[1]);

    //packing everything back together
    await asyncExec(
        `cd ${transparencyUnloadPath} & npx asar pack __unpacked core.asar`
    );
    modifyToFinished(updateSteps.children[2]);
}

//checking for updates

//TODO: replace './repo.json' to scriptURL
//TODO: delete __unpacked after packing
//TODO: error handling on front page

fetch(scriptURL).then(response => {
    const currentVersion =
        window.localStorage.getItem("currentVersion") || null;
    const repositoryVersion = response.sha;
    mainLoader.classList.add("main__loader--inactive");
    mainUpdateButton.classList.add("main__update--active");

    if (currentVersion === repositoryVersion) {
        mainHeading.textContent = "Your current version is up to date.";
        mainUpdateButton.textContent = "No update needed";
        mainUpdateButton.disabled = true;
        return;
    } else {
        mainHeading.textContent = "Update found!";

        const repositoryScript = decode(response.content);
        const currentScriptCodeLength =
            currentVersion === null
                ? 0
                : decode(window.localStorage.getItem("currentCodeScript"))
                      .length;

        mainUpdateButton.onclick = () => {
            mainUpdateButton.textContent = "Updating...";
            mainUpdateButton.disabled = true;
            updateSteps.classList.add("main__update-steps--active");

            applyUpdates(repositoryScript, currentScriptCodeLength)
                .then(() => {
                    window.localStorage.setItem(
                        "currentVersion",
                        repositoryVersion
                    );

                    window.localStorage.setItem(
                        "currentCodeScript",
                        response.content
                    );

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
                .catch(console.log);
        };
    }
});

function modifyToFinished(li) {
    li.classList.add("li--finished");
    li.textContent += " COMPLETED!";
}

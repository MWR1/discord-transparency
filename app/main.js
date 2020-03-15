const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const { promisify } = require("util");
const { exec } = require("child_process");
const fsReadFile = promisify(fs.readFile);
const fsWriteFile = promisify(fs.writeFile);
const fsReadDirectory = promisify(fs.readdir);
const asyncExec = promisify(exec);
const sanitize = input => input.replace(/[^.0-9]/g, "");

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 500,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // and load the index.html of the app.
    win.loadFile("index.html");
    win.setMenuBarVisibility(false);
    win.setIcon("scriptupdater.png");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    app.quit();
});

//TODO: create universal function for listeners
function createRendererListener({
    eventName,
    eventNameReply,
    isDirectoryName,
    action
}) {
    ipcMain.once(eventName, async (event, argument) => {
        let error = false,
            aux;
        try {
            aux = await action(argument);
        } catch (e) {
            error = e;
        } finally {
            aux = isDirectoryName ? sanitize(aux[0]) : aux;
            event.reply(eventNameReply, error, aux);
        }
    });
}

const rendererListenerOptions = [
    {
        eventName: "get-dir-version",
        eventNameReply: "dir-version",
        isDirectoryName: true,
        action: async firstHalfOfPath => await fsReadDirectory(firstHalfOfPath)
    },
    {
        eventName: "get-source-code",
        eventNameReply: "source-code",
        isDirectoryName: false,
        action: async pathToFile => await fsReadFile(pathToFile, "utf8")
    },
    {
        eventName: "unpack-core-app",
        eventNameReply: "unpack-core-app-ok",
        isDirectoryName: false,
        action: async command => await asyncExec(command)
    },
    {
        eventName: "pack-core-app",
        eventNameReply: "pack-core-app-ok",
        isDirectoryName: false,
        action: async command => await asyncExec(command)
    },
    {
        eventName: "write-file",
        eventNameReply: "write-file-ok",
        isDirectoryName: false,
        action: async ({ pathToFile, code }) =>
            await fsWriteFile(pathToFile, code)
    }
];

for (const option of rendererListenerOptions) {
    createRendererListener(option);
}

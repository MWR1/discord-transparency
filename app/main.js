const { app, BrowserWindow, ipcMain } = require("electron");
const { readFile, writeFile, readdir: readDirectory } = require("fs").promises;
const { promisify } = require("util");
const executeShellCommand = promisify(require("child_process").exec);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 500,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
  win.setMenuBarVisibility(false);
  win.setIcon("scriptupdater.png");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  app.quit();
});

function sanitize(input) {
  return input.replace(/[^.0-9]/g, "");
}

function createRendererListener({ eventName, eventNameReply, isDirectoryName, action }) {
  ipcMain.once(eventName, async (event, argument) => {
    let error = false;
    let aux;
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
    action: async (firstHalfOfPath) => await readDirectory(firstHalfOfPath),
  },
  {
    eventName: "get-source-code",
    eventNameReply: "source-code",
    isDirectoryName: false,
    action: async (pathToFile) => await readFile(pathToFile, "utf8"),
  },
  {
    eventName: "unpack-core-app",
    eventNameReply: "unpack-core-app-ok",
    isDirectoryName: false,
    action: async (command) => await executeShellCommand(command),
  },
  {
    eventName: "pack-core-app",
    eventNameReply: "pack-core-app-ok",
    isDirectoryName: false,
    action: async (command) => await executeShellCommand(command),
  },
  {
    eventName: "write-file",
    eventNameReply: "write-file-ok",
    isDirectoryName: false,
    action: async ({ pathToFile, code }) => await writeFile(pathToFile, code),
  },
];

for (const option of rendererListenerOptions) createRendererListener(option);

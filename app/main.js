const { app, BrowserWindow } = require("electron");

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
    win.loadFile("app/index.html");
    win.setMenuBarVisibility(false);
    //win.setIcon("./scriptupdater.png");
}

app.allowRendererProcessReuse = true;
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    app.quit();
});

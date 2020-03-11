const { resolve } = require("path");
module.exports = [
    {
        mode: "production",
        entry: "script/script.js",
        output: {
            filename: "script.min.js"
        }
    },

    {
        mode: "production",
        target: "electron-main",
        entry: "app/main.js",
        output: {
            path: resolve(__dirname, "dist/app")
        }
    },
    {
        mode: "production",
        entry: "app/index.js",
        target: "electron-renderer",
        output: {
            path: resolve(__dirname, "dist/app"),
            filename: "index.js"
        }
    }
];

const { resolve } = require("path");
module.exports = [
    {
        mode: "production",
        entry: "script/script.js",
        output: {
            path: resolve(__dirname, "./dist/script"),
            filename: "script.min.js"
        }
    }
];

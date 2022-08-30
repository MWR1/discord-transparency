const { resolve } = require("path");
module.exports = [
  {
    mode: "production",
    entry: "script/script.js",
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
      preferRelative: true,
    },
    output: {
      path: resolve(__dirname, "./main"),
      filename: "manual-copy-pasting.js",
    },
    optimization: {
      minimize: true,
    },
  },
];

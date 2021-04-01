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
    },
    output: {
      path: resolve(__dirname, "./dist/script"),
      filename: "script.min.js",
    },
    optimization: {
      minimize: true,
    },
  },
];

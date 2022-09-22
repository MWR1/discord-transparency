const { resolve } = require("path");
const PrepareCodeForAsarInjectionPlugin = require("./PrepareCodeForAsarInjectionPlugin");
module.exports = (env) => ({
  mode: "production",
  entry: "script/script.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: env.noInjectionPlugin ? [] : [new PrepareCodeForAsarInjectionPlugin()],
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
});

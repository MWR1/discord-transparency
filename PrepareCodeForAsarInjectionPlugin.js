const { readFileSync, writeFileSync } = require("fs");

/**
 * This plugin automatically creates a "startup-with-discord" file ready for production, that contains
 * the code to inject in Discord.
 */

module.exports = class PrepareCodeForAsarInjectionPlugin {
  apply(compiler) {
    compiler.hooks.done.tap("PrepareCodeForAsarInjectionPlugin", () => {
      const { errorGettingScript, minifiedScriptCodeInBase64 } = getMinifiedScriptCodeInBase64();
      if (errorGettingScript !== null) {
        console.error("ERROR - Error reading the file that contains the minified script source code");
        console.error(errorGettingScript);
        return;
      }

      const errorWritingScript = writeScriptCodeToFinalFile(minifiedScriptCodeInBase64);
      if (errorWritingScript !== null) {
        console.error("ERROR - Error writing the file to be injected in Discord's source code");
        console.error(errorWritingScript);
      }

      console.log("SUCCESS - The final file for injection in Discord's source code has been successfully written");

      require("child_process")
        .spawn("clip")
        .stdin.end(require("fs").readFileSync("./main/startup-with-discord.js").toString("base64"));
    });
  }
};

/**
 * @returns an object containing an error key which is null if there isn't any, and the minified script itself
 */

function getMinifiedScriptCodeInBase64() {
  try {
    return {
      errorGettingScript: null,
      minifiedScriptCodeInBase64: readFileSync("./main/manual-copy-pasting.js", { encoding: "base64" }),
    };
  } catch (error) {
    return { errorGettingScript: error, minifiedScriptCodeInBase64: null };
  }
}

/**
 *
 * @param {string} minifiedScriptCodeInBase64
 * @returns an error if writing the script wasn't successful, and null otherwise
 */
function writeScriptCodeToFinalFile(minifiedScriptCodeInBase64) {
  try {
    writeFileSync(
      "./main/startup-with-discord.js",
      `mainWindow.webContents.on("did-finish-load", () => {
        mainWindow.webContents.executeJavaScript(
          Buffer.from(
            "${minifiedScriptCodeInBase64}",
            "base64"
          ).toString("utf8")
        );
      });
      `,
      { encoding: "utf8" }
    );
    return null;
  } catch (error) {
    return error;
  }
}

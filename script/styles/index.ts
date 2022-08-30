import createMainCSSCode from "./createMainCSSCode";

export const actionsPanelCSSCode =
  ".TRANSPARENCY__ACTION {min-height: 200px;background-color: rgba(0, 0, 0, 0.5);margin: 10px;color: white;cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;transition: background-color 300ms linear;}.TRANSPARENCY__ACTION--ACTIVE {background-color: rgba(0, 0, 0, 0.8);cursor: initial;}.TRANSPARENCY__ACTION-INPUT {box-sizing: border-box;text-align: center;height: 40px;width: 85%;margin: 10px 0 0;border: 0;background-color: rgba(255, 255, 255, 0.1);border-radius: 50px;color: white;}.TRANSPARENCY__ACTION-INPUT:focus,#TRANSPARENCY__ACTION-SAVE-BRIGHTNESS:focus {outline: none;border: 2px solid dodgerblue;}#TRANSPARENCY__ACTION-BRIGHTNESS-LEVEL {margin: 0;opacity: 0.8;text-align: center;}#TRANSPARENCY__ACTION-WARNING {font-size: 11px;line-height: 20px;padding: 10px;color: white;max-width: 310px;margin: 10px 0 0;opacity: 0.8;}#TRANSPARENCY__ACTION-SAVE-BRIGHTNESS {height: 40px;padding: 0 15px;max-width: 300px;margin-top: 10px;border: 0;background-color: rgba(255, 255, 255, 0.1);border-radius: 50px;color: white;cursor: pointer;}";

/**
 * Overwrites previous CSS rules in regards to the background image.
 * @param {string} backgroundImageURL
 * @returns CSS rule for overwriting the old rules in regards to the background image
 */
export function newBackgroundImageCSSCode(backgroundImageURL: string): string {
  return `#app-mount{background: url(${backgroundImageURL}) center center no-repeat !important; background-size: cover !important;}`;
}

export { createMainCSSCode };

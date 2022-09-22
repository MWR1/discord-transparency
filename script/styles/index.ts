export { default as actionsPanelCSSCode } from "./actionsPanelCSSCode";
export { default as alertsCSSCode } from "./alertsCSSCode";
export { default as createMainCSSCode } from "./createMainCSSCode";

/**
 * Overwrites previous CSS rules in regards to the background image.
 * @param {string} backgroundImageURL
 * @returns CSS rule for overwriting the old rules in regards to the background image
 */
export function newBackgroundImageCSSCode(backgroundImageURL: string): string {
  return `#app-mount{background: url(${backgroundImageURL}) center center no-repeat !important; background-size: cover !important;}`;
}

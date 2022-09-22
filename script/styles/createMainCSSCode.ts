import { preferencesStore } from "../stores";
import rawCSSCode from "./rawCSSCode";

/**
 * Assembles the CSS code for the main stylesheet, that styles everything and allows for transparency. It concatenates
 * the class names of the elements needed for everything to be displayed correctly.
 * @returns stylesheet's CSS code
 */

export default function createMainCSSCode(): string {
  const brightnessLevel = preferencesStore.get("brightness") as number;
  const isDarkTheme = preferencesStore.get("isDarkTheme") as boolean;
  /**
   * @var {brightnessLevelRGBA} - controls how opaque the background image should be
   */
  const brightnessLevelRGBA = isDarkTheme
    ? `rgba(0, 0, 0, 0.${brightnessLevel})` || "rgba(0,0,0,0.9)"
    : `rgba(255, 255, 255, 0.${brightnessLevel})` || "rgba(255,255,255,0.7)";

  /**
   * @var {variousElementsBackground} & @var {variousElementsBackgroundMoreOpaque} - style
   * various elements of Discord such as invites, popups, and other elements of the sort,
   * that need a background color to display properly
   */
  const variousElementsBackground = isDarkTheme ? `rgba(0,0,0,0.78)` : `rgba(255,255,255,0.85)`;
  const variousElementsBackgroundMoreOpaque = isDarkTheme ? `rgba(0,0,0,0.92)` : `rgba(255,255,255,0.95)`;

  return rawCSSCode({
    backgroundImageURL: preferencesStore.get("backgroundImageURL") as string,
    blurLevelPixels: `${preferencesStore.get("blur") as number}px`,
    brightnessLevelRGBA,
    variousElementsBackground,
    variousElementsBackgroundMoreOpaque,
  });
}

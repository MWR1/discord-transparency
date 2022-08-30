import { BrightnessLevel, DOMElement } from "../../@types";

interface ToggleThemeParams {
  isDarkTheme: boolean;
  brightnessLevel: BrightnessLevel;
  mainStylesheet: HTMLElement;
  overlayBarElement: DOMElement;
}

/**
 * Toggles the appearance between the default look of Discord and the transparency theme.
 * @param {ToggleThemeParams} toggleThemeParams
 * @param {boolean} toggleThemeParams.isDarkTheme - allows styling elements depending on the theme (white/dark)
 * @param {number} toggleThemeParams.brightnessLevel - the brightness level chosen
 * @param {HTMLElement} toggleThemeParams.mainStylesheet - the stylesheet that styles everything
 * @param {DOMElement} toggleThemeParams.overlayBarElement - the bar at the very top of the app. It has to be styled individually because it just doesn't feel like cooperating
 */

export default function toggleTheme({
  isDarkTheme,
  brightnessLevel,
  mainStylesheet,
  overlayBarElement,
}: ToggleThemeParams): void {
  if (mainStylesheet.getAttribute("media")) {
    mainStylesheet.removeAttribute("media");
    if (overlayBarElement !== null)
      overlayBarElement.style.backgroundColor = isDarkTheme
        ? `rgba(0,0,0,0.${brightnessLevel.value}`
        : `rgba(255,255,255,0.${brightnessLevel.value}`;

    return;
  }

  mainStylesheet.setAttribute("media", "1px");
  if (overlayBarElement !== null) overlayBarElement.style.backgroundColor = "var(--color-tertiary)";
}

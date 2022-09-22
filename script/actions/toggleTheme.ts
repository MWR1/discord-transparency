import { NullableHTMLElement } from "../../types";
import { actionsPanelActiveClassName, overlayBarElementBackgroundColor } from "../configs/identifiers";
import { importantElementsStore, preferencesStore } from "../stores";

/**
 * Toggles the appearance between the default look of Discord and the transparency theme.
 */

export default function toggleTheme(actionsPanel: HTMLElement): void {
  const mainStyleSheet = importantElementsStore.get("mainStyleSheet") as HTMLStyleElement;
  const overlayBarElement = importantElementsStore.get("overlayBarElement") as NullableHTMLElement;

  if (!mainStyleSheet.hasAttribute("media")) {
    mainStyleSheet.setAttribute("media", "1px");
    if (overlayBarElement !== null) overlayBarElement.style.backgroundColor = overlayBarElementBackgroundColor;
    actionsPanel.style.display = "none";
    return;
  }

  const isDarkTheme = preferencesStore.get("isDarkTheme") as boolean;
  const brightnessLevel = preferencesStore.get("brightness") as number;

  mainStyleSheet.removeAttribute("media");

  if (overlayBarElement !== null)
    overlayBarElement.style.backgroundColor = isDarkTheme
      ? `rgba(0,0,0,0.${brightnessLevel}`
      : `rgba(255,255,255,0.${brightnessLevel}`;

  const isActionsPanelActive = actionsPanel.classList.contains(actionsPanelActiveClassName);
  if (isActionsPanelActive) actionsPanel.style.display = "block";
}

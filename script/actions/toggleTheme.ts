import { NullableHTMLElement } from "../../types";
import { actionsPanelActiveClassName, titleBarElementBackgroundColor } from "../configs/identifiers";
import { importantElementsStore, preferencesStore } from "../stores";

/**
 * Toggles the appearance between the default look of Discord and the transparency theme.
 */

export default function toggleTheme(actionsPanel: HTMLElement): void {
  const mainStyleSheet = importantElementsStore.get("mainStyleSheet") as HTMLStyleElement;
  const titleBarElement = importantElementsStore.get("titleBarElement") as NullableHTMLElement;

  if (!mainStyleSheet.hasAttribute("media")) {
    mainStyleSheet.setAttribute("media", "1px");
    if (titleBarElement !== null) titleBarElement.style.backgroundColor = titleBarElementBackgroundColor;
    actionsPanel.style.display = "none";
    return;
  }

  const isDarkTheme = preferencesStore.get("isDarkTheme") as boolean;
  const brightnessLevel = preferencesStore.get("brightness") as number;

  mainStyleSheet.removeAttribute("media");

  if (titleBarElement !== null)
    titleBarElement.style.backgroundColor = isDarkTheme
      ? `rgba(0,0,0,0.${brightnessLevel}`
      : `rgba(255,255,255,0.${brightnessLevel}`;

  const isActionsPanelActive = actionsPanel.classList.contains(actionsPanelActiveClassName);
  if (isActionsPanelActive) actionsPanel.style.display = "block";
}

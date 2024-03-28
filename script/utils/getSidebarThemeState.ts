import { NullableHTMLElement } from "../../types";
import { sidebarDarkThemeIndicator } from "../configs/classNames";
import { generalDarkThemeClassName } from "../configs/identifiers";
import { importantElementsStore, preferencesStore } from "../stores";

/**
 * Checks to see if the user has a white theme, but a dark sidebar. If that's so, the user must
 * disable it, because it messes up the text contrast.
 * @returns true if the sidebar has a dark theme, and false otherwise.
 */
export default function getSidebarThemeState() {
  const isDarkTheme = preferencesStore.get("isDarkTheme") as boolean;
  const titleBarElement = importantElementsStore.get("titleBarElement") as NullableHTMLElement;
  // We can check whether the sidebar is dark themed by checking whether the titleBar
  // is dark themed, and the global theme is white.
  // If titleBar doesn't exist, then we use another element, represented by the class name
  // of "sidebarDarkThemeIndicator".
  if (titleBarElement !== null) return !isDarkTheme && titleBarElement.classList.contains(generalDarkThemeClassName);

  const sidebarDarkThemeIndicatorElement: NullableHTMLElement = document.querySelector(sidebarDarkThemeIndicator);
  if (sidebarDarkThemeIndicatorElement !== null)
    return !isDarkTheme && sidebarDarkThemeIndicatorElement.classList.contains(generalDarkThemeClassName);

  // If the indicator element doesn't exist anymore, then don't don't say the sidebar is dark themed.
  return false;
}

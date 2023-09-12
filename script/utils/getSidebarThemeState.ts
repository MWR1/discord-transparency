import { NullableHTMLElement } from "../../types";
import { sidebarDarkThemeIndicator } from "../configs/classNames";
import { generalDarkThemeClassName } from "../configs/identifiers";
import { importantElementsStore, preferencesStore } from "../stores";
import getElementWithAlert from "./getElementWithAlert";

/**
 * Checks to see if the user has a white theme, but a dark sidebar. If that's so, the user must
 * disable it, because it messes up the text contrast.
 * @returns true if the sidebar has a dark theme, and false otherwise.
 */
export default function getSidebarThemeState() {
  const isDarkTheme = preferencesStore.get("isDarkTheme") as boolean;
  const overlayBarElement = importantElementsStore.get("overlayBarElement") as NullableHTMLElement;
  // We can check whether the sidebar is dark themed by checking whether the overlayBar
  // is dark themed, and the global theme is white.
  // If overlayBar doesn't exist, then we use another element, represented by the class name
  // of "sidebarDarkThemeIndicator".
  if (overlayBarElement !== null)
    return !isDarkTheme && overlayBarElement.classList.contains(generalDarkThemeClassName);

  const sidebarDarkThemeIndicatorElement: NullableHTMLElement = getElementWithAlert(sidebarDarkThemeIndicator);
  if (sidebarDarkThemeIndicatorElement !== null)
    return !isDarkTheme && sidebarDarkThemeIndicatorElement.classList.contains(generalDarkThemeClassName);

  // If the indicator element doesn't exist anymore, then don't don't say the sidebar is dark themed.
  return false;
}

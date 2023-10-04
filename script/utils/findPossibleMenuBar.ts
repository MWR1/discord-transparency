import { NullableHTMLElement } from "../../types";
import { popupsContainer } from "../configs/classNames";

/**
 * Tries to find the context menu associated with the image. Discord uses the class name held by the variable
 * "popupsContainer" to hold context menus. It's just an overlay that dismisses context menus when clicked on it.
 * We go through any such containers to check if there are any elements that have a "menu" role and contain "menu"
 * in their class name.
 * @returns the element if it's found it, and null otherwise.
 * @remarks This function does not ensure that the found menu bar is the one associated with the image. In the worst case,
 * the button may not be positioned at its intended location.
 */

export default function findPossibleMenuBar(): NullableHTMLElement {
  const popupsContainersElements: HTMLElement[] = Array.from(document.querySelectorAll(popupsContainer));
  if (popupsContainersElements.length === 0) return null;

  for (const popupsContainersElement of popupsContainersElements) {
    const possibleMenuBar: NullableHTMLElement = popupsContainersElement.querySelector("div[role='menu']");
    if (possibleMenuBar?.className.includes("menu")) return possibleMenuBar;
  }

  return null;
}

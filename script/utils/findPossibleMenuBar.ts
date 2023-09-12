import { popupsContainer } from "../configs/classNames";

/**
 * Tries to find the context menu associated with the image.
 * @returns the element if it's found it, and null otherwise.
 */

export default function findPossibleMenuBar(): HTMLElement | null {
  const popupsContainersElements = Array.from(document.querySelectorAll(popupsContainer));
  if (popupsContainersElements.length === 0) return null;

  for (const popupsContainersElement of popupsContainersElements) {
    const possibleMenuBar = popupsContainersElement.querySelector("div[role='menu']") as HTMLElement;
    if (possibleMenuBar?.className.includes("menu")) return possibleMenuBar;
  }

  return null;
}

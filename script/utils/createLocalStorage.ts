import { newErrorAlertText } from "../configs/texts";
import createElement from "./createElement";

/**
 * Creates a local storage object, by creating an invisible iframe.
 * The Discord client deletes the localStorage object, but it's needed to store data
 * such as the brightness level.
 * @returns true if the localStorage object has been created, and false if there's been an error.
 */

export default function createLocalStorage(): boolean {
  const localStorageIframe: HTMLIFrameElement = createElement<HTMLIFrameElement>({
    elementName: "iframe",
    appendTo: document.body,
    htmlProps: {},
  });
  localStorageIframe.style.display = "none";

  if (localStorageIframe.contentWindow === null) {
    alert(
      newErrorAlertText("Could not create the localStorage object because the iframe's contentWindow isn't defined.")
    );
    return false;
  }

  // Performed this type assertion because window.localStorage is a readonly property.
  (window.localStorage as Storage) = localStorageIframe.contentWindow.localStorage;
  return true;
}

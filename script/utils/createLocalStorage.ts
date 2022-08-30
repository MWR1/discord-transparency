import { newErrorAlertText } from "../configs/texts";
import createElement from "./createElement";

/**
 * Creates a local storage object, by creating an invisible iframe.
 * The Discord client deletes the localStorage object, and we use it to
 * store things such as the brightness level.
 */

export default function createLocalStorage(): void {
  const localStorageIframe: HTMLIFrameElement = createElement<HTMLIFrameElement>({
    elementName: "iframe",
    appendTo: document.body,
    htmlProps: {},
  });
  localStorageIframe.style.display = "none";

  if (!localStorageIframe.contentWindow) {
    alert(newErrorAlertText("Could not create localStorage object because iframe's contentWindow isn't defined."));
    return;
  }

  // Performed this type assertion because window.localStorage is a readonly property
  (window.localStorage as Storage) = localStorageIframe.contentWindow.localStorage;
}

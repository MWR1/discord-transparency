import { NullableHTMLElement } from "../../types";
import { imageContextMenuPopup } from "../configs/classNames";
import { noFindContextMenuObserverTimeoutDuration } from "../configs/durations";
import { setAsBackgroundImageButtonID } from "../configs/identifiers";
import { newErrorAlertText, setBackgroundButtonText } from "../configs/texts";
import { observersStore, preferencesStore } from "../stores";
import ContextMenuObserver from "./ContextMenuObserver";
import changeBackgroundImage from "./changeBackgroundImage";
import createElement from "./createElement";
import findPossibleMenuBar from "./findPossibleMenuBar";

/*
 * As the handler tries to search for the context menu created by Discord, the class names could change.
 * There is a backup for this scenario represented by some code that runs in a setTimeout. If the user cancels the
 * context menu, we should also cancel the timeout, which is what this variable is for.
 */
let noFindContextMenuObserverTimeoutID: ReturnType<typeof setTimeout>;
/**
 * Handles the stitching of a "Set as background image" button to the context menu created by Discord.
 * @param {Event} event - the event associated with the "contextmenu" event listener
 * @remarks Since the capture phase happens before the bubbling phase, the context menu element will
 * not exist when the custom handler fires. We have to detect when the element is created.
 */
export default function contextMenuHandler(event: Event): void {
  clearTimeout(noFindContextMenuObserverTimeoutID);
  if (event.target === null) return;

  const imageElement: HTMLAnchorElement = event.target as HTMLAnchorElement;
  if (imageElement.nodeName !== "A" || !imageElement.hasAttribute("href") || !imageElement.href.includes("cdn.discord"))
    return;

  let contextMenu: NullableHTMLElement = null;
  const observer = new ContextMenuObserver(document.body);

  try {
    observer
      .onTrigger((mutation: MutationRecord) => {
        const mutationTarget: HTMLElement = mutation.target as HTMLElement;
        contextMenu = mutationTarget.querySelector(imageContextMenuPopup);
        if (contextMenu === null || contextMenu.role !== "menu") return;

        createSetBackgroundImageButton(contextMenu, imageElement);

        clearTimeout(noFindContextMenuObserverTimeoutID);
        observer.unobserve();
        observersStore.delete("contextMenuCreationObserver");
      })
      .observe({ subtree: true, childList: true });
  } catch (error) {
    alert(newErrorAlertText(error.message));
    return;
  }

  observersStore.set("contextMenuCreationObserver", observer);

  noFindContextMenuObserverTimeoutID = setTimeout(() => {
    observer.unobserve();
    observersStore.delete("contextMenuCreationObserver");

    contextMenu = findPossibleMenuBar();
    if (contextMenu !== null) createSetBackgroundImageButton(contextMenu, imageElement);
  }, noFindContextMenuObserverTimeoutDuration);
}

/**
 * Creates a "Set as background image" button on an image the user right clicked on.
 * @param {HTMLElement} contextMenu - the context menu element created by Discord
 * @param {HTMLAnchorElement} imageElement - the image element which triggered the "contextmenu" event
 */
function createSetBackgroundImageButton(contextMenu: HTMLElement, imageElement: HTMLAnchorElement): void {
  const isDarkTheme = preferencesStore.get("isDarkTheme") as boolean;
  const setAsBackgroundButton = createElement<HTMLButtonElement>({
    elementName: "button",
    appendTo: contextMenu,
    htmlProps: {
      id: setAsBackgroundImageButtonID,
      textContent: setBackgroundButtonText,
      style: {
        color: isDarkTheme ? "gold" : "#7c7300",
        boxShadow: `0px 0px 13px 0px ${isDarkTheme ? "hsl(51deg 100% 50% / 45%)" : "hsl(51deg 100% 22% / 45%)"}`,
      },
    },
  });

  setAsBackgroundButton.onclick = () => changeBackgroundImage(imageElement.href);
}

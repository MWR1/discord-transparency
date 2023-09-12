import { imageContextMenuPopup } from "../configs/classNames";
import { setAsBackgroundImageButtonID } from "../configs/identifiers";
import { setBackgroundButtonText } from "../configs/texts";
import { preferencesStore } from "../stores";
import changeBackgroundImage from "./changeBackgroundImage";
import createElement from "./createElement";
import findPossibleMenuBar from "./findPossibleMenuBar";
export default function contextMenuHandler(event: Event) {
  if (event.target === null) return;

  const imageElement: HTMLAnchorElement = event.target as HTMLAnchorElement;
  if (imageElement.nodeName !== "A" || !imageElement.hasAttribute("href") || !imageElement.href.includes("cdn")) return;

  // This event uses the capturing phase because event bubbling is disabled.
  // This is the earliest phase, and therefore no DOM additions (i.e. the contextm menu creatin)
  // will have been registered at the moment of the event firing. Therefore, we need to stall verification
  // for the duration of a loop in the event loop.
  setTimeout(() => {
    const contextMenu: HTMLElement | null = document.querySelector(imageContextMenuPopup) ?? findPossibleMenuBar();
    if (contextMenu === null) return;

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
  }, 0);
}

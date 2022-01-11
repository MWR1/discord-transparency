import { BrightnessLevel, DOMElement } from "../@types";
import actions from "./actions";
import toggleTheme from "./actions/toggleTheme";
import toggleActionsPanel from "./actionsPanel";
import { warningDuration, welcomeDuration } from "./configs/durations";
import { newErrorAlertText, sidebarAlertText, welcomeText } from "./configs/texts";
import removeExistingCodeFootprint from "./removeExistingCodeFootprint";
import { overlayBar, overlayDarkener, sidebarDarkThemeIndicator } from "./utils/classNames";
import createAlert from "./utils/createAlert";
import createElement from "./utils/createElement";
import createLocalStorage from "./utils/createLocalStorage";
import createMainCSSCode from "./utils/createMainCSSCode";
import getElement from "./utils/getElement";

(function (): void {
  createLocalStorage();

  // We didn't use getElement here, because it shows an error if the element is not defined - which is good, but not in this case.
  // In this case the overlayBar element doesn't exist on the browser version of Discord.
  const overlayBarElement: DOMElement = document.querySelector(`.${overlayBar}`);
  const overlayDarkenerElement: DOMElement = getElement(`.${overlayDarkener}`);

  const isDarkTheme: boolean = document.documentElement.classList.contains("theme-dark");
  let isSidebarDarkThemed: boolean;

  // We can check whether the sidebar is dark themed by checking whether the overlayBar is dark themed, and the global theme is white.
  // If overlayBar doesn't exist, then we use another element, represented by the classname of "sidebarDarkThemeIndicator"
  if (overlayBarElement !== null)
    isSidebarDarkThemed = !isDarkTheme && overlayBarElement.classList.contains("theme-dark");
  else {
    const sidebarDarkThemeIndicatorElement: DOMElement = getElement(`.${sidebarDarkThemeIndicator}`);
    if (sidebarDarkThemeIndicatorElement !== null)
      isSidebarDarkThemed = !isDarkTheme && sidebarDarkThemeIndicatorElement.classList.contains("theme-dark");
  }

  const brightnessLevel: BrightnessLevel = { value: parseInt(window.localStorage.getItem("brghtns") || "9") || 9 };

  const mainCSSCode: string = createMainCSSCode({
    backgroundImageURL: window.localStorage.getItem("bgImg") || "",
    brightnessLevel,
    isDarkTheme,
  });

  removeExistingCodeFootprint();

  const mainStylesheet: HTMLStyleElement = createElement<HTMLStyleElement>({
    elementName: "style",
    appendTo: document.head,
    htmlProps: { id: "TRANSPARENCY", innerHTML: mainCSSCode },
  });

  createAlert({ text: welcomeText, timeout: welcomeDuration, containsHTML: true }).then(() => {
    if (isSidebarDarkThemed) createAlert({ text: sidebarAlertText, timeout: warningDuration, containsHTML: true });
  });

  window.onkeydown = (event: KeyboardEvent) => {
    if (!event.ctrlKey) return;

    if (event.shiftKey && event.code === "KeyX") {
      event.preventDefault(); // prevents the right-to-left left-to-right text toggle on some browsers
      try {
        toggleActionsPanel({
          actions,
          props: {
            isDarkTheme,
            brightnessLevel,
            mainStylesheet,
            // This type assertion is required because we've already seen whether this element is null or not (the alert). If it is,
            // everything will break so we don't need to check for null anymore lol
            overlayDarkenerElement: overlayDarkenerElement as HTMLElement,
            overlayBarElement,
          },
        });
      } catch (error) {
        alert(newErrorAlertText(error.message));
      }

      return;
    }

    if (event.code === "KeyD") {
      event.preventDefault(); // prevents the bookmark shortcut on some browsers
      try {
        toggleTheme({
          mainStylesheet,
          isDarkTheme,
          brightnessLevel,
          overlayBarElement: overlayBarElement as HTMLElement,
        });
      } catch (error) {
        alert(newErrorAlertText(error.message));
      }
    }
  };
})();

import createLocalStorage from "../utils/createLocalStorage";
import createBackgroundChangingInput from "./functions/backgroundChangingInput";
import createBrightnessTweaker from "./functions/brightnessTweaker";
import { createStyleSheet, createAlert } from "../utils/createElement";
import mainCSS from "../utils/styling";

import { overlayBar, overlayDarkener } from "../utils/classNames";
import { keyboardShortcutsText, sidebarDarkThemeAlertText } from "../utils/texts";
import disableTheme from "./functions/disableTheme";

(function () {
  createLocalStorage();
  const state = {
    backgroundChangingInput: {
      active: false,
      iframeButton: null,

      set: (property, value) => {
        state.backgroundChangingInput[property] = value;
        return state.backgroundChangingInput; // for chaining
      },
    },

    brightnessTweaker: {
      active: false,
      level: window.localStorage.getItem("brghtns") || "9",
      slider: null,
      saveButton: null,
      slideBrightnessIframe: null,

      set: (property, value) => {
        state.brightnessTweaker[property] = value;
        return state.brightnessTweaker; // for chaining
      },
    },
    isDarkTheme: document.documentElement.classList.contains("theme-dark"),
  };

  const overlayDarkenerElement = document.querySelector(`.${overlayDarkener}`);
  const overlayBarElement = document.querySelector(`.${overlayBar}`);
  // the bar at the top is also black when the sidebar is black (overlayBarElement)
  const sidebarIsDarkThemed = !state.isDarkTheme && overlayBarElement.classList.contains("theme-dark");
  const CSS = mainCSS({ backgroundImageURL: window.localStorage.getItem("bgImg"), state });

  const sheet = createStyleSheet({
    parent: document,
    id: "TRANSPARENCY",
    isMainStyleSheet: true,
    CSS,
  });

  document.head.appendChild(sheet);

  //initial keyboard shortcuts notification (10 seconds)
  createAlert({ text: keyboardShortcutsText, timeout: 1000 * 10, containsHTML: true }).then(() => {
    if (sidebarIsDarkThemed) createAlert({ text: sidebarDarkThemeAlertText, timeout: 1000 * 10, containsHTML: true });
  });

  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey) {
      if (e.code === "KeyD") disableTheme(state, sheet, overlayBarElement);
      else if (e.code === "KeyB")
        createBrightnessTweaker(state, {
          overlayDarkenerElement,
          overlayBarElement,
        });
      else if (e.altKey) createBackgroundChangingInput(state, sheet);
    }
  });
})();

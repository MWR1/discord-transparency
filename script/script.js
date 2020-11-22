import createLocalStorage from "./actions/createLocalStorage";
import createAlert from "./utils/createAlert";
import createMainCSSCode from "./utils/createMainCSSCode";

import { overlayBar, overlayDarkener, sidebarDarkThemeIndicator } from "./utils/classNames";
import { welcomeBackText, sidebarAlertText } from "./configs/texts.json";
import toggleTheme from "./actions/toggleTheme";
import createElement from "./utils/createElement";
import { welcomeBackDuration, warningDuration } from "./configs/durations.json";
import removeExistingCodeFootprint from "./utils/removeExistingCodeFootprint";
import initActionsPanel from "./utils/initActionsPanel";
import actions from "./actions";

(function () {
  createLocalStorage();

  const overlayBarElement = document.querySelector(`.${overlayBar}`);
  const overlayDarkenerElement = document.querySelector(`.${overlayDarkener}`);

  const isDarkTheme = document.documentElement.classList.contains("theme-dark");
  let sidebarIsDarkThemed;

  if (overlayBarElement) sidebarIsDarkThemed = !isDarkTheme && overlayBarElement.classList.contains("theme-dark");
  else {
    const sidebarDarkThemeIndicatorElement = document.querySelector(`.${sidebarDarkThemeIndicator}`);
    if (sidebarDarkThemeIndicatorElement)
      sidebarIsDarkThemed = !isDarkTheme && sidebarDarkThemeIndicatorElement.classList.contains("theme-dark");
  }

  let brightnessLevel = window.localStorage.getItem("brghtns") || 9;

  const mainCSSCode = createMainCSSCode({
    backgroundImageURL: window.localStorage.getItem("bgImg") || "",
    brightnessLevel,
    isDarkTheme,
  });

  // removes whatever logic might've been left from applying the script more than once
  // (e.g. removing stylesheets, event listeners)
  removeExistingCodeFootprint();

  const mainStylesheet = createElement("style");
  mainStylesheet.setProperty("id", "TRANSPARENCY").setProperty("innerHTML", mainCSSCode).appendTo(document.head);

  const togglePanel = initActionsPanel({
    actions,
    props: {
      isDarkTheme,
      brightnessLevel,
      mainStylesheet: mainStylesheet.getDOMElement(),
      overlayDarkenerElement,
      overlayBarElement,
    },
  });

  createAlert({ text: welcomeBackText, timeout: welcomeBackDuration, containsHTML: true }).then(() => {
    if (sidebarIsDarkThemed) createAlert({ text: sidebarAlertText, timeout: warningDuration, containsHTML: true });
  });

  window.onkeydown = (e) => {
    if (e.ctrlKey)
      if (e.shiftKey && e.code === "KeyX") togglePanel();
      else if (e.code === "KeyD") {
        e.preventDefault(); // prevents the bookmark shortcut on Chrome
        toggleTheme({
          mainStylesheet: mainStylesheet.getDOMElement(),
          isDarkTheme,
          brightnessLevel,
          overlayBarElement,
        });
      }
  };
})();

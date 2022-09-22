import { themeChangeWarningDuration } from "../configs/durations";
import { generalDarkThemeClassName, generalWhiteThemeClassName } from "../configs/identifiers";
import { newErrorAlertText, themeChangeDetectionText } from "../configs/texts";
import { observersStore, preferencesStore } from "../stores";
import createAlert from "../utils/createAlert";
import ClassChangeObserver from "./ClassChangeObserver";

/**
 * @returns true if the observer has has been successfully created, and false if there's been an error.
 */
export default function initThemeChangeObserver(): boolean {
  const isDarkTheme = preferencesStore.get("isDarkTheme") as boolean;

  const observer = new ClassChangeObserver({
    targetElement: document.documentElement,
    classNameToChange: isDarkTheme ? generalDarkThemeClassName : generalWhiteThemeClassName,
    classNameToChangeInto: isDarkTheme ? generalWhiteThemeClassName : generalDarkThemeClassName,
  });

  try {
    observer
      .onClassChange(() => {
        createAlert({ text: themeChangeDetectionText, timeout: themeChangeWarningDuration }).then(() => {
          observer.unobserve();
          location.reload();
        });
      })
      .observe({ attributes: true, attributeFilter: ["class"] });
  } catch (error) {
    alert(newErrorAlertText(error.message));
    return false;
  }

  observersStore.set("themeChangeObserver", observer);
  return true;
}

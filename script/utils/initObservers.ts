import { themeChangeWarningDuration } from "../configs/durations";
import { generalDarkThemeClassName, generalWhiteThemeClassName } from "../configs/identifiers";
import { newErrorAlertText, themeChangeDetectionText } from "../configs/texts";
import { observersStore, preferencesStore } from "../stores";
import ClassChangeObserver from "./ClassChangeObserver";
import createAlert from "./createAlert";

export default function initObservers(): boolean {
  if (initThemeChangeObserver()) {
    // @ts-ignore
    window.__TRANSPARENCY_OBSERVERS__ = observersStore;
    return true;
  }

  return false;
}

/**
 * @returns true if the observer has has been successfully created, and false if there's been an error.
 */
function initThemeChangeObserver(): boolean {
  const isDarkTheme = preferencesStore.get("isDarkTheme") as boolean;

  const observer = new ClassChangeObserver({
    targetElement: document.documentElement,
    from: isDarkTheme ? generalDarkThemeClassName : generalWhiteThemeClassName,
    to: isDarkTheme ? generalWhiteThemeClassName : generalDarkThemeClassName,
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

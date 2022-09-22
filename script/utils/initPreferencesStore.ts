import {
  backgroundImageStorageKey,
  blurStorageKey,
  brightnessStorageKey,
  generalDarkThemeClassName,
  legacyBackgroundImageStorageKey,
  legacyBrightnessStorageKey,
} from "../configs/identifiers";
import { newErrorAlertText } from "../configs/texts";
import { preferencesStore } from "../stores";

/**
 * Initialises the preferences store, which holds data about the user's brightness level, background image
 * URL, and so on. Also deals with legacy storage keys used for the background image URL and brightness level.
 * @returns true if the preferences store has been successfully created, and false if there's been an error.
 */

export default function initPreferencesStore(): boolean {
  preferencesStore.set("isDarkTheme", document.documentElement.classList.contains(generalDarkThemeClassName));

  try {
    // If it goes to "unset", then it's NaN.
    let brightnessLevel: number = parseInt(window.localStorage.getItem(brightnessStorageKey) ?? "unset");
    if (isNaN(brightnessLevel)) {
      brightnessLevel = parseInt(window.localStorage.getItem(legacyBrightnessStorageKey) ?? "unset");

      if (isNaN(brightnessLevel)) brightnessLevel = 9;
      else {
        window.localStorage.removeItem(legacyBrightnessStorageKey);
        window.localStorage.setItem(brightnessStorageKey, brightnessLevel.toString());
      }
    }

    let backgroundImageURL: string | null = window.localStorage.getItem(backgroundImageStorageKey);
    if (backgroundImageURL === null) {
      backgroundImageURL = window.localStorage.getItem(legacyBackgroundImageStorageKey);

      // Didn't choose a background image yet (first time loading the script probably).
      if (backgroundImageURL === null) backgroundImageURL = "";
      else {
        window.localStorage.removeItem(legacyBackgroundImageStorageKey);
        window.localStorage.setItem(backgroundImageStorageKey, backgroundImageURL);
      }
    }

    preferencesStore
      .set("brightness", brightnessLevel)
      .set("blur", parseInt(window.localStorage.getItem(blurStorageKey) ?? "unset") || 0)
      .set("backgroundImageURL", backgroundImageURL);
  } catch (error) {
    // localStorage#setItem might fail, though unlikely.
    alert(newErrorAlertText(error.message));
    return false;
  }

  return true;
}

import {
  backgroundImageStorageKey,
  blurStorageKey,
  brightnessStorageKey,
  generalDarkThemeClassName,
} from "../configs/identifiers";
import { preferencesStore } from "../stores";

/**
 * Initialises the preferences store, which holds data about the user's brightness level, background image
 * URL, and so on. Also deals with legacy storage keys used for the background image URL and brightness level.
 * @returns true if the preferences store has been successfully created, and false if there's been an error.
 */

export default function initPreferencesStore(): boolean {
  preferencesStore
    .set("isDarkTheme", document.documentElement.classList.contains(generalDarkThemeClassName))
    .set("brightness", parseInt(window.localStorage.getItem(brightnessStorageKey) ?? "unset") || 9)
    .set("blur", parseInt(window.localStorage.getItem(blurStorageKey) ?? "unset") || 0)
    .set("backgroundImageURL", window.localStorage.getItem(backgroundImageStorageKey) ?? "");

  return true;
}

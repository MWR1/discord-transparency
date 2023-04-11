import {
  backgroundImageStorageKey,
  brightnessStorageKey,
  legacyBackgroundImageStorageKey,
  legacyBrightnessStorageKey,
} from "../configs/identifiers";
import { newErrorAlertText } from "../configs/texts";
import createElement from "./createElement";

/**
 * Creates a local storage object, by creating an invisible iframe.
 * The Discord client deletes the localStorage object, but it's needed to store data
 * such as the brightness level.
 * @returns true if the localStorage object has been created, and false if there's been an error.
 */

function createLocalStorage(): boolean {
  const localStorageIframe: HTMLIFrameElement = createElement<HTMLIFrameElement>({
    elementName: "iframe",
    appendTo: document.body,
    htmlProps: {},
  });
  localStorageIframe.style.display = "none";

  if (localStorageIframe.contentWindow === null) {
    alert(
      newErrorAlertText("Could not create the localStorage object because the iframe's contentWindow isn't defined.")
    );
    return false;
  }

  // Performed this type assertion because window.localStorage is a readonly property.
  (window.localStorage as Storage) = localStorageIframe.contentWindow.localStorage;
  return true;
}

interface ILocalStorageLegacyKeyHandler {
  legacyStorageKey: string;
  newStorageKey: string;
  defaultValue: string;
}

/**
 * Migrates the local storage legacy keys to the new ones.
 * @param {ILocalStorageLegacyKeyHandler} keyData
 * @param {string} keyData.legacyStorageKey - the legacy key name of this key
 * @param {string} keyData.newStorageKey - the current key name
 * @param {string} keyData.defaultValue - the default value pointed to by the key in the local storage
 * @returns {boolean} true if there was no problem migrating, and false otherwise
 */
function handleLocalStorageLegacyKey({
  legacyStorageKey,
  newStorageKey,
  defaultValue,
}: ILocalStorageLegacyKeyHandler): boolean {
  try {
    let newKeyResult: string | null = window.localStorage.getItem(newStorageKey);
    if (newKeyResult === null) {
      newKeyResult = window.localStorage.getItem(legacyStorageKey);

      if (newKeyResult === null) newKeyResult = defaultValue;
      else {
        window.localStorage.removeItem(legacyStorageKey);
        window.localStorage.setItem(newStorageKey, newKeyResult);
      }
    }
    return true;
  } catch (error) {
    // localStorage.setItem could fail.
    alert(newErrorAlertText(error.message));
    return false;
  }
}

export default function initLocalStorage(): boolean {
  return (
    createLocalStorage() &&
    handleLocalStorageLegacyKey({
      legacyStorageKey: legacyBackgroundImageStorageKey,
      newStorageKey: backgroundImageStorageKey,
      defaultValue: "",
    }) &&
    handleLocalStorageLegacyKey({
      legacyStorageKey: legacyBrightnessStorageKey,
      newStorageKey: brightnessStorageKey,
      defaultValue: "9",
    })
  );
}

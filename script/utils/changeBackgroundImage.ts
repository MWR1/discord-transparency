import { backgroundImageStorageKey } from "../configs/identifiers";
import { importantElementsStore, preferencesStore } from "../stores";
import { newBackgroundImageCSSCode } from "../styles";

export default function changeBackgroundImage(backgroundImageURL: string): void {
  const mainStyleSheet = importantElementsStore.get("mainStyleSheet") as HTMLStyleElement;

  mainStyleSheet.innerHTML += newBackgroundImageCSSCode(backgroundImageURL);
  preferencesStore.set("backgroundImageURL", backgroundImageURL);
  window.localStorage.setItem(backgroundImageStorageKey, backgroundImageURL);
}

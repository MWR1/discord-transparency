import { IAction } from "../../types";
import { actionInputClassName, actionWarningClassName, backgroundImageStorageKey } from "../configs/identifiers";
import { backgroundChangerTipText } from "../configs/texts";
import { importantElementsStore, preferencesStore } from "../stores";
import { newBackgroundImageCSSCode } from "../styles";
import createElement from "../utils/createElement";

/**
 * Changes the background image of an existing HTML element that sits behind every UI element.
 */

const backgroundChangerAction: IAction = {
  name: "Change the background image",

  execute(actionBox: HTMLDivElement) {
    const backgroundChangerInput: HTMLInputElement = createElement<HTMLInputElement>({
      elementName: "input",
      appendTo: actionBox,
      htmlProps: {
        className: actionInputClassName,
        placeholder: "Paste image link here",
      },
    });

    backgroundChangerInput.onkeydown = (event: KeyboardEvent) => {
      if (event.code === "Enter" && backgroundChangerInput.value.trim() !== "")
        changeBackgroundImage(backgroundChangerInput);
    };

    // The background changer tip below the input.
    createElement<HTMLParagraphElement>({
      elementName: "p",
      appendTo: actionBox,
      htmlProps: { className: actionWarningClassName, textContent: backgroundChangerTipText },
    });
  },
};

function changeBackgroundImage(backgroundChangerInput: HTMLInputElement): void {
  const inputValue: string = backgroundChangerInput.value;
  const mainStyleSheet = importantElementsStore.get("mainStyleSheet") as HTMLStyleElement;

  mainStyleSheet.innerHTML += newBackgroundImageCSSCode(inputValue);
  preferencesStore.set("backgroundImageURL", inputValue);
  window.localStorage.setItem(backgroundImageStorageKey, inputValue);
}

export default backgroundChangerAction;

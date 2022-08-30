import { Action } from "../../@types";
import { backgroundChangerTipText } from "../configs/texts";
import { newBackgroundImageCSSCode } from "../styles";
import createElement from "../utils/createElement";

/**
 * Changes the background image of an existing HTML element that sits behind every UI element.
 */

interface ChangeBackgroundImageParams {
  event: KeyboardEvent;
  backgroundChangerInput: HTMLInputElement;
  mainStylesheet: HTMLStyleElement;
}

function changeBackgroundImage({ event, backgroundChangerInput, mainStylesheet }: ChangeBackgroundImageParams): void {
  const inputValue = backgroundChangerInput.value;

  if (event.code === "Enter" && inputValue.trim() !== "") {
    mainStylesheet.innerHTML += newBackgroundImageCSSCode(inputValue);
    window.localStorage.setItem("bgImg", inputValue);
  }
}

const backgroundChangerAction: Action = {
  name: "Change the background image",
  execute({ parentBox, props: { mainStylesheet } }) {
    const backgroundChangerInput: HTMLInputElement = createElement<HTMLInputElement>({
      elementName: "input",
      appendTo: parentBox,
      htmlProps: {
        className: "TRANSPARENCY__ACTION-INPUT",
        placeholder: "Paste image link here",
        onkeydown: (event: KeyboardEvent) => changeBackgroundImage({ event, backgroundChangerInput, mainStylesheet }),
      },
    });

    // The background changer tip below the input.
    createElement<HTMLParagraphElement>({
      elementName: "p",
      appendTo: parentBox,
      htmlProps: { id: "TRANSPARENCY__ACTION-WARNING", textContent: backgroundChangerTipText },
    });
  },
};

export default backgroundChangerAction;

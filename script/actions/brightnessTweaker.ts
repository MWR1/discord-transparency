import createAlert from "../utils/createAlert";
import createElement from "../utils/createElement";

import { Action, BrightnessLevel, DOMElement } from "../../@types";
import { brightnessLevelUpdateDuration } from "../configs/durations";

/**
 * Tweaks the brightness of the background picture by changing the opacity of an
 * HTML element that stays on top of the background image.
 */

interface UpdateBrightnessParams {
  brightnessLevel: BrightnessLevel;
  overlayColor: string;
  brightnessIndicator: HTMLHeadingElement;
  brightnessLevelSlider: HTMLInputElement;
  overlayBarElement: DOMElement;
  overlayDarkenerElement: HTMLElement;
}

function updateBrightness({
  brightnessLevel,
  overlayColor,
  brightnessIndicator,
  brightnessLevelSlider,
  overlayBarElement,
  overlayDarkenerElement,
}: UpdateBrightnessParams): void {
  overlayDarkenerElement.style.backgroundColor = `rgba(${overlayColor}, .${brightnessLevelSlider.value})`;

  if (overlayBarElement !== null)
    overlayBarElement.style.backgroundColor = `rgba(${overlayColor}, .${brightnessLevelSlider.value})`;

  brightnessLevel.value = parseInt(brightnessLevelSlider.value);
  brightnessIndicator.textContent = `Level: ${brightnessLevel.value}`;
}

function saveBrightness(brightnessLevel: BrightnessLevel): void {
  window.localStorage.setItem("brghtns", `${brightnessLevel.value}`);

  createAlert({
    text: `Brightness level updated! Now it is at level <b>${brightnessLevel.value}</b>.`,
    containsHTML: true,
    timeout: brightnessLevelUpdateDuration,
  });
}

const brightnessTweakerAction: Action = {
  name: "Change the brightness level",
  execute({ parentBox, props: { isDarkTheme, brightnessLevel, overlayDarkenerElement, overlayBarElement } }) {
    const overlayColor = isDarkTheme ? "0,0,0" : "255,255,255";

    const brightnessIndicator: HTMLHeadingElement = createElement<HTMLHeadingElement>({
      elementName: "h3",
      appendTo: parentBox,
      htmlProps: {
        id: "TRANSPARENCY__ACTION-BRIGHTNESS-LEVEL",
        textContent: `Level: ${brightnessLevel.value}`,
      },
    });

    const brightnessLevelSlider: HTMLInputElement = createElement<HTMLInputElement>({
      elementName: "input",
      appendTo: parentBox,
      htmlProps: {
        className: "TRANSPARENCY__ACTION-INPUT",
        type: "range",
        min: "0",
        max: "9",
        value: `${brightnessLevel.value}`,
        oninput: () =>
          updateBrightness({
            brightnessLevel,
            overlayColor,
            brightnessIndicator,
            brightnessLevelSlider,
            overlayBarElement,
            overlayDarkenerElement,
          }),
      },
    });

    createElement<HTMLButtonElement>({
      elementName: "button",
      appendTo: parentBox,
      htmlProps: {
        id: "TRANSPARENCY__ACTION-SAVE-BRIGHTNESS",
        textContent: "Save brightness level",
        onclick: () => saveBrightness(brightnessLevel),
      },
    });
  },
};

export default brightnessTweakerAction;

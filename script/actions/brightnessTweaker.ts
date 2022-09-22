import { IAction, NullableHTMLElement } from "../../types";
import { levelUpdateDuration } from "../configs/durations";
import {
  actionInputClassName,
  actionLevelIndicatorClassName,
  brightnessStorageKey,
  saveLevelClassName,
} from "../configs/identifiers";
import { importantElementsStore, preferencesStore } from "../stores";
import createAlert from "../utils/createAlert";
import createElement from "../utils/createElement";

/**
 * Tweaks the brightness of the background picture by changing the opacity of an
 * HTML element that stays on top of the background image.
 */

const brightnessTweakerAction: IAction = {
  name: "Change the brightness level",
  execute(actionBox: HTMLDivElement) {
    const overlayColor = (preferencesStore.get("isDarkTheme") as boolean) ? "0,0,0" : "255,255,255";
    const brightnessLevel = preferencesStore.get("brightness") as number;

    const brightnessLevelIndicator: HTMLHeadingElement = createElement<HTMLHeadingElement>({
      elementName: "h3",
      appendTo: actionBox,
      htmlProps: { className: actionLevelIndicatorClassName, textContent: `Brightness level: ${brightnessLevel}` },
    });

    const brightnessLevelSlider: HTMLInputElement = createElement<HTMLInputElement>({
      elementName: "input",
      appendTo: actionBox,
      htmlProps: {
        className: actionInputClassName,
        type: "range",
        min: "0",
        max: "9",
        value: brightnessLevel.toString(),
        oninput: () => updateBrightness({ overlayColor, brightnessLevelIndicator, brightnessLevelSlider }),
      },
    });

    createElement<HTMLButtonElement>({
      elementName: "button",
      appendTo: actionBox,
      htmlProps: { className: saveLevelClassName, textContent: "Save brightness level", onclick: saveBrightnessLevel },
    });
  },
};

interface UpdateBrightnessParams {
  overlayColor: string;
  brightnessLevelIndicator: HTMLHeadingElement;
  brightnessLevelSlider: HTMLInputElement;
}

function updateBrightness({
  overlayColor,
  brightnessLevelIndicator,
  brightnessLevelSlider,
}: UpdateBrightnessParams): void {
  const overlayDarkenerElement = importantElementsStore.get("overlayDarkenerElement") as HTMLDivElement;
  const overlayBarElement = importantElementsStore.get("overlayBarElement") as NullableHTMLElement;

  overlayDarkenerElement.style.backgroundColor = `rgba(${overlayColor}, .${brightnessLevelSlider.value})`;

  if (overlayBarElement !== null)
    overlayBarElement.style.backgroundColor = `rgba(${overlayColor}, .${brightnessLevelSlider.value})`;

  brightnessLevelIndicator.textContent = `Brightness level: ${brightnessLevelSlider.value}`;
  preferencesStore.set("brightness", parseInt(brightnessLevelSlider.value));
}

function saveBrightnessLevel(): void {
  const brightnessLevel = preferencesStore.get("brightness") as number;
  window.localStorage.setItem(brightnessStorageKey, brightnessLevel.toString());

  createAlert({
    text: `Brightness level updated! Now it is at level <b>${brightnessLevel}</b>.`,
    containsHTML: true,
    timeout: levelUpdateDuration,
  });
}

export default brightnessTweakerAction;

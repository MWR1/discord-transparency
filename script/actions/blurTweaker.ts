import { IAction, NullableHTMLElement } from "../../types";
import { levelUpdateDuration } from "../configs/durations";
import {
  actionInputClassName,
  actionLevelIndicatorClassName,
  blurStorageKey,
  saveLevelClassName,
} from "../configs/identifiers";
import { importantElementsStore, preferencesStore } from "../stores";
import createAlert from "../utils/createAlert";
import createElement from "../utils/createElement";

/**
 * Tweaks the blur of the background picture by changing the CSS backdrop-filter
 * property of an HTML element that stays on top of the background image.
 */

const blurTweaker: IAction = {
  name: "Change the blur level",
  execute(actionBox: HTMLDivElement) {
    const blurLevel = preferencesStore.get("blur") as number;

    const blurLevelIndicator: HTMLHeadingElement = createElement<HTMLHeadingElement>({
      elementName: "h3",
      appendTo: actionBox,
      htmlProps: { className: actionLevelIndicatorClassName, textContent: `Blur level: ${blurLevel}` },
    });

    const blurLevelSlider: HTMLInputElement = createElement<HTMLInputElement>({
      elementName: "input",
      appendTo: actionBox,
      htmlProps: {
        className: actionInputClassName,
        type: "range",
        min: "0",
        max: "50",
        value: blurLevel.toString(),
        oninput: () => updateBlur(blurLevelIndicator, blurLevelSlider),
      },
    });

    createElement<HTMLButtonElement>({
      elementName: "button",
      appendTo: actionBox,
      htmlProps: { className: saveLevelClassName, textContent: "Save blur level", onclick: saveBlurLevel },
    });
  },
};

function updateBlur(blurLevelIndicator: HTMLHeadingElement, blurLevelSlider: HTMLInputElement): void {
  const overlayDarkenerElement = importantElementsStore.get("overlayDarkenerElement") as HTMLDivElement;
  const titleBarElement = importantElementsStore.get("titleBarElement") as NullableHTMLElement;

  // https://githubmemory.com/repo/microsoft/TypeScript-DOM-lib-generator/issues/1118
  type BackdropFilterSupport = CSSStyleDeclaration & { backdropFilter: string };

  (overlayDarkenerElement.style as BackdropFilterSupport).backdropFilter = `blur(${blurLevelSlider.value}px)`;

  if (titleBarElement !== null)
    (titleBarElement.style as BackdropFilterSupport).backdropFilter = `blur(${blurLevelSlider.value}px)`;

  blurLevelIndicator.textContent = `Blur level: ${blurLevelSlider.value}`;
  preferencesStore.set("blur", parseInt(blurLevelSlider.value));
}

function saveBlurLevel(): void {
  const blurLevel = preferencesStore.get("blur") as number;
  window.localStorage.setItem(blurStorageKey, blurLevel.toString());

  createAlert({
    text: `Blur level updated! Now it is at level <b>${blurLevel}</b>.`,
    containsHTML: true,
    timeout: levelUpdateDuration,
  });
}

export default blurTweaker;

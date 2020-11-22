import createAlert from "../utils/createAlert";
import createElement from "../utils/createElement";
import { brightnessLevelUpdateDuration } from "../configs/durations.json";
import { brightnessTweakerCSSCode } from "../styles/styles.json";

export default {
  name: "Change the brightness level",
  execute({ parentBox, props }) {
    const brightnessLevelSlider = createElement("input");
    const overlayColor = props.isDarkTheme ? "0,0,0" : "255,255,255";
    const brightnessLevelSliderElement = brightnessLevelSlider.getDOMElement();

    brightnessLevelSlider
      .setProperty("type", "range")
      .setProperty("min", 0)
      .setProperty("max", 9)
      .setProperty("id", "TRANSPARENCY__SLIDE-BRIGHTNESS")
      .setProperty("value", props.brightnessLevel)
      .setProperty("oninput", () => {
        props.overlayDarkenerElement.style.backgroundColor = `rgba(${overlayColor}, .${brightnessLevelSliderElement.value})`;
        if (props.overlayBarElement)
          props.overlayBarElement.style.backgroundColor = `rgba(${overlayColor}, .${brightnessLevelSliderElement.value})`;
        props.brightnessLevel = brightnessLevelSliderElement.value;
      })
      .appendTo(parentBox);

    const saveBrightnessButton = createElement("button");
    saveBrightnessButton
      .setProperty("id", "TRANSPARENCY__SAVE-BRIGHTNESS")
      .setProperty("textContent", "Save brightness level")
      .setProperty("onclick", () => {
        window.localStorage.setItem("brghtns", props.brightnessLevel);

        createAlert({
          text: `Brightness level updated! Now it is at level <b>${props.brightnessLevel}</b>.`,
          containsHTML: true,
          timeout: brightnessLevelUpdateDuration,
        });
      })
      .appendTo(parentBox);

    const brightnessTweakerStyling = createElement("style");
    brightnessTweakerStyling.setProperty("innerHTML", brightnessTweakerCSSCode).appendTo(parentBox);
  },
};

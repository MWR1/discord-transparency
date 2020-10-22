import { createInput, createButton, createStyleSheet, createAlert } from "../../utils/createElement";

export default function createBrightnessTweaker(state, { overlayDarkenerElement, overlayBarElement }) {
  if (state.brightnessTweaker.active) return removeBrightnessTweaker(state);

  const slideBrightnessIframe = document.createElement("iframe");
  slideBrightnessIframe.id = "TRANSPARENCY__SLIDE-BRIGHTNESS-IFRAME";
  document.body.appendChild(slideBrightnessIframe);

  const slider = createInput({
    type: "range",
    id: "TRANSPARENCY__SLIDE-BRIGHTNESS",
    value: state.brightnessTweaker.level,
    eventType: "oninput",
    eventMethod: state.isDarkTheme
      ? (_) => {
          overlayDarkenerElement.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.slider.value})`;
          overlayBarElement.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.slider.value})`;
          state.brightnessTweaker.set("level", state.brightnessTweaker.slider.value);
        }
      : (_) => {
          overlayDarkenerElement.style.backgroundColor = `rgba(255,255,255,0.${state.brightnessTweaker.slider.value})`;
          overlayBarElement.style.backgroundColor = `rgba(255,255,255,0.${state.brightnessTweaker.slider.value})`;
          state.brightnessTweaker.set("level", state.brightnessTweaker.slider.value);
        },
  });

  const saveButton = createButton({
    id: "TRANSPARENCY__SAVE-BRIGHTNESS",
    text: "Save brightness level",
    eventMethod: (_) => {
      window.localStorage.setItem("brghtns", state.brightnessTweaker.level);
      createAlert({
        text: `Brightness level updated! Now it is at level <b>${state.brightnessTweaker.level}</b>.`,
        containsHTML: true,
        timeout: 1000 * 3, // 3 seconds
      });

      removeBrightnessTweaker(state);
    },
  });

  const iframeSheet = createStyleSheet({
    parent: slideBrightnessIframe.contentDocument,
    isMainStyleSheet: false,
    CSS: `#TRANSPARENCY__SLIDE-BRIGHTNESS {transform: scale(1.5);height: 200px;-webkit-appearance: slider-vertical;}#TRANSPARENCY__SAVE-BRIGHTNESS {height:40px;width:150px;margin-top:80px;}`,
  });

  const brightnessIframeBody = slideBrightnessIframe.contentDocument.body;

  brightnessIframeBody.style = `display:flex;justify-content:center;align-items:center;flex-direction:column;`;
  brightnessIframeBody.appendChild(iframeSheet);
  brightnessIframeBody.appendChild(slider);
  brightnessIframeBody.appendChild(saveButton);

  state.brightnessTweaker.set("slideBrightnessIframe", slideBrightnessIframe).set("slider", slider).set("active", true);
}

function removeBrightnessTweaker(state) {
  state.brightnessTweaker.slider.remove();
  state.brightnessTweaker.slideBrightnessIframe.remove();
  state.brightnessTweaker.set("slider", null).set("slideBrightnessIframe", null).set("active", false);
}

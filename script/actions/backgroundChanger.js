import createElement from "../utils/createElement";
import { backgroundChangerTipText } from "../configs/texts.json";
import { backgroundChangerCSSCode } from "../styles/styles.json";

export default {
  name: "Change the background image",
  execute({ parentBox, props }) {
    const backgroundChangerStyling = createElement("style");
    parentBox.style.overflow = "hidden";
    backgroundChangerStyling.setProperty("innerHTML", backgroundChangerCSSCode).appendTo(parentBox);

    const backgroundChangerInput = createElement("input");
    backgroundChangerInput
      .setProperty("id", "TRANSPARENCY__IMAGE-LINK")
      .setProperty("placeholder", "Paste discord image link here")
      .setProperty("onkeydown", (e) => {
        const inputValue = backgroundChangerInput.getProperty("value");
        if (e.code === "Enter" && inputValue.trim() !== "") {
          props.mainStylesheet.innerHTML += `#app-mount{background: url(${inputValue}) center center no-repeat !important; background-size: cover !important;}`;
          window.localStorage.setItem("bgImg", inputValue);
        }
      })
      .appendTo(parentBox);

    // the background changer tip below the input
    const backgroundChangerTip = createElement("p");
    backgroundChangerTip.setProperty("textContent", backgroundChangerTipText).appendTo(parentBox);
  },
};

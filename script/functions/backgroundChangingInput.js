import { createInput, createStyleSheet } from "../../utils/createElement";
import { backgroundChangingInputTip } from "../../utils/texts";

export default function createBackgroundChangingInput(state, sheet) {
  if (state.backgroundChangingInput.active) return removeBackgroundChangingInput(state);

  const input = createInput({
    type: "input",
    id: "TRANSPARENCY__IMAGE-LINK",
    text: "Paste discord image link here",
    eventMethod: (e) => {
      if (e.key === "Enter" && input.value.trim() !== "") {
        sheet.innerHTML += `#app-mount{background: url(${input.value}) center center no-repeat !important; background-size: cover !important;}`;
        window.localStorage.setItem("bgImg", input.value);
        iframeButton.remove();
        state.backgroundChangingInput.active = false;
      }
    },
  });

  const iframeButton = document.createElement("iframe");
  iframeButton.id = "TRANSPARENCY__BUTTON-IFRAME";
  document.body.appendChild(iframeButton);

  const iframeSheet = createStyleSheet({
    parent: iframeButton.contentDocument,
    isMainStyleSheet: false,
    CSS: `body{display:flex;justify-content:space-evenly;align-items:center;flex-direction:column;}#TRANSPARENCY__IMAGE-LINK {width: 250px;height: 40px;text-align: center;outline:none;box-shadow: 0 4px 7px rgba(0, 0, 0, 0.5);border-radius: 20px;border:none;}p{line-height: 18px;background-color: rgba(0, 0, 0, 0.95);font-family:monospace;padding: 10px;border-radius: 20px;color: white;margin:0;}`,
  });

  const tip = document.createElement("p");
  tip.textContent = backgroundChangingInputTip;

  const iframeButtonBody = iframeButton.contentDocument.body;
  iframeButtonBody.appendChild(iframeSheet);
  iframeButtonBody.appendChild(input);
  iframeButtonBody.appendChild(tip);

  state.backgroundChangingInput.set("active", true).set("iframeButton", iframeButton);
}

function removeBackgroundChangingInput(state) {
  state.backgroundChangingInput.iframeButton.remove();
  state.backgroundChangingInput.set("active", false).set("iframeButton", null);
}

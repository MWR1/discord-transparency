import { createInput, createStyleSheet } from "../../utils/createElement";

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
                iframe.remove();
                state.backgroundChangingInput.active = false;
            }
        },
    });

    const iframe = document.createElement("iframe");
    iframe.id = "TRANSPARENCY__BUTTON-IFRAME";
    document.body.appendChild(iframe);

    const iframeSheet = createStyleSheet({
        parent: iframe.contentDocument,
        isMainStyleSheet: false,
        CSS: `body{display:flex;justify-content:space-evenly;align-items:center;flex-direction:column;}#TRANSPARENCY__IMAGE-LINK {width: 250px;height: 40px;text-align: center;outline:none;box-shadow: 0 4px 7px rgba(0, 0, 0, 0.5);border-radius: 20px;border:none;}p{line-height: 18px;background-color: rgba(0, 0, 0, 0.95);font-family:monospace;padding: 10px;border-radius: 20px;color: white;margin:0;}`,
    });

    const tip = document.createElement("p");
    tip.textContent =
        "(!) The image you want as your background must be sent as a message on Discord, then you will have to click on the image, press on {Open original}, and copy the link from there.";

    iframe.contentDocument.body.appendChild(iframeSheet);
    iframe.contentDocument.body.appendChild(input);
    iframe.contentDocument.body.appendChild(tip);

    state.backgroundChangingInput = {
        active: true,
        iframe,
    };
}

function removeBackgroundChangingInput(state) {
    state.backgroundChangingInput.iframe.remove();
    state.backgroundChangingInput.active = false;
}

import {
    createInput,
    createButton,
    createStyleSheet,
    createAlert,
} from "../../utils/createElement";

export default function createBrightnessTweaker(state, { overlayDarkenerEl, overlayBarEl }) {
    if (state.brightnessTweaker.active) return removeBrightnessTweaker(state);

    const iframe = document.createElement("iframe");
    iframe.id = "TRANSPARENCY__SLIDE-BRIGHTNESS-IFRAME";

    const slider = createInput({
        type: "range",
        id: "TRANSPARENCY__SLIDE-BRIGHTNESS",
        value: state.brightnessTweaker.level,
        eventType: "oninput",
        eventMethod: (_) => {
            overlayDarkenerEl.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.slider.value})`;
            overlayBarEl.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.slider.value})`;
            state.brightnessTweaker.level = state.brightnessTweaker.slider.value;
        },
    });

    const saveButton = createButton({
        id: "TRANSPARENCY__SAVE-BRIGHTNESS",
        text: "Save brightness level",
        eventMethod: (_) => {
            window.localStorage.setItem("brghtns", state.brightnessTweaker.level);
            createAlert({
                text: `Brightness level updated! Now it is at level ${state.brightnessTweaker.level}.`,
            });

            removeBrightnessTweaker(state);
        },
    });

    document.body.appendChild(iframe);

    const iframeSheet = createStyleSheet({
        parent: iframe.contentDocument,
        isMainStyleSheet: false,
        CSS: `#TRANSPARENCY__SLIDE-BRIGHTNESS {transform: scale(1.5);height: 200px;-webkit-appearance: slider-vertical;}#TRANSPARENCY__SAVE-BRIGHTNESS {height:40px;width:150px;margin-top:80px;}`,
    });

    iframe.contentDocument.body.style = `display:flex;justify-content:center;align-items:center;flex-direction:column;`;

    iframe.contentDocument.body.appendChild(iframeSheet);
    iframe.contentDocument.body.appendChild(slider);
    iframe.contentDocument.body.appendChild(saveButton);

    state.brightnessTweaker.iframe = iframe;
    state.brightnessTweaker.slider = slider;
    state.brightnessTweaker.active = true;
}

function removeBrightnessTweaker(state) {
    state.brightnessTweaker.slider.remove();
    state.brightnessTweaker.iframe.remove();
    state.brightnessTweaker.active = false;
}

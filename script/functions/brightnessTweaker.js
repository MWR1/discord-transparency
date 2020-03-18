import { createInput, createButton } from "../../utils/createElement";

export default function createBrightnessTweaker(
    state,
    { overlayDarkenerEl, overlayBarEl }
) {
    if (state.brightnessTweaker.active) return removeBrightnessTweaker(state);

    const slider = createInput({
        type: "range",
        id: "TRANSPARENCY__SLIDE-BRIGHTNESS",
        value: state.brightnessTweaker.level,
        eventType: "oninput",
        eventMethod: _ => {
            overlayDarkenerEl.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.slider.value})`;
            overlayBarEl.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.slider.value})`;
            state.brightnessTweaker.level =
                state.brightnessTweaker.slider.value;
        }
    });

    const saveButton = createButton({
        id: "TRANSPARENCY__SAVE-BRIGHTNESS",
        text: "Save brightness level",
        eventMethod: _ => {
            window.localStorage.setItem(
                "brghtns",
                state.brightnessTweaker.level
            );
            alert(
                `Brightness level updated! Now it is at level ${state.brightnessTweaker.level}.`
            );
            removeBrightnessTweaker(state);
        }
    });

    document.body.appendChild(slider);
    document.body.appendChild(saveButton);
    state.brightnessTweaker = {
        ...state.brightnessTweaker,
        active: true,
        slider,
        saveButton
    };
}

function removeBrightnessTweaker(state) {
    state.brightnessTweaker.slider.remove();
    state.brightnessTweaker.saveButton.remove();
    state.brightnessTweaker.active = false;
}

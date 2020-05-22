import createLocalStorage from "../utils/createLocalStorage";
import createBackgroundChangingInput from "./functions/backgroundChangingInput";
import createBrightnessTweaker from "./functions/brightnessTweaker";
import { createStyleSheet } from "../utils/createElement";
import mainCSS from "../utils/styling";

import { overlayBar, overlayDarkener } from "../utils/classNames";

//TODO: add keybindings alert/tutorial
(function() {
    createLocalStorage();

    const state = {
        backgroundChangingInput: {
            active: false,
            iframe: undefined
        },
        brightnessTweaker: {
            active: false,
            level: window.localStorage.getItem("brghtns") || "9",
            input: undefined,
            saveButton: undefined
        }
    };

    //components
    const overlayDarkenerEl = document.querySelector(`.${overlayDarkener}`);
    const overlayBarEl = document.querySelector(`.${overlayBar}`);
    const CSS = mainCSS({
        backgroundImageURL: window.localStorage.getItem("bgImg"),
        localBrightness:
            `rgba(0, 0, 0, 0.${state.brightnessTweaker.level})` ||
            "rgba(0,0,0,0.9)",
        overlayDarkener,
        overlayBar
    });
    const sheet = createStyleSheet({
        parent: document,
        id: "TRANSPARENCY",
        isMainStyleSheet: true,
        CSS
    });

    //appending the stylesheet to page, and remove if it already exists (defined in createStyleSheet function definition)
    document.head.appendChild(sheet);

    //keydown manager
    window.onkeydown = e => {
        if (e.ctrlKey) {
            if (e.key === "d") {
                //disable theme
                if (sheet.getAttribute("media")) {
                    sheet.removeAttribute("media");
                    overlayBarEl.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.level}`;
                } else {
                    sheet.setAttribute("media", "1px");
                    overlayBarEl.style.backgroundColor =
                        "var(--color-tertiary)";
                }
            } else if (e.key === "b")
                createBrightnessTweaker(state, {
                    overlayDarkenerEl,
                    overlayBarEl
                });
            else if (e.altKey) createBackgroundChangingInput(state, sheet);
        }
    };
})();

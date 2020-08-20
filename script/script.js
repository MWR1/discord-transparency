import createLocalStorage from "../utils/createLocalStorage";
import createBackgroundChangingInput from "./functions/backgroundChangingInput";
import createBrightnessTweaker from "./functions/brightnessTweaker";
import { createStyleSheet, createAlert } from "../utils/createElement";
import mainCSS from "../utils/styling";

import { overlayBar, overlayDarkener } from "../utils/classNames";
import text from "../utils/keyboardShortcutsText";
import disableTheme from "./functions/disableTheme";

(function () {
    if (!document.documentElement.classList.contains("theme-dark"))
        return createAlert({
            text:
                "Sadly, this script, for now, only works by changing your theme to Dark Mode in the Appearence menu. Please do that, and refresh (Ctrl + R).",
            timeout: 1000 * 20, // 20 seconds
        });

    createLocalStorage();

    const state = {
        backgroundChangingInput: {
            active: false,
            iframe: null,
        },
        brightnessTweaker: {
            active: false,
            level: window.localStorage.getItem("brghtns") || "9",
            slider: null,
            saveButton: null,
        },
    };

    //components
    const overlayDarkenerEl = document.querySelector(`.${overlayDarkener}`);
    const overlayBarEl = document.querySelector(`.${overlayBar}`);
    const CSS = mainCSS({
        backgroundImageURL: window.localStorage.getItem("bgImg"),
        localBrightness: `rgba(0, 0, 0, 0.${state.brightnessTweaker.level})` || "rgba(0,0,0,0.9)",
        overlayDarkener,
        overlayBar,
    });
    const sheet = createStyleSheet({
        parent: document,
        id: "TRANSPARENCY",
        isMainStyleSheet: true,
        CSS,
    });

    //appending the stylesheet to page, and remove if it already exists (defined in createStyleSheet function definition)
    document.head.appendChild(sheet);

    //initial keyboard shortcuts notification (10 seconds)
    createAlert({ text, timeout: 1000 * 10, containsHTML: true });

    //keydown manager
    window.onkeydown = (e) => {
        if (e.ctrlKey) {
            if (e.code === "KeyD") disableTheme(state, sheet, overlayBarEl);
            else if (e.code === "KeyB")
                createBrightnessTweaker(state, {
                    overlayDarkenerEl,
                    overlayBarEl,
                });
            else if (e.altKey) createBackgroundChangingInput(state, sheet);
        }
    };
})();

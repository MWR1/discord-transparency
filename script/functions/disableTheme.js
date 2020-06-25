export default function disableTheme(state, sheet, overlayBarEl) {
    if (sheet.getAttribute("media")) {
        sheet.removeAttribute("media");
        overlayBarEl.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.level}`;
    } else {
        sheet.setAttribute("media", "1px");
        overlayBarEl.style.backgroundColor = "var(--color-tertiary)";
    }
}

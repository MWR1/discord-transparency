export default function disableTheme(state, sheet, overlayBarElement) {
  if (sheet.getAttribute("media")) {
    sheet.removeAttribute("media");
    overlayBarElement.style.backgroundColor = state.isDarkTheme
      ? `rgba(0,0,0,0.${state.brightnessTweaker.level}`
      : `rgba(255,255,255,0.${state.brightnessTweaker.level}`;
  } else {
    sheet.setAttribute("media", "1px");
    overlayBarElement.style.backgroundColor = "var(--color-tertiary)";
  }
}

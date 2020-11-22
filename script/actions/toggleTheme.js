export default function toggleTheme(props) {
  if (props.mainStylesheet.getAttribute("media")) {
    props.mainStylesheet.removeAttribute("media");
    if (props.overlayBarElement)
      props.overlayBarElement.style.backgroundColor = props.isDarkTheme
        ? `rgba(0,0,0,0.${props.brightnessLevel}`
        : `rgba(255,255,255,0.${props.brightnessLevel}`;
  } else {
    props.mainStylesheet.setAttribute("media", "1px");
    if (props.overlayBarElement) props.overlayBarElement.style.backgroundColor = "var(--color-tertiary)";
  }
}

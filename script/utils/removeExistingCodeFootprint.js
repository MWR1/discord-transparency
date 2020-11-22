export default function removeExistingCodeFootprint() {
  const existingStylesheet = document.getElementById("TRANSPARENCY");
  if (existingStylesheet !== null) {
    window.onkeydown = null;
    existingStylesheet.remove();
  }
}

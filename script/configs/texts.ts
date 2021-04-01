// Static texts
export const welcomeText =
  "Welcome! <br><br>To toggle the actions panel, press <b>CTRL + SHIFT + X</b><br>To toggle the theme, press <b>CTRL + D</b>";
export const sidebarAlertText =
  "<b>🛑 Warning</b><br><br>Your sidebar is currently dark themed.<br>For proper text visibility, disable its dark theme in Settings > Appearance. <u>No need to refresh</u>.";
export const backgroundChangerTipText =
  "🛑 The image you want as your background must be sent as a message on Discord. You will have to click on the image, press on <Open original>, and copy the link from there.";

// Functions
export function newErrorAlertText(errorMessage: string): string {
  return `🛑 Oh no, there's been an error. If you see this, join the support server, and report the error. [[${errorMessage}]]`;
}

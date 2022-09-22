// Texts
export const welcomeText =
  "Welcome! <br><br>To toggle the actions panel, press <b>CTRL + SHIFT + X</b><br>To toggle the theme, press <b>CTRL + D</b>";
export const sidebarAlertText =
  "<b>🛑 Warning</b><br><br>Your sidebar is currently dark themed.<br>For proper text visibility, disable its dark theme in Settings > Appearance.<br><br>The theme has disabled itself. After disabling the sidebar's dark theme, you can reactivate the theme by pressing <b>CTRL + D</b>. <u>No need to refresh</u>.";
export const backgroundChangerTipText =
  "🛑 The image you want as your background must be sent as a message on Discord. You will have to click on the image, press on <Open original>, and copy the link from there. After that, click on this input and press ENTER.";
export const themeChangeDetectionText = "🛑 It looks like you've changed the theme. Discord will refresh in 5 seconds.";

// Functions
export function newErrorAlertText(errorMessage: string): string {
  return `🛑 Oh no, there's been an error. If you see this, join the support server, and report the error. [[${errorMessage}]]`;
}

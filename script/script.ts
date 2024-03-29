import toggleTheme from "./actions/toggleTheme";
import { sidebarDarkThemedWarningDuration, welcomeDuration } from "./configs/durations";
import { alertsStyleSheetID } from "./configs/identifiers";
import { sidebarAlertText, welcomeText } from "./configs/texts";
import initActionsPanel from "./initActionsPanel";
import { alertsCSSCode } from "./styles";
import contextMenuHandler from "./utils/contextMenuHandler";
import createAlert from "./utils/createAlert";
import createElement from "./utils/createElement";
import getSidebarThemeState from "./utils/getSidebarThemeState";
import initImportantElementsStore from "./utils/initImportantElementsStore";
import initLocalStorage from "./utils/initLocalStorage";
import initObservers from "./utils/initObservers";
import initPreferencesStore from "./utils/initPreferencesStore";
import removeExistingCodeFootprint from "./utils/removeExistingCodeFootprint";

(function main(): void {
  removeExistingCodeFootprint();
  // Order of calls matters.
  if (!initLocalStorage() || !initPreferencesStore() || !initObservers() || !initImportantElementsStore()) {
    removeExistingCodeFootprint();
    return;
  }

  createElement<HTMLStyleElement>({
    elementName: "style",
    appendTo: document.head,
    htmlProps: { id: alertsStyleSheetID, innerHTML: alertsCSSCode },
  });

  const { actionsPanel, toggleActionsPanel }: { actionsPanel: HTMLDivElement; toggleActionsPanel: () => void } =
    initActionsPanel();

  createAlert({ text: welcomeText, timeout: welcomeDuration, containsHTML: true }).then(() => {
    const isSidebarDarkThemed: boolean = getSidebarThemeState();
    if (isSidebarDarkThemed) {
      createAlert({ text: sidebarAlertText, timeout: sidebarDarkThemedWarningDuration, containsHTML: true });
      toggleTheme(actionsPanel);
    }
  });

  window.onkeydown = (event: KeyboardEvent) => {
    if (!event.ctrlKey) return;

    if (event.shiftKey && event.code === "KeyX") {
      event.preventDefault(); // Prevents the right-to-left left-to-right text toggle in some browsers.
      toggleActionsPanel();
    }

    if (event.code === "KeyD") {
      event.preventDefault(); // Prevents the bookmark shortcut in some browsers.
      toggleTheme(actionsPanel);
    }
  };

  /**
   * Event property handlers do not allow setting the capture flag. We need to use the capture phase because Discord
   * disabled event propagation. Because of that, we can't add a custom context menu event handler to happen in the
   * bubbling phase. Discord applied it to a more specific element than the "window" object.
   */
  window.addEventListener("contextmenu", contextMenuHandler, { capture: true });
})();

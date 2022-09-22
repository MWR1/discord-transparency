import toggleTheme from "./actions/toggleTheme";
import { sidebarDarkThemedWarningDuration, welcomeDuration } from "./configs/durations";
import { alertsStyleSheetID } from "./configs/identifiers";
import { sidebarAlertText, welcomeText } from "./configs/texts";
import initActionsPanel from "./initActionsPanel";
import { alertsCSSCode } from "./styles";
import createAlert from "./utils/createAlert";
import createElement from "./utils/createElement";
import createLocalStorage from "./utils/createLocalStorage";
import getSidebarThemeState from "./utils/getSidebarThemeState";
import initImportantElementsStore from "./utils/initImportantElementsStore";
import initPreferencesStore from "./utils/initPreferencesStore";
import initThemeChangeObserver from "./utils/initThemeChangeObserver";
import removeExistingCodeFootprint from "./utils/removeExistingCodeFootprint";

(function main(): void {
  removeExistingCodeFootprint();
  // Order of calls matters.
  if (!createLocalStorage() || !initPreferencesStore() || !initThemeChangeObserver() || !initImportantElementsStore()) {
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
})();

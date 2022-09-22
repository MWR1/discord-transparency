import { IAction, NullableHTMLElement } from "../types";
import actions from "./actions";
import { actionSlideInAnimationDuration } from "./configs/durations";
import {
  actionActiveClassName,
  actionClassName,
  actionsPanelActiveClassName,
  actionsPanelID,
  actionsPanelOverlayID,
  actionsPanelStyleSheetID,
} from "./configs/identifiers";
import { newErrorAlertText } from "./configs/texts";
import { importantElementsStore } from "./stores";
import { actionsPanelCSSCode } from "./styles";
import createElement from "./utils/createElement";

/**
 * @returns an object with the actions panel and a toggling function
 */
export default function initActionsPanel(): {
  actionsPanel: HTMLDivElement;
  toggleActionsPanel: () => void;
} {
  const actionsPanel: HTMLDivElement = createElement<HTMLDivElement>({
    elementName: "div",
    appendTo: document.body,
    htmlProps: { id: actionsPanelID },
  });

  // An element to toggle the actions panel without having to perform the key combination.
  const actionsPanelOverlay: HTMLDivElement = createElement<HTMLDivElement>({
    elementName: "div",
    appendTo: document.body,
    htmlProps: { id: actionsPanelOverlayID },
  });

  const toggleActionsPanel: () => void = initActionsPanelToggler(actionsPanel, actionsPanelOverlay);
  actionsPanelOverlay.onclick = toggleActionsPanel;

  // Styles the actions panel.
  createElement<HTMLStyleElement>({
    elementName: "style",
    appendTo: document.head,
    htmlProps: { id: actionsPanelStyleSheetID, innerHTML: actionsPanelCSSCode },
  });

  const overlayBarElement = importantElementsStore.get("overlayBarElement") as NullableHTMLElement;
  if (overlayBarElement !== null) actionsPanel.style.paddingTop = "20px";

  for (const action of actions) {
    const actionBox: HTMLDivElement = createElement<HTMLDivElement>({
      elementName: "div",
      appendTo: actionsPanel,
      htmlProps: {
        className: actionClassName,
        textContent: action.name,
      },
    });

    actionBox.onclick = () => activateAction(action, actionBox);
  }

  return { actionsPanel, toggleActionsPanel };
}

/**
 * Initialises some variables related to the toggling of the panel inside its body.
 * @param {HTMLDivElement} actionsPanel - the actions panel
 * @param {HTMLDivElement} actionsPanelOverlay - the actions panel overlay
 * @returns a function as a closure which accesses those variables, in order to minimise the need
 * of global variables. This returned function toggles the actions panel.
 */

function initActionsPanelToggler(actionsPanel: HTMLDivElement, actionsPanelOverlay: HTMLDivElement): () => void {
  const mainStyleSheet = importantElementsStore.get("mainStyleSheet") as HTMLStyleElement;
  /**
   * @var previousActionsPanelRemovalTimeoutID - the timeout ID
   * of the previous time the action panel was to be removed. We need this in order
   * to reduce visual glitches when spamming or timing, just right, the theme and
   * actions panel toggling.
   */
  let previousActionsPanelRemovalTimeoutID: ReturnType<typeof setTimeout>;

  return function toggleActionsPanel(): void {
    const isActionsPanelActive: boolean = actionsPanel.classList.contains(actionsPanelActiveClassName);
    const isThemeDisabled: boolean = mainStyleSheet.hasAttribute("media");
    clearTimeout(previousActionsPanelRemovalTimeoutID);

    if (!isActionsPanelActive && !isThemeDisabled) {
      actionsPanel.style.display = "block";
      actionsPanelOverlay.style.display = "block";

      // When you time toggling the actions panel just right, you can make it appear without an animation.
      // So, delay adding the class for a bit, until the DOM registers that the panel now has a block display.
      setTimeout(() => actionsPanel.classList.add(actionsPanelActiveClassName), 20);
      return;
    }

    if (isActionsPanelActive) {
      actionsPanel.classList.remove(actionsPanelActiveClassName);
      actionsPanelOverlay.style.display = "none";

      previousActionsPanelRemovalTimeoutID = setTimeout(() => {
        actionsPanel.style.display = "none";
      }, actionSlideInAnimationDuration);
    }
  };
}

/**
 * @param {IAction} action - the action to activate
 * @param {HTMLDivElement} actionBox - the rectangle in the actions panel, that when clicked, reveals the action
 */

function activateAction(action: IAction, actionBox: HTMLDivElement): void {
  actionBox.classList.add(actionActiveClassName);
  actionBox.textContent = "";
  try {
    actionBox.onclick = null;
    action.execute(actionBox);
  } catch (error) {
    alert(newErrorAlertText(error.message));
  }
}

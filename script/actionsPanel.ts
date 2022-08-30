import { Action, ActionProps, DOMElement } from "../@types";
import { actionsPanelCSSCode } from "./styles";
import createElement from "./utils/createElement";

interface ActivateActionParams {
  action: Action;
  actionToggler: HTMLDivElement;
  actionProps: ActionProps;
}

/**
 * Toggles an action, such as toggling the brightness tweaker, or changing the background image.
 * @param {ActivateActionParams} activateActionParams
 * @param {Action} activateActionParams.action - the action to activate
 * @param {HTMLDivElement} activateActionParams.actionToggler - the rectangle in the actions panel, that when clicked, reveals the action
 * @param {ActionProps} activateActionParams.actionProps - the props to be passed to the action
 */
function activateAction({ action, actionToggler, actionProps }: ActivateActionParams): void {
  actionToggler.classList.add("TRANSPARENCY__ACTION--ACTIVE");
  actionToggler.textContent = "";
  action.execute({ parentBox: actionToggler, props: actionProps });
  actionToggler.onclick = null;
}

/**
 * Toggles the action panel when performing a key combination
 * @param {ActionsPanelParams} actionsPanelParams
 * @param {Action[]} actionsPanelParams.actions - the actions that currently exist
 * @param {ActionProps} actionsPanelParams.props - the props to be passed to the action
 */

export default function toggleActionsPanel({ actions, props }: { actions: Action[]; props: ActionProps }): void {
  const existingActionsPanel: DOMElement = document.getElementById("TRANSPARENCY__ACTIONS");

  if (existingActionsPanel !== null) {
    existingActionsPanel.classList.remove("TRANSPARENCY__ACTIONS--SLIDE-IN");

    setTimeout(() => existingActionsPanel.remove(), 1000);
    return;
  }

  const actionsPanel: HTMLDivElement = createElement<HTMLDivElement>({
    elementName: "div",
    appendTo: document.body,
    htmlProps: { id: "TRANSPARENCY__ACTIONS" },
  });

  if (props.overlayBarElement !== null) actionsPanel.style.paddingTop = "20px";

  setTimeout(() => actionsPanel.classList.add("TRANSPARENCY__ACTIONS--SLIDE-IN"), 0);

  // styles the actions panel
  createElement<HTMLStyleElement>({
    elementName: "style",
    appendTo: actionsPanel,
    htmlProps: { innerHTML: actionsPanelCSSCode },
  });

  for (const action of actions) {
    const actionToggler: HTMLDivElement = createElement<HTMLDivElement>({
      elementName: "div",
      appendTo: actionsPanel,
      htmlProps: {
        className: "TRANSPARENCY__ACTION",
        textContent: action.name,
        onclick: () => activateAction({ action, actionToggler, actionProps: props }),
      },
    });
  }
}

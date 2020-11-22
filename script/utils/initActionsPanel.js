import ActionController from "./ActionController";
import createElement from "./createElement";
import { actionsPanelCSSCode } from "../styles/styles.json";

export default function initActionsPanel({ actions, props }) {
  const actionsPanelController = new ActionController();

  return function toggleActionsPanel() {
    if (actionsPanelController.isActive()) {
      actionsPanelController.getElement("actionsPanelElement").classList.remove("TRANSPARENCY__ACTIONS--SLIDE-IN");
      setTimeout(() => actionsPanelController.remove(), 1000);
      return;
    }

    const actionsPanel = createElement("iframe");
    const actionsPanelElement = actionsPanel.getDOMElement();
    actionsPanel.setProperty("className", "TRANSPARENCY__ACTIONS").appendTo(document.body);
    setTimeout(() => actionsPanel.setProperty("className", "TRANSPARENCY__ACTIONS TRANSPARENCY__ACTIONS--SLIDE-IN"), 0);

    const actionsPanelStyle = createElement("style");
    actionsPanelStyle.setProperty("innerHTML", actionsPanelCSSCode).appendTo(actionsPanelElement.contentDocument.head);

    for (const action of actions) {
      const actionElementRevealer = createElement("div");
      actionElementRevealer
        .setProperty("className", "TRANSPARENCY__ACTION")
        .setProperty("innerHTML", action.name)
        .setProperty("onclick", () => {
          actionElementRevealer.setProperty("className", "TRANSPARENCY__ACTION TRANSPARENCY__ACTION--ACTIVE");
          actionElementRevealer.setProperty("innerHTML", "");
          action.execute({ parentBox: actionElementRevealer.getDOMElement(), props });
          actionElementRevealer.setProperty("onclick", null);
        })
        .appendTo(actionsPanelElement.contentDocument.body);
    }

    actionsPanelController.addElement("actionsPanelElement", actionsPanelElement).setActive(true);
  };
}

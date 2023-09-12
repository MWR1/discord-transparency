import { NullableHTMLElement } from "../../types";
import {
  actionsPanelID,
  actionsPanelOverlayID,
  actionsPanelStyleSheetID,
  alertsStyleSheetID,
  generalTransparencyID,
} from "../configs/identifiers";

/**
 * Helps clean up old stylesheets, removes other event listeners, etc.
 * It's especially useful when re-applying the script more than once.
 */

export default function removeExistingCodeFootprint(): void {
  const existingStyleSheet: NullableHTMLElement = document.getElementById(generalTransparencyID);
  const existingAlertsStyleSheet: NullableHTMLElement = document.getElementById(alertsStyleSheetID);
  const existingActionsPanel: NullableHTMLElement = document.getElementById(actionsPanelID);
  const existingActionsPanelOverlay: NullableHTMLElement = document.getElementById(actionsPanelOverlayID);
  const existingActionsPanelStyleSheet: NullableHTMLElement = document.getElementById(actionsPanelStyleSheetID);

  existingAlertsStyleSheet?.remove();
  existingActionsPanel?.remove();
  existingActionsPanelOverlay?.remove();
  existingActionsPanelStyleSheet?.remove();

  if (existingStyleSheet !== null) {
    // If the main stylesheet created by the script exists, then it's safe to assume a keydown event
    // listener has also been set.
    window.onkeydown = null;
    existingStyleSheet.remove();
  }

  if ((window as any).__TRANSPARENCY_OBSERVERS__) {
    for (const observer of (window as any).__TRANSPARENCY_OBSERVERS__.values()) observer.unobserve();
    (window as any).__TRANSPARENCY_OBSERVERS__ = undefined;
  }
}

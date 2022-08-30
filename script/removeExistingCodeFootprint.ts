/**
 * Helps clean up old stylesheets, and removes other event listeners.
 * It's especially useful when re-applying the script more than once.
 */

import { DOMElement } from "../@types";

export default function removeExistingCodeFootprint(): void {
  const existingStylesheet: DOMElement = document.getElementById("TRANSPARENCY");

  if (existingStylesheet !== null) {
    window.onkeydown = null;
    existingStylesheet.remove();
  }
}

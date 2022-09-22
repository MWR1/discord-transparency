import { NullableHTMLElement } from "../../types";
import { newErrorAlertText } from "../configs/texts";

/**
 * Gets elements from the DOM, and if they're not there, the function alerts the user with an error.
 * We do this in case Discord changes some class names or IDs, to make such errors more "user friendly".
 * @param {string} selector - the CSS selector of an HTML element
 * @returns {NullableHTMLElement} the element from the DOM
 */

export default function getElementWithAlert(selector: string): NullableHTMLElement {
  const element: NullableHTMLElement = document.querySelector(selector);

  if (element === null) {
    alert(newErrorAlertText(`${selector} is not in the DOM.`));
    return null;
  }

  return element;
}

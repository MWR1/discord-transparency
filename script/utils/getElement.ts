import { DOMElement } from "../../@types";
import { newErrorAlertText } from "../configs/texts";

/**
 * Gets elements from the DOM, and if they're not there, the function throws an error.
 * We do this in case Discord changes some class names, to make such errors more "user friendly"
 * @param {string} selector - the CSS selector of an HTML element
 * @returns {DOMElement} the element from the DOM
 */

export default function getElement(selector: string): DOMElement {
  const element: DOMElement = document.querySelector(selector);

  if (element === null) {
    alert(newErrorAlertText(`${selector} is not in the DOM.`));
    return null;
  }
  return element;
}

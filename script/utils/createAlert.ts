import { transparencyAlertClassName, transparencyAlertInactiveClassName } from "../configs/identifiers";
import createElement from "./createElement";

interface CreateAlertParams {
  text: string;
  timeout: number;
  containsHTML?: boolean;
}

/**
 * Creates an alert that shows various informative things, or warnings.
 * @param {CreateAlertParams} alertParams - the parameters for createAlert
 * @param {string} alertParams.text - the text to be displayed
 * @param {string} alertParams.timeout - how long should the alert be displayed for
 * @param {boolean} alertParams.containsHTML - allows for HTML markup to be displayed in the alert, if necessary
 * @returns a promise that resolves after the alert disappears
 */

export default function createAlert({ text, timeout, containsHTML = false }: CreateAlertParams): Promise<boolean> {
  const alert: HTMLDivElement = createElement<HTMLDivElement>({
    elementName: "div",
    appendTo: document.body,
    htmlProps: {
      className: transparencyAlertClassName,
      [containsHTML ? "innerHTML" : "textContent"]: text,
    },
  });

  alert.style.setProperty("--timer-bar-timeout", `${timeout}ms`);

  return new Promise((resolve) => {
    setTimeout(() => {
      alert.classList.add(transparencyAlertInactiveClassName);

      setTimeout(() => {
        alert.remove();
        resolve(true);
      }, 1000);
    }, timeout);
  });
}

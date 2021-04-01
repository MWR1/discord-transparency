import createElement from "./createElement";

/**
 * Creates an alert, like a "popup", that shows various informative things, or warnings.
 * @param {CreateAlertParams} alertParams - the parameters for createAlert
 * @param {string} alertParams.text - the text to be displayed
 * @param {string} alertParams.timeout - how long should the alert be displayed for
 * @param {boolean} alertParams.containsHTML - allows for HTML markup to be displayed in the alert, if necessary
 * @returns {Promise<boolean>}
 */

interface CreateAlertParams {
  text: string;
  timeout: number;
  containsHTML: boolean;
}

export default function createAlert({ text, timeout, containsHTML = false }: CreateAlertParams): Promise<boolean> {
  const alert: HTMLDivElement = createElement<HTMLDivElement>({
    elementName: "div",
    appendTo: document.body,
    htmlProps: {
      className: "TRANSPARENCY__ALERT",
      [containsHTML ? "innerHTML" : "textContent"]: text,
    },
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      alert.classList.add("TRANSPARENCY__ALERT--INACTIVE");

      setTimeout(() => {
        alert.remove();
        resolve(true);
      }, 1000);
    }, timeout);
  });
}

import createElement from "./createElement";

export default function createAlert({ text, timeout, containsHTML = false }) {
  const alert = createElement("div");
  alert.setProperty("className", "TRANSPARENCY__ALERT");

  if (containsHTML) alert.setProperty("innerHTML", text);
  else alert.setProperty("textContent", text);

  alert.appendTo(document.body);
  return new Promise((resolve) => {
    setTimeout(() => {
      alert.setProperty("className", "TRANSPARENCY__ALERT TRANSPARENCY__ALERT--INACTIVE");
      setTimeout(() => {
        alert.getDOMElement().remove();
        resolve();
      }, 1000);
    }, timeout);
  });
}

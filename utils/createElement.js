export function createInput({
    type,
    id,
    value = "",
    text = "",
    eventType = "onkeydown",
    eventMethod = null,
}) {
    const input = document.createElement("input");
    input.type = type;
    if (type === "range") {
        input.min = 0;
        input.max = 9;
    }

    input.id = id;
    input.value = value;
    input.placeholder = text;
    input[eventType] = eventMethod;

    return input;
}

export function createButton({ id, text = "", eventMethod = null }) {
    const button = document.createElement("button");
    button.id = id;
    button.innerText = text;
    button.onclick = eventMethod;

    return button;
}

export function createStyleSheet({ parent, id = "", isMainStyleSheet, CSS }) {
    const sheet = parent.createElement("style");
    if (isMainStyleSheet) {
        const previousStylesheet = parent.getElementById(id);
        if (previousStylesheet) {
            previousStylesheet.remove();
            window.onkeydown = null;
        }
    }
    sheet.appendChild(parent.createTextNode(CSS));
    sheet.id = id;

    return sheet;
}

export function createAlert({ text, containsHTML = false }) {
    const alertElement = document.createElement("div");
    alertElement.className = "TRANSPARENCY__ALERT";
    alertElement[containsHTML ? "innerHTML" : "textContent"] = text;
    document.body.appendChild(alertElement);

    setTimeout(() => {
        alertElement.classList.add("TRANSPARENCY__ALERT--INACTIVE");
        setTimeout(() => alertElement.remove(), 1000);
    }, 7000);
}

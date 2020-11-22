export default function createElement(elementName) {
  const element = document.createElement(elementName);

  return {
    getProperty(elementProperty) {
      return element[elementProperty];
    },

    getDOMElement() {
      return element;
    },

    setProperty(elementProperty, value) {
      element[elementProperty] = value;
      return this;
    },

    appendTo(parent) {
      parent.appendChild(element);
    },
  };
}

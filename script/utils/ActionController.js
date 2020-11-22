export default class ActionController {
  constructor(additionalCharacteristics = {}) {
    this.characteristics = new Map([["isActive", false]]);
    this.elementsMap = new Map();

    for (const [characteristic, defaultValue] of Object.entries(additionalCharacteristics))
      this.characteristics.set(characteristic, defaultValue);
  }

  isActive() {
    return this.characteristics.get("isActive");
  }

  setActive(activeState) {
    return this.characteristics.set("isActive", activeState);
  }

  // getCharacteristic(characteristic) {
  //   return this.characteristics.get(characteristic);
  // }

  // setCharacteristic(key, value) {
  //   this.characteristics.set(key, value);
  //   return this;
  // }

  getElement(elementName) {
    return this.elementsMap.get(elementName);
  }

  addElement(elementName, DOMNode) {
    this.elementsMap.set(elementName, DOMNode);
    return this;
  }

  // removeElement(elementName) {
  //   this.elementsMap.get(elementName).remove();
  //   this.elementsMap.delete(elementName);
  //   return this;
  // }

  remove() {
    this.characteristics.set("isActive", false);

    this.elementsMap.forEach((element) => element.remove());
    this.elementsMap.clear();
  }
}

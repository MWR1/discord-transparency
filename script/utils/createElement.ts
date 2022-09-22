import { KeysIn } from "../../types";

interface CreateElementParams<ElementType> {
  elementName: string;
  appendTo: HTMLElement;
  htmlProps: KeysIn<ElementType>;
}

/**
 * Creates an element. It's basically a wrapper for document#createElement, nothing fancy here.
 * @param {CreateElementParams} element
 * @param {string} element.elementName - the name of the element
 * @param {HTMLElement} element.appendTo - the parent element to append this new element to
 * @param {KeysIn<ElementType>} element.htmlProps - the HTML attributes represented as JS objects
 * @returns {ElementType} a generic HTML element
 */

export default function createElement<ElementType extends HTMLElement>({
  elementName,
  appendTo,
  htmlProps,
}: CreateElementParams<ElementType>): ElementType {
  type HTMLElementWithIndexSignature = HTMLElement & { [key: string]: unknown };
  const element = document.createElement(elementName) as HTMLElementWithIndexSignature;

  for (const [property, value] of Object.entries(htmlProps)) element[property] = value;
  appendTo.appendChild(element);

  return element as unknown as ElementType;
}

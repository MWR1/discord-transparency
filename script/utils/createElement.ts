interface CreateElementParams<ElementType> {
  elementName: string;
  appendTo: HTMLElement;
  htmlProps: Partial<ElementType> | { style?: Partial<CSSStyleDeclaration> };
}

/**
 * Creates an element. It's basically a wrapper for document#createElement, nothing fancy here.
 * @param {CreateElementParams} element
 * @param {string} element.elementName - the name of the element
 * @param {HTMLElement} element.appendTo - the parent element to append this new element to
 * @param {Partial<ElementType>} element.htmlProps - the HTML attributes represented as JS objects
 * @returns {ElementType} a generic HTML element
 */

export default function createElement<ElementType extends HTMLElement>({
  elementName,
  appendTo,
  htmlProps,
}: CreateElementParams<ElementType>): ElementType {
  const element = document.createElement(elementName) as ElementType;

  for (const [property, value] of Object.entries(htmlProps))
    element[property as keyof ElementType] = value as ElementType[keyof ElementType];

  if (htmlProps.style !== undefined)
    // TODO: find how to properly type this
    for (const [property, value] of Object.entries(htmlProps.style as CSSStyleDeclaration))
      element.style[property as any] = value;

  appendTo.appendChild(element);
  return element;
}

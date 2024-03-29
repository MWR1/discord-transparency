import { NullableHTMLElement } from "../../types";
import { overlayDarkener, titleBar } from "../configs/classNames";
import { generalTransparencyID } from "../configs/identifiers";
import { importantElementsStore } from "../stores";
import createMainCSSCode from "../styles/createMainCSSCode";
import createElement from "./createElement";
import getElementWithAlert from "./getElementWithAlert";

/**
 * @returns true if all necessary elements have been found, and false if there's been any errors.
 */
export default function initImportantElementsStore(): boolean {
  const overlayDarkenerElement: NullableHTMLElement = getElementWithAlert(overlayDarkener);
  if (overlayDarkenerElement === null) return false;

  // We didn't use getElementWithAlert here, because it shows an alert if the element
  // is not defined - which is good, but not in this case.
  // In this case the titleBar element doesn't exist in the browser version of Discord.
  const titleBarElement: NullableHTMLElement = document.querySelector(titleBar);
  const mainStyleSheet: HTMLStyleElement = createElement<HTMLStyleElement>({
    elementName: "style",
    appendTo: document.head,
    htmlProps: { id: generalTransparencyID, innerHTML: createMainCSSCode() },
  });

  importantElementsStore
    .set("titleBarElement", titleBarElement)
    .set("overlayDarkenerElement", overlayDarkenerElement)
    .set("mainStyleSheet", mainStyleSheet);

  return true;
}

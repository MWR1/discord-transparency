import NullableHTMLElement from "./NullableHTMLElement";

export default interface IImportantElementsStore {
  overlayBarElement: NullableHTMLElement;
  overlayDarkenerElement: HTMLDivElement;
  mainStyleSheet: HTMLStyleElement;
}

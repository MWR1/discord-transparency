import NullableHTMLElement from "./NullableHTMLElement";

export default interface IImportantElementsStore {
  titleBarElement: NullableHTMLElement;
  overlayDarkenerElement: HTMLDivElement;
  mainStyleSheet: HTMLStyleElement;
}

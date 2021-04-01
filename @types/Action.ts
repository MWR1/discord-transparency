import { DOMElement } from ".";

export interface ActionProps {
  isDarkTheme: boolean;
  brightnessLevel: { value: number };
  mainStylesheet: HTMLStyleElement;
  overlayDarkenerElement: HTMLElement;
  overlayBarElement: DOMElement;
}

export default interface Action {
  name: string;
  execute({ parentBox, props }: { parentBox: HTMLElement; props: ActionProps }): void;
}

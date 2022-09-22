import { IObserver } from "../../types";

type onClassChangeCallbackType = (mutationList: MutationRecord[], observer: MutationObserver) => void;
interface IClassChangeObserverParams {
  targetElement: HTMLElement;
  classNameToChange: string;
  classNameToChangeInto: string;
}

/**
 * Observes class changes and executes a callback when a class changed into another.
 */

export default class ClassChangeObserver implements IObserver {
  public targetElement: HTMLElement;
  private _classNameToChange: string;
  private _classNameToChangeInto: string;
  private _wasClassNamePreviouslyPresent: boolean;
  private _observer: MutationObserver;
  private _onClassChangeCallback: onClassChangeCallbackType | null = null;

  constructor({ targetElement, classNameToChange, classNameToChangeInto }: IClassChangeObserverParams) {
    this.targetElement = targetElement;
    this._classNameToChange = classNameToChange;
    this._classNameToChangeInto = classNameToChangeInto;
    this._wasClassNamePreviouslyPresent =
      !this.targetElement.classList.contains(this._classNameToChange) &&
      this.targetElement.classList.contains(this._classNameToChangeInto);

    this._observer = new MutationObserver((mutationList: MutationRecord[], observer: MutationObserver) => {
      for (const mutation of mutationList) {
        if (mutation.type !== "attributes" || mutation.attributeName !== "class") continue;

        // mutation.target is of type Node for some reason. ok.
        const mutationTarget = mutation.target as HTMLElement;
        const classNameChangeState: boolean =
          !mutationTarget.classList.contains(this._classNameToChange) &&
          mutationTarget.classList.contains(this._classNameToChangeInto);

        if (classNameChangeState !== this._wasClassNamePreviouslyPresent) {
          this._wasClassNamePreviouslyPresent = classNameChangeState;
          if (this._onClassChangeCallback === null)
            throw new ReferenceError("No callback has been supplied on class change.");

          this._onClassChangeCallback(mutationList, observer);
        }
      }
    });
  }

  public onClassChange(callback: onClassChangeCallbackType): IObserver {
    this._onClassChangeCallback = callback;
    return this;
  }

  public observe(options: MutationObserverInit | undefined): IObserver {
    this._observer.observe(this.targetElement, options);
    return this;
  }

  public unobserve(): IObserver {
    this._observer.disconnect();
    return this;
  }
}

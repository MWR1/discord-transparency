import { IMutationObserver } from "../../types";
import { mutationObserverCallbackType } from "../../types/IMutationObserver";
interface IClassChangeObserverParams {
  targetElement: HTMLElement;
  from: string;
  to: string;
}

/**
 * Observes class changes and executes a callback when a class changed into another.
 */

export default class ClassChangeObserver implements IMutationObserver {
  public targetElement: HTMLElement;
  private _from: string;
  private _to: string;
  private _wasClassNamePreviouslyPresent: boolean;
  private _observer: MutationObserver;
  private _callback: mutationObserverCallbackType | null = null;

  constructor({ targetElement, from, to }: IClassChangeObserverParams) {
    this.targetElement = targetElement;
    this._from = from;
    this._to = to;
    this._wasClassNamePreviouslyPresent =
      !this.targetElement.classList.contains(this._from) && this.targetElement.classList.contains(this._to);

    this._observer = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
      if (this._callback === null) throw new ReferenceError("No callback has been supplied on class change.");

      for (const mutation of mutations) {
        if (mutation.type !== "attributes" || mutation.attributeName !== "class") continue;

        // mutation.target is of type Node for some reason. ok.
        const mutationTarget = mutation.target as HTMLElement;
        const didClassNameChange: boolean =
          !mutationTarget.classList.contains(this._from) && mutationTarget.classList.contains(this._to);

        if (didClassNameChange !== this._wasClassNamePreviouslyPresent) {
          this._wasClassNamePreviouslyPresent = didClassNameChange;

          this._callback(mutation, observer);
        }
      }
    });
  }

  public onTrigger(callback: mutationObserverCallbackType): IMutationObserver {
    this._callback = callback;
    return this;
  }

  public observe(options?: MutationObserverInit): IMutationObserver {
    this._observer.observe(this.targetElement, options);
    return this;
  }

  public unobserve(): IMutationObserver {
    this._observer.disconnect();
    return this;
  }
}

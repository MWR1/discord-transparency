import { IMutationObserver } from "../../types";
import { mutationObserverCallbackType } from "../../types/IMutationObserver";
import { popupsContainer } from "../configs/classNames";

/**
 * Observes whether the context menu element has been created.
 */

export default class ContextMenuObserver implements IMutationObserver {
  public targetElement: HTMLElement;
  private _callback: mutationObserverCallbackType;
  private _observer: MutationObserver;

  constructor(targetElement: HTMLElement) {
    this.targetElement = targetElement;
    this._observer = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
      if (this._callback === null) throw new ReferenceError("No callback has been supplied on trigger.");

      for (const mutation of mutations) {
        const mutationTarget: HTMLElement = mutation.target as HTMLElement;
        if (
          mutation.type !== "childList" ||
          !mutationTarget.classList.contains(popupsContainer.slice(1) /* remove dot */) ||
          mutationTarget.firstChild === null
        )
          return;

        this._callback(mutation, observer);
      }
    });
  }

  public onTrigger(callback: mutationObserverCallbackType | null): IMutationObserver {
    if (callback) this._callback = callback;
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

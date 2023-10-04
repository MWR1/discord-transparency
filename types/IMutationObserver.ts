export type mutationObserverCallbackType = (mutation: MutationRecord, observer: MutationObserver) => void;

export default interface IMutationObserver {
  targetElement: HTMLElement;
  onTrigger(callback: mutationObserverCallbackType): IMutationObserver;
  observe(options?: MutationObserverInit): IMutationObserver;
  unobserve(options?: MutationObserverInit): IMutationObserver;
}

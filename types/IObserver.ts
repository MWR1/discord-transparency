export default interface IObserver {
  targetElement: HTMLElement;
  observe(options?: unknown): IObserver;
  unobserve(options?: unknown): IObserver;
}

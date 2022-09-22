export default interface IAction {
  name: string;
  execute(actionBox: HTMLDivElement): void;
}

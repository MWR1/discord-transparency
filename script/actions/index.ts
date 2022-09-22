import { IAction } from "../../types";
import backgroundChanger from "./backgroundChanger";
import blurTweaker from "./blurTweaker";
import brightnessTweaker from "./brightnessTweaker";

const actions: IAction[] = [backgroundChanger, brightnessTweaker, blurTweaker];

// TODO: brightnessTweaker and blurTweaker are too similar in functionality.
// Implement DRY in this way maybe through a class? But then, the differences in functionality, I don't
// know yet how to suitably handle.

export default actions;

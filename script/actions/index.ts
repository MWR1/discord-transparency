import { IAction } from "../../types";
import backgroundChanger from "./backgroundChanger";
import blurTweaker from "./blurTweaker";
import brightnessTweaker from "./brightnessTweaker";

const actions: IAction[] = [backgroundChanger, brightnessTweaker, blurTweaker];

export default actions;

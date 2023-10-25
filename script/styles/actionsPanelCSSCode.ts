import {
  actionActiveClassName,
  actionClassName,
  actionInputClassName,
  actionLevelIndicatorClassName,
  actionWarningClassName,
  imageInputPickerClassName,
  saveLevelClassName,
  setAsBackgroundImageButtonID,
} from "../configs/identifiers";

export default `.${actionClassName} {
  min-height: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  transition: background-color 300ms linear;
}

.${actionActiveClassName} {
  background-color: rgba(0, 0, 0, 0.8);
  cursor: initial;
}

.${actionInputClassName} {
  box-sizing: border-box;
  text-align: center;
  padding: 15px 0;
  width: 100%;
  border: 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: white;
}

.${imageInputPickerClassName} {
  padding: 20px 15px !important;
  cursor: pointer;
  font-family: var(--font-primary);
  font-size: smaller;
}

.${actionInputClassName}:focus,
.${saveLevelClassName}:focus {
  outline: none;
  border: 2px solid dodgerblue;
}

.${actionLevelIndicatorClassName} {
  margin: 0;
  opacity: 0.8;
  text-align: center;
}

.${actionWarningClassName} {
  display: none;
  font-size: 11px;
  line-height: 20px;
  color: white;
  max-width: 310px;
  margin: 20px 0 0;
  opacity: 0.8;
}

.${actionInputClassName}:focus ~ .${actionWarningClassName} {
  display: block;
}

.${saveLevelClassName} {
  height: 40px;
  padding: 0 15px;
  max-width: 300px;
  margin-top: 10px;
  border: 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: white;
  cursor: pointer;
}

#${setAsBackgroundImageButtonID} {
  position: absolute;
  left: -100%;
  bottom: 0;
  width: max-content;
  padding: 10px;
  margin-left: 4px;
  background-color: inherit;
  border-radius: inherit;
  font-size: 14px;
  cursor: pointer;
}`;

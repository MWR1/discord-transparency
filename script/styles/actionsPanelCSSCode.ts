import {
  actionActiveClassName,
  actionClassName,
  actionInputClassName,
  actionLevelIndicatorClassName,
  actionWarningClassName,
  saveLevelClassName,
} from "../configs/identifiers";

export default `.${actionClassName} {
  min-height: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 300ms linear;
}

.${actionActiveClassName} {
  background-color: rgba(0, 0, 0, 0.8);
  cursor: initial;
}

.${actionInputClassName} {
  box-sizing: border-box;
  text-align: center;
  height: 40px;
  width: 85%;
  margin: 10px 0 0;
  border: 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: white;
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
  font-size: 11px;
  line-height: 20px;
  padding: 10px;
  color: white;
  max-width: 310px;
  margin: 10px 0 0;
  opacity: 0.8;
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
`;

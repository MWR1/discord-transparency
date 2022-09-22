import { transparencyAlertClassName, transparencyAlertInactiveClassName } from "../configs/identifiers";

export default `.${transparencyAlertClassName} { 
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  padding: 20px;
  font-size: 14px;
  width: fit-content;
  width: -moz-fit-content;
  max-width: 450px;
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  color: white;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  z-index: 10000;
  box-shadow: 0px 13px 10px -5px rgba(0,0,0,0.5);
  transition: transform 500ms ease;
  animation: TRANSPARENCY__ALERT-SLIDE 500ms ease;
}

@keyframes TRANSPARENCY__ALERT-SLIDE {
  from { transform: translateY(-130%); }
  to { transform: translateY(0) }
}

.${transparencyAlertInactiveClassName} {
  transform: translateY(-130%);
}`;

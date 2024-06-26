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
  overflow: hidden;
}

.${transparencyAlertClassName}::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: hsl(235 100% 82% / 1);
    width: 100%;
    height: 5px;
    animation: TRANSPARENCY__ALERT-TIMER-BAR linear forwards;
    animation-duration: var(--timer-bar-timeout);
}

@keyframes TRANSPARENCY__ALERT-TIMER-BAR {
  from {
    transform: translateX(-100%);
  } to {
    transform: translateX(0); 
  }
}

@keyframes TRANSPARENCY__ALERT-SLIDE {
  from { transform: translateY(-130%); }
  to { transform: translateY(0) }
}

.${transparencyAlertInactiveClassName} {
  transform: translateY(-130%);
}`;

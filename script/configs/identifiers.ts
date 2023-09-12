export const backgroundImageStorageKey = "__BACKGROUND-IMAGE__";
export const legacyBackgroundImageStorageKey = "bgImg";

export const brightnessStorageKey = "__BRIGHTNESS__";
export const legacyBrightnessStorageKey = "brghtns";

export const blurStorageKey = "__BLUR__";

export const generalTransparencyID = "TRANSPARENCY";
export const actionsPanelID = `${generalTransparencyID}__ACTIONS-PANEL`;
export const actionsPanelOverlayID = `${actionsPanelID}-OVERLAY`;
export const actionsPanelStyleSheetID = `${generalTransparencyID}__ACTIONS_PANEL`;
export const alertsStyleSheetID = `${generalTransparencyID}__ALERTS-STYLESHEET`;
export const imageInputPickerHiddenID = `${generalTransparencyID}__IMAGE-INPUT-PICKER`;
export const setAsBackgroundImageButtonID = `${generalTransparencyID}__SET-BACKGROUND`;

export const generalDarkThemeClassName = "theme-dark";
export const generalWhiteThemeClassName = "theme-light";
export const transparencyAlertClassName = `${generalTransparencyID}__ALERT`;
export const transparencyAlertInactiveClassName = `${transparencyAlertClassName}--INACTIVE`;
export const actionsPanelActiveClassName = `${actionsPanelID}--SLIDE-IN`;
export const actionClassName = `${generalTransparencyID}__ACTION`;
export const actionActiveClassName = `${actionClassName}--ACTIVE`;
export const actionWarningClassName = `${actionClassName}-WARNING`;
export const actionInputClassName = `${actionClassName}-INPUT`;
export const imageInputPickerClassName = `${actionClassName}__INPUT-PICKER`;
export const actionLevelIndicatorClassName = `${actionClassName}-LEVEL-INDICATOR`;
export const saveLevelClassName = `${actionClassName}-SAVE-LEVEL`;

export const overlayBarElementBackgroundColor = "var(--color-tertiary)";

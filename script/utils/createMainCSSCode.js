import {
  overlayBar,
  overlayDarkener,
  emojiPicker,
  reactionsPicker,
  downloadAttachment,
  friendsTab,
  codeBlocks,
  messagePopouts,
  pinnedMessages,
  searchResults,
  embedBackground,
  allMessages,
  blockedMessages,
  invites,
  inboxPopup,
  emojiInfo,
  quickSwitcher,
  userInfoModal,
  retryConnectionOverlay,
  rolesContainerManualAdd,
  clearAfterDropdown,
} from "./classNames";

export default function createMainCSSCode(props) {
  const localBrightness = props.isDarkTheme
    ? `rgba(0, 0, 0, 0.${props.brightnessLevel})` || "rgba(0,0,0,0.9)"
    : `rgba(255, 255, 255, 0.${props.brightnessLevel})` || "rgba(255,255,255,0.7)";

  return `.theme-dark, .theme-light {--background-primary:transparent;--background-secondary:transparent;--background-tertiary:transparent;--channeltextarea-background:transparent;--deprecated-panel-background:transparent;--background-secondary-alt:transparent;--scrollbar-auto-track:transparent;}.theme-dark {--scrollbar-auto-thumb:rgba(255,255,255,0.3);}.theme-light {--scrollbar-auto-thumb:rgba(0,0,0,0.6);}#app-mount {background:url(${
    props.backgroundImageURL
  }) center center no-repeat;background-size:cover;}.${overlayBar}{margin-top:0;padding-top:4px;background:${localBrightness};}.${overlayDarkener}{background-color: ${localBrightness};}.${friendsTab}{background-color:transparent !important;}.${clearAfterDropdown}, .${rolesContainerManualAdd}, .${retryConnectionOverlay}, .${emojiInfo}, .${userInfoModal}, .${quickSwitcher}, .${codeBlocks}, .${downloadAttachment}, .${inboxPopup}, .${emojiPicker}, .${reactionsPicker}, .${messagePopouts}, .${pinnedMessages}, .${searchResults}, .${embedBackground}, .${invites} {background-color:${
    props.isDarkTheme ? `rgba(0,0,0,0.7)` : `rgba(255,255,255,0.85)`
  } !important;}div[class=${blockedMessages}]:not(.${allMessages}) {display: none;}.TRANSPARENCY__ACTIONS {width: 30%;height: 100%;background-color: rgba(0,0,0,0.3);position: absolute;right: 0;z-index: 200;backdrop-filter: blur(8px);transform: translateX(100%);transition: transform 500ms ease;}.TRANSPARENCY__ACTIONS--SLIDE-IN {transform: translateX(0);}.TRANSPARENCY__ALERT {position: absolute;top: 0px;left: 0px;right: 0px;margin: auto;padding: 20px;font-size: 14px;width: fit-content;background-color: rgba(0,0,0,0.3);backdrop-filter: blur(8px);color: white;border-bottom-right-radius: 20px;border-bottom-left-radius: 20px;z-index: 10000;box-shadow: 0px 13px 10px -5px rgba(0,0,0,0.5);transition: transform 500ms ease;animation: TRANSPARENCY__ALERT-SLIDE 500ms ease;}@keyframes TRANSPARENCY__ALERT-SLIDE {from { transform: translateY(-130%); }to { transform: translateY(0) }}.TRANSPARENCY__ALERT--INACTIVE {transform: translateY(-130%);}.TRANSPARENCY__FADE-IN {animation: fadeIn 500ms ease forwards;}@keyframes fadeIn {to { opacity: 1; }}`;
}

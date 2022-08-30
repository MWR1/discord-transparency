import { BrightnessLevel } from "../../@types";
import {
  activeThreadsChannelHoverPopup,
  allMessages,
  blockedMessages,
  clearAfterDropdown,
  codeBlocks,
  discussionsTab,
  downloadAttachment,
  embedBackground,
  emojiGIFStickerPickers,
  emojiInfo,
  friendsTab,
  homeTab,
  inboxPopup,
  inboxUnreadPopup,
  invites,
  messageOptionsHoverPopout,
  nitroTab,
  onJoinServerPopout,
  optionPopout,
  overlayBar,
  overlayDarkener,
  pinnedMessagesPopup,
  quickSwitcher,
  reactionsBackground,
  reactionsPicker,
  retryConnectionOverlay,
  rolesContainerManualAdd,
  searchResultsPane,
  threadPane,
  threadsPopup,
  userInfoModal,
} from "../utils/classNames";

interface CreateMainCSSCodeParams {
  backgroundImageURL: string;
  brightnessLevel: BrightnessLevel;
  isDarkTheme: boolean;
}

/**
 * Assembles the CSS code for the main stylesheet, that styles everything and allows for transparency. It concatenates
 * the class names of the elements needed for everything to be displayed correctly
 * @param {CreateMainCSSCodeParams} mainCSSCodeParams
 * @param {boolean} mainCSSCodeParams.isDarkTheme - allows to style elements accordingly, depending on the theme (white/dark)
 * @param {number} mainCSSCodeParams.brightnessLevel - the brightness level chosen
 * @param {string} mainCSSCodeParams.backgroundImageURL - the image's URL that is used as a background image
 * @returns {string}
 */

export default function createMainCSSCode({
  isDarkTheme,
  brightnessLevel,
  backgroundImageURL,
}: CreateMainCSSCodeParams): string {
  /**
   * @var {brightnessLevelRGBA} - controls how opaque the background image should be
   */
  const brightnessLevelRGBA = isDarkTheme
    ? `rgba(0, 0, 0, 0.${brightnessLevel.value})` || "rgba(0,0,0,0.9)"
    : `rgba(255, 255, 255, 0.${brightnessLevel.value})` || "rgba(255,255,255,0.7)";

  /**
   * @var {variousElementsBackground} - styles various elements of Discord such as invites, popups,
   * and other elements of the sort
   */
  const variousElementsBackground = isDarkTheme ? `rgba(0,0,0,0.78)` : `rgba(255,255,255,0.85)`;
  const variousElementsBackgroundMoreOpaque = isDarkTheme ? `rgba(0,0,0,0.92)` : `rgba(255,255,255,0.95)`;

  return `.theme-dark, .theme-light {--background-primary: transparent;--background-secondary: transparent;--background-tertiary: transparent;--channeltextarea-background: transparent;--deprecated-panel-background: transparent;--background-secondary-alt: transparent;--scrollbar-auto-track: transparent;}.theme-dark {--scrollbar-auto-thumb:rgba(255,255,255,0.3);}.theme-light {--scrollbar-auto-thumb:rgba(0,0,0,0.6);}#app-mount {background: url(${backgroundImageURL}) center center no-repeat;background-size: cover;}${overlayBar} {margin-top: 0;padding-top: 4px;background: ${brightnessLevelRGBA};}${overlayDarkener} {background-color: ${brightnessLevelRGBA};}${friendsTab}, ${nitroTab}, ${homeTab}, ${discussionsTab} {background-color: transparent !important;}${activeThreadsChannelHoverPopup}, ${rolesContainerManualAdd}, ${messageOptionsHoverPopout},${emojiGIFStickerPickers}, ${pinnedMessagesPopup}, ${searchResultsPane},${retryConnectionOverlay}, ${clearAfterDropdown}, ${reactionsBackground},${reactionsPicker}, ${embedBackground}, ${downloadAttachment},${inboxUnreadPopup}, ${optionPopout}, ${quickSwitcher},${threadPane}, ${threadsPopup}, ${emojiInfo},${invites}, ${codeBlocks}, ${inboxPopup} {background-color: ${variousElementsBackground} !important;}${userInfoModal}, ${onJoinServerPopout} {background-color: ${variousElementsBackgroundMoreOpaque} !important;}div[class=${blockedMessages}]:not(${allMessages}) {display: none;}#TRANSPARENCY__ACTIONS {font-family: "Whitney", "Helvetica Neue", "Helvetica", monospace, "Arial", sans-serif;width: 30%;height: 100%;background-color: rgba(0,0,0,0.6);position: absolute;right: 0;z-index: 200;backdrop-filter: blur(8px);transform: translateX(100%);transition: transform 500ms ease;}.TRANSPARENCY__ACTIONS--SLIDE-IN {transform: translateX(0) !important;}.TRANSPARENCY__ALERT {position: absolute;left: 0px;right: 0px;margin: auto;padding: 20px;font-size: 14px;width: fit-content;width: -moz-fit-content;max-width: 450px;background-color: rgba(0,0,0,0.6);backdrop-filter: blur(8px);color: white;border-bottom-right-radius: 20px;border-bottom-left-radius: 20px;z-index: 10000;box-shadow: 0px 13px 10px -5px rgba(0,0,0,0.5);transition: transform 500ms ease;animation: TRANSPARENCY__ALERT-SLIDE 500ms ease;}@keyframes TRANSPARENCY__ALERT-SLIDE {from { transform: translateY(-130%); }to { transform: translateY(0) }}.TRANSPARENCY__ALERT--INACTIVE {transform: translateY(-130%);}.TRANSPARENCY__FADE-IN {animation: fadeIn 500ms ease forwards;}@keyframes fadeIn {to { opacity: 1; }}`;
}

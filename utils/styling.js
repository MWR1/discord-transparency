import {
  overlayBar,
  overlayDarkener,
  emojiPicker,
  scrollBar,
  friendsTab,
  codeBlocks,
  messagePopouts,
  searchResults,
  embedBackground
} from "./classNames";

export default ({ backgroundImageURL, localBrightness }) =>
  `.theme-dark {--background-primary:transparent;--background-secondary:transparent;--background-tertiary:transparent;--channeltextarea-background:transparent;--deprecated-panel-background:transparent;--background-secondary-alt:transparent;}#app-mount {background:url(${backgroundImageURL}) center center no-repeat;background-size:cover;}.${overlayBar}{margin-top:0;padding-top:4px;background:${localBrightness};}.${overlayDarkener}{background-color: ${localBrightness};}${codeBlocks} {background:#2f3136;}.${scrollBar} {background:rgba(255,255,255,0.05) !important;}.${friendsTab}{background:transparent !important;}.${emojiPicker}, .${messagePopouts}, .${searchResults}, .${embedBackground} {background:rgba(0,0,0,0.7) !important;}#TRANSPARENCY__IMAGE-LINK {position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:100;width: 180px;height: 40px;text-align: center;box-shadow: 0 4px 7px rgba(0, 0, 0, 0.5);border-radius: 20px;}#TRANSPARENCY__SLIDE-BRIGHTNESS {position:absolute;right:43px;top:0;bottom:0;margin:auto;transform:translateY(200px);transform: scale(1.5);height: 200px;-webkit-appearance: slider-vertical;}#TRANSPARENCY__SAVE-BRIGHTNESS {position:absolute;right:43px;top:0;bottom:0;margin:auto;transform:translateY(200px);right:35px;height:40px;width:150px;}`;

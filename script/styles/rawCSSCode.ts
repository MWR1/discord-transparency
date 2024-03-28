import * as classNames from "../configs/classNames";
import * as identifiers from "../configs/identifiers";

// for class name groupings
// prettier-ignore
export default function rawCSSCode(options: { [key: string]: string }) {
  return `.theme-dark, .theme-light {
  --background-primary: transparent !important;
  --background-secondary: transparent !important;
  --background-tertiary: transparent !important;
  --channeltextarea-background: transparent !important;
  --deprecated-panel-background: transparent !important;
  --background-secondary-alt: transparent !important;
  --scrollbar-auto-track: transparent !important;
  --home-background: transparent !important;
}

.theme-dark {
  --scrollbar-auto-thumb:rgba(255,255,255,0.3) !important;
  --profile-body-background-color: rgba(255, 255, 255, 0.1) !important;   
}

.theme-light {
  --scrollbar-auto-thumb:rgba(0,0,0,0.6) !important;
  --profile-body-background-color: rgba(0, 0, 0, 0.05) !important;
}

#app-mount {
  background: url(${options.backgroundImageURL}) center center no-repeat;
  background-size: cover;
}

${classNames.titleBar} {
  margin-top: 0;
  padding-top: 4px;
  background: ${options.brightnessLevelRGBA};
  backdrop-filter: blur(${options.blurLevelPixels})
}

${classNames.overlayDarkener}, ${classNames.themeEditorPane}, ${classNames.previewAppIconsPane} {
  background-color: ${options.brightnessLevelRGBA} !important;
  backdrop-filter: blur(${options.blurLevelPixels}) !important;
} 

${classNames.friendsTab}, ${classNames.nitroTab}, ${classNames.discussionsTab}, 
${classNames.appDirectoryTab}, ${classNames.rolesAndChannelsTab}, ${classNames.discoverServersTab},
${classNames.discussionsTabTitle} {
  background-color: transparent !important;
}

${classNames.activeThreadsChannelHoverPopup}, ${classNames.rolesContainerManualAdd}, ${classNames.audioAttachment}, 
${classNames.messageOptionsHoverPopout}, ${classNames.searchResultsPane}, ${classNames.emojiGIFStickerPickers},
${classNames.retryConnectionOverlay}, ${classNames.clearAfterDropdown}, ${classNames.reactionsBackground},
${classNames.embedBackground}, ${classNames.downloadAttachment},
${classNames.viewReactions}, ${classNames.invites}, ${classNames.codeBlocks},
${classNames.stickyRoleManageHeader}, ${classNames.previewAppIconsPane}, ${classNames.threadPane}, 
${classNames.shopTab}, ${classNames.createPoll} {
  background-color: ${options.variousElementsBackground} !important;
}

${classNames.userInfoModalNonpremium}, ${classNames.onJoinServerPopout}, ${classNames.inboxPopup},
${classNames.aboutMeGuildIconTooltip}, ${classNames.optionPopout},
${classNames.reactionsPicker}, ${classNames.stickyEmojiReactionPickerHeaders},
${classNames.quickSwitcher}, ${classNames.pinnedMessagesPopup}, ${classNames.threadsPopup}, 
${classNames.accountSwitchPopup}, ${classNames.emojiGIFStickerPickers}, ${classNames.superReactionsNoNitro},
${classNames.newAvatarDecorationsPopup}, ${classNames.attachmentButtons} {
background-color: ${options.variousElementsBackgroundMoreOpaque} !important;
}

${classNames.rolePreviewArea} {
  align-items: center;
}

${classNames.stickyRoleManageHeader} {
  margin-left: -24px;
  padding-left: 24px;
}

${classNames.allMessages}:has(${classNames.blockedMessages}) {
  display: none;
}

#${identifiers.actionsPanelID} {
  font-family: "Whitney", "Helvetica Neue", "Helvetica", monospace, "Arial", sans-serif;
  width: 30%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  position: absolute;
  right: 0;
  z-index: 200;
  backdrop-filter: blur(8px);
  transform: translateX(100%);
  transition: transform 500ms ease;
}

#${identifiers.actionsPanelOverlayID} {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 199;
}

.${identifiers.actionsPanelActiveClassName} {
  transform: translateX(0) !important;
}
`;
}

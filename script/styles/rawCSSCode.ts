import * as classNames from "../configs/classNames";
import * as identifiers from "../configs/identifiers";

// for class name groupings
// prettier-ignore
export default function rawCSSCode(options: { [key: string]: string }) {
  return `.theme-dark, .theme-light {
  --background-primary: transparent;
  --background-secondary: transparent;
  --background-tertiary: transparent;
  --channeltextarea-background: transparent;
  --deprecated-panel-background: transparent;
  --background-secondary-alt: transparent;
  --scrollbar-auto-track: transparent;
  --home-background: transparent;
}

.theme-dark {
  --scrollbar-auto-thumb:rgba(255,255,255,0.3);
  --profile-body-background-color: rgba(255, 255, 255, 0.1);   
}

.theme-light {
  --scrollbar-auto-thumb:rgba(0,0,0,0.6);
  --profile-body-background-color: rgba(0, 0, 0, 0.05);
}

#app-mount {
  background: url(${options.backgroundImageURL}) center center no-repeat;
  background-size: cover;
}

${classNames.overlayBar} {
  margin-top: 0;
  padding-top: 4px;
  background: ${options.brightnessLevelRGBA};
  backdrop-filter: blur(${options.blurLevelPixels})
}

${classNames.overlayDarkener}, ${classNames.themeEditorPane} {
  background-color: ${options.brightnessLevelRGBA};
  backdrop-filter: blur(${options.blurLevelPixels})
} 

${classNames.friendsTab}, ${classNames.nitroTab}, ${classNames.homeTab}, ${classNames.discussionsTab}, 
${classNames.appDirectoryTab}, ${classNames.rolesAndChannelsTab}, ${classNames.discoverServersTab},
${classNames.discussionsTabTitle}, ${classNames.customiseChannelsAndRolesPane} {
  background-color: transparent !important;
}

${classNames.activeThreadsChannelHoverPopup}, ${classNames.rolesContainerManualAdd}, ${classNames.audioAttachment}, 
${classNames.messageOptionsHoverPopout}, ${classNames.searchResultsPane}, ${classNames.emojiGIFStickerPickers},
${classNames.retryConnectionOverlay}, ${classNames.clearAfterDropdown}, ${classNames.reactionsBackground},
${classNames.embedBackground}, ${classNames.downloadAttachment}, ${classNames.threadPane},
${classNames.emojiInfo}, ${classNames.invites}, ${classNames.codeBlocks},
${classNames.stickyRoleManageHeader} {
  background-color: ${options.variousElementsBackground} !important;
}

${classNames.userInfoModalNonpremium}, ${classNames.onJoinServerPopout}, ${classNames.inboxPopup},
${classNames.inboxUnreadPopup}, ${classNames.aboutMeGuildIconTooltip}, ${classNames.optionPopout},
${classNames.reactionsPicker}, ${classNames.reactionsPickerSearch}, ${classNames.stickyEmojiReactionPickerHeaders},
${classNames.quickSwitcher}, ${classNames.pinnedMessagesPopup}, ${classNames.threadsPopup}, 
${classNames.inboxForYouPopup}, ${classNames.accountSwitchPopup}, ${classNames.emojiGIFStickerPickers},
${classNames.superReactionsNoNitro}, ${classNames.newAvatarDecorationsPopup} {
background-color: ${options.variousElementsBackgroundMoreOpaque} !important;
}

${classNames.rolePreviewArea} {
  align-items: center;
}

${classNames.stickyRoleManageHeader} {
  margin-left: -24px;
  padding-left: 24px;
}

div[class=${classNames.blockedMessages.slice(1) /* remove dot */}]:not(${classNames.allMessages}) {
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

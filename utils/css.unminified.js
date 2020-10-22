`.theme-dark, .theme-light {
    --background-primary:transparent;
    --background-secondary:transparent;
    --background-tertiary:transparent;
    --channeltextarea-background:transparent;
    --deprecated-panel-background:transparent;
    --background-secondary-alt:transparent;
    --scrollbar-auto-track:transparent;
}
.theme-dark {
    --scrollbar-auto-thumb:rgba(255,255,255,0.3);   
}
.theme-light {
    --scrollbar-auto-thumb:rgba(0,0,0,0.6);
}
#app-mount {
    background:url(${backgroundImageURL}) center center no-repeat;
    background-size:cover;
}
.${overlayBar}{
    margin-top:0;
    padding-top:4px;
    background:${localBrightness};
}
.${overlayDarkener}{
    background-color: ${localBrightness};
} 

.${friendsTab}{
    background-color:transparent !important;
}

.${retryConnectionOverlay}, .${emojiInfo}, .${userInfoModal}, .${quickSwitcher}, .${codeBlocks}, .${downloadAttachment}, .${inboxPopup}, .${emojiPicker}, .${reactionsPicker}, .${messagePopouts}, .${pinnedMessages}, .${searchResults}, .${embedBackground}, .${invites} {
    background-color:${state.isDarkTheme ? `rgba(0,0,0,0.7)` : `rgba(255,255,255,0.85)`} !important;
}

div[class=${blockedMessages}]:not(.${allMessages}) {
    display: none;
}

#TRANSPARENCY__SLIDE-BRIGHTNESS-IFRAME {
    position:absolute;
    height: 100%;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
}

#TRANSPARENCY__BUTTON-IFRAME {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 200;
    width: 400px;
    height: 215px;
}

.TRANSPARENCY__ALERT { 
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    padding: 20px;
    font-size: 14px;
    width: fit-content;
    background-color: #faa61a;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    z-index: 10000;
    box-shadow: rgba(255, 255, 255, 0.8) -1px 5px 11px 0px;
    transition: transform 500ms ease;
    animation: TRANSPARENCY__SLIDE 500ms ease;
}

@keyframes TRANSPARENCY__SLIDE {
    from { transform: translateY(-130%); }
    to { transform: translateY(0) }
}

.TRANSPARENCY__ALERT--INACTIVE {
    transform: translateY(-130%);
}`;

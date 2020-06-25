`.theme-dark {
        --background-primary:transparent;
        --background-secondary:transparent;
        --background-tertiary:transparent;
        --channeltextarea-background:transparent;
        --deprecated-panel-background:transparent;
        --background-secondary-alt:transparent;
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

    ${codeBlocks} {
        background-color:#2f3136; 
    }
    
    .${scrollBar} {
        background-color:rgba(255,255,255,0.3) !important;
    }

    .${scrollBarContainer}{
        background-color: transparent !important;
        border: none !important;
    }
    
    .${friendsTab}{
        background-color:transparent !important;
    }
    
    .${inboxPopup}, .${emojiPicker}, .${reactionsPicker}, .${messagePopouts}, .${pinnedMessages}, .${searchResults}, .${embedBackground}, .${invites} {
        background-color:rgba(0,0,0,0.7) !important;
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
    }
    `;

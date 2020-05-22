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
    
    .${emojiPicker}, .${messagePopouts}, .${searchResults}, .${embedBackground}, .${invites} {
        background-color:rgba(0,0,0,0.7) !important;
    }

    .${allMessages}:not(.${notBlockedMessages}) {
        display: none;
    }

    #TRANSPARENCY__SLIDE-BRIGHTNESS {
        position:absolute;
        right:43px;
        top:0;
        bottom:0;
        margin:auto;
        transform:translateY(200px);
        transform: scale(1.5); 
        height: 200px;
        -webkit-appearance: slider-vertical;
    }

    #TRANSPARENCY__SAVE-BRIGHTNESS {
        position:absolute;
        right:43px;
        top:0;
        bottom:0;
        margin:auto;
        transform:translateY(200px);
        right:35px;
        height:40px;
        width:150px;
    }

    #TRANSPARENCY__BUTTON-IFRAME {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 60px;
    }

    `;

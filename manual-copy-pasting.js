!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);function r({type:e,id:t,value:n="",text:r="",eventType:o="onkeydown",eventMethod:a=null}){const i=document.createElement("input");return i.type=e,"range"===e&&(i.min=0,i.max=9),i.id=t,i.value=n,i.placeholder=r,i[o]=a,i}function o({parent:e,id:t="",isMainStyleSheet:n,CSS:r}){const o=e.createElement("style");if(n){const n=e.getElementById(t);n&&(n.remove(),window.onkeydown=null)}return o.appendChild(e.createTextNode(r)),o.id=t,o}function a({text:e,containsHTML:t=!1}){const n=document.createElement("div");n.className="TRANSPARENCY__ALERT",n[t?"innerHTML":"textContent"]=e,document.body.appendChild(n),setTimeout(()=>{n.classList.add("TRANSPARENCY__ALERT--INACTIVE"),setTimeout(()=>n.remove(),1e3)},7e3)}function i(e,{overlayDarkenerEl:t,overlayBarEl:n}){if(e.brightnessTweaker.active)return l(e);const i=document.createElement("iframe");i.id="TRANSPARENCY__SLIDE-BRIGHTNESS-IFRAME";const c=r({type:"range",id:"TRANSPARENCY__SLIDE-BRIGHTNESS",value:e.brightnessTweaker.level,eventType:"oninput",eventMethod:r=>{t.style.backgroundColor=`rgba(0,0,0,0.${e.brightnessTweaker.slider.value})`,n.style.backgroundColor=`rgba(0,0,0,0.${e.brightnessTweaker.slider.value})`,e.brightnessTweaker.level=e.brightnessTweaker.slider.value}}),d=function({id:e,text:t="",eventMethod:n=null}){const r=document.createElement("button");return r.id=e,r.innerText=t,r.onclick=n,r}({id:"TRANSPARENCY__SAVE-BRIGHTNESS",text:"Save brightness level",eventMethod:t=>{window.localStorage.setItem("brghtns",e.brightnessTweaker.level),a({text:`Brightness level updated! Now it is at level ${e.brightnessTweaker.level}.`}),l(e)}});document.body.appendChild(i);const s=o({parent:i.contentDocument,isMainStyleSheet:!1,CSS:"#TRANSPARENCY__SLIDE-BRIGHTNESS {transform: scale(1.5);height: 200px;-webkit-appearance: slider-vertical;}#TRANSPARENCY__SAVE-BRIGHTNESS {height:40px;width:150px;margin-top:80px;}"});i.contentDocument.body.style="display:flex;justify-content:center;align-items:center;flex-direction:column;",i.contentDocument.body.appendChild(s),i.contentDocument.body.appendChild(c),i.contentDocument.body.appendChild(d),e.brightnessTweaker.iframe=i,e.brightnessTweaker.slider=c,e.brightnessTweaker.active=!0}function l(e){e.brightnessTweaker.slider.remove(),e.brightnessTweaker.iframe.remove(),e.brightnessTweaker.active=!1}const c="typeWindows-1za-n7.withFrame-haYltI.titleBar-AC4pGV.horizontalReverse-3tRjY7.flex-1O1GKY.directionRowReverse-m8IjIq.justifyStart-2NDFzi.alignStretch-DpGPf3";!function(){!function(){const e=document.createElement("iframe");e.style.display="none",e.onload=t=>window.localStorage=e.contentWindow.localStorage,document.body.appendChild(e)}();const e={backgroundChangingInput:{active:!1,iframe:null},brightnessTweaker:{active:!1,level:window.localStorage.getItem("brghtns")||"9",slider:null,saveButton:null}},t=document.querySelector(".app-1q1i1E"),n=document.querySelector("."+c),l=(({backgroundImageURL:e,localBrightness:t})=>`.theme-dark {--background-primary:transparent;--background-secondary:transparent;--background-tertiary:transparent;--channeltextarea-background:transparent;--deprecated-panel-background:transparent;--background-secondary-alt:transparent;}#app-mount {background:url(${e}) center center no-repeat;background-size:cover;}.${c}{margin-top:0;padding-top:4px;background:${t};}.app-1q1i1E{background-color: ${t};}code.inline, .markup-2BOw-j code, code {background-color:#2f3136;}.theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB>.scroller-2FKFPG::-webkit-scrollbar-thumb {background-color:rgba(255,255,255,0.3) !important;}.theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB>.scroller-2FKFPG::-webkit-scrollbar-track-piece{background-color: transparent !important;border: none !important;}.theme-dark .container-1D34oG{background-color:transparent !important;}.contentWrapper-2txmjs, .emojiPicker-3PwZFl, .wrapper-2aW0bm, .messagesPopoutWrap-1MQ1bW, .searchResultsWrap-3-pOjs, .embedFull-2tM8--, .wrapper-35wsBm {background-color:rgba(0,0,0,0.7) !important;}div[class=groupStart-23k01U]:not(.message-2qnXI6) {display: none;}#TRANSPARENCY__SLIDE-BRIGHTNESS-IFRAME {position:absolute;height: 100%;right:0;top:0;bottom:0;margin:auto;}#TRANSPARENCY__BUTTON-IFRAME {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 200;width: 400px;height: 215px;}.TRANSPARENCY__ALERT {position: absolute;top: 0px;left: 0px;right: 0px;margin: auto;padding: 20px;font-size: 14px;width: fit-content;background-color: #faa61a;border-bottom-right-radius: 20px;border-bottom-left-radius: 20px;z-index: 10000;box-shadow: rgba(255, 255, 255, 0.8) -1px 5px 11px 0px;transition: transform 500ms ease;animation: TRANSPARENCY__SLIDE 500ms ease;}@keyframes TRANSPARENCY__SLIDE {from { transform: translateY(-130%); }to { transform: translateY(0) }}.TRANSPARENCY__ALERT--INACTIVE {transform: translateY(-130%);}`)({backgroundImageURL:window.localStorage.getItem("bgImg"),localBrightness:`rgba(0, 0, 0, 0.${e.brightnessTweaker.level})`||"rgba(0,0,0,0.9)",overlayDarkener:"app-1q1i1E",overlayBar:c}),d=o({parent:document,id:"TRANSPARENCY",isMainStyleSheet:!0,CSS:l});document.head.appendChild(d),a({text:"Welcome back! These are the shortcuts if you need a quick refresher:<br> <b> CTRL + ALT </b> - to change the background image<br> <b> CTRL + B </b> - to tweak the brightness of the background image<br> <b> CTRL + D </b> - to deactivate the theme, and go back to the old look.",containsHTML:!0}),window.onkeydown=a=>{a.ctrlKey&&("d"===a.key?d.getAttribute("media")?(d.removeAttribute("media"),n.style.backgroundColor="rgba(0,0,0,0."+e.brightnessTweaker.level):(d.setAttribute("media","1px"),n.style.backgroundColor="var(--color-tertiary)"):"b"===a.key?i(e,{overlayDarkenerEl:t,overlayBarEl:n}):a.altKey&&function(e,t){if(e.backgroundChangingInput.active)return function(e){e.backgroundChangingInput.iframe.remove(),e.backgroundChangingInput.active=!1}(e);const n=r({type:"input",id:"TRANSPARENCY__IMAGE-LINK",text:"Paste discord image link here",eventMethod:r=>{"Enter"===r.key&&""!==n.value.trim()&&(t.innerHTML+=`#app-mount{background: url(${n.value}) center center no-repeat !important; background-size: cover !important;}`,window.localStorage.setItem("bgImg",n.value),a.remove(),e.backgroundChangingInput.active=!1)}}),a=document.createElement("iframe");a.id="TRANSPARENCY__BUTTON-IFRAME",document.body.appendChild(a);const i=o({parent:a.contentDocument,isMainStyleSheet:!1,CSS:"#TRANSPARENCY__IMAGE-LINK {display:block;margin:auto;z-index:100;width: 250px;height: 40px;text-align: center;box-shadow: 0 4px 7px rgba(0, 0, 0, 0.5);border-radius: 20px;}p{line-height: 18px;background-color: rgba(0, 0, 0, 0.8);font-family:monospace;padding: 10px;border-radius: 20px;color: white;}"}),l=document.createElement("p");l.textContent="(!) The image you want as your background must be sent as a message on Discord, then you will have to click on the image, press on {Open original}, and copy the link from there.",a.contentDocument.body.appendChild(i),a.contentDocument.body.appendChild(n),a.contentDocument.body.appendChild(l),e.backgroundChangingInput={active:!0,iframe:a}}(e,d))}}()}]);
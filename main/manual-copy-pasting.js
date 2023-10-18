(()=>{"use strict";const e="__BACKGROUND-IMAGE__",n="__BRIGHTNESS__",t="__BLUR__",r="TRANSPARENCY",o=`${r}__ACTIONS-PANEL`,a=`${o}-OVERLAY`,l=`${r}__ACTIONS_PANEL`,s=`${r}__ALERTS-STYLESHEET`,i=`${r}__IMAGE-INPUT-PICKER`,c=`${r}__SET-BACKGROUND`,u="theme-dark",d="theme-light",m=`${r}__ALERT`,p=`${m}--INACTIVE`,g=`${o}--SLIDE-IN`,b=`${r}__ACTION`,h=`${b}--ACTIVE`,f=`${b}-WARNING`,v=`${b}-INPUT`,y=`${b}__INPUT-PICKER`,x=`${b}-LEVEL-INDICATOR`,k=`${b}-SAVE-LEVEL`,w=new Map,T=new Map,N=new Map;function E(e){const n=w.get("mainStyleSheet"),t=w.get("overlayBarElement");if(!n.hasAttribute("media"))return n.setAttribute("media","1px"),null!==t&&(t.style.backgroundColor="var(--color-tertiary)"),void(e.style.display="none");const r=N.get("isDarkTheme"),o=N.get("brightness");n.removeAttribute("media"),null!==t&&(t.style.backgroundColor=r?`rgba(0,0,0,0.${o}`:`rgba(255,255,255,0.${o}`),e.classList.contains(g)&&(e.style.display="block")}const _="Press here to browse for an image on your computer",$="Set as background image 🌟";function S(e){return`🛑 Oh no, there's been an error. If you see this, join the support server, and report the error. [[${e}]]`}const L=`.${b} {\n  min-height: 100px;\n  background-color: rgba(0, 0, 0, 0.5);\n  margin: 10px;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 30px 50px;\n  transition: background-color 300ms linear;\n}\n\n.${h} {\n  background-color: rgba(0, 0, 0, 0.8);\n  cursor: initial;\n}\n\n.${v} {\n  box-sizing: border-box;\n  text-align: center;\n  padding: 15px 0;\n  width: 100%;\n  border: 0;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 50px;\n  color: white;\n}\n\n.${y} {\n  padding: 20px 15px !important;\n  cursor: pointer;\n  font-family: var(--font-primary);\n  font-size: smaller;\n}\n\n.${v}:focus,\n.${k}:focus {\n  outline: none;\n  border: 2px solid dodgerblue;\n}\n\n.${x} {\n  margin: 0;\n  opacity: 0.8;\n  text-align: center;\n}\n\n.${f} {\n  display: none;\n  font-size: 11px;\n  line-height: 20px;\n  color: white;\n  max-width: 310px;\n  margin: 20px 0 0;\n  opacity: 0.8;\n}\n\n.${v}:focus ~ .${f} {\n  display: block;\n}\n\n.${k} {\n  height: 40px;\n  padding: 0 15px;\n  max-width: 300px;\n  margin-top: 10px;\n  border: 0;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 50px;\n  color: white;\n  cursor: pointer;\n}\n\n#${c} {\n  position: absolute;\n  left: 100%;\n  width: max-content;\n  padding: 10px;\n  margin-left: 4px;\n  background-color: inherit;\n  border-radius: inherit;\n  font-size: 14px;\n  cursor: pointer;\n}`,P=`.${m} { \n  position: absolute;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  padding: 20px;\n  font-size: 14px;\n  width: fit-content;\n  width: -moz-fit-content;\n  max-width: 450px;\n  background-color: rgba(0,0,0,0.6);\n  backdrop-filter: blur(8px);\n  color: white;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  z-index: 10000;\n  box-shadow: 0px 13px 10px -5px rgba(0,0,0,0.5);\n  transition: transform 500ms ease;\n  animation: TRANSPARENCY__ALERT-SLIDE 500ms ease;\n}\n\n@keyframes TRANSPARENCY__ALERT-SLIDE {\n  from { transform: translateY(-130%); }\n  to { transform: translateY(0) }\n}\n\n.${p} {\n  transform: translateY(-130%);\n}`,C=".typeWindows-2-g3UY.withFrame-2dL45i.titleBar-1it3bQ, .typeWindows-2-g3UY.withFrame-2dL45i.titleBar-1it3bQ.withBackgroundOverride-gzmZco",I=".app-3xd6d0",R=".layerContainer-2lfOPe",A=".contentWrapper-3vHNP2",B=".header-JUTO-g";function M(){const e=N.get("brightness"),n=N.get("isDarkTheme"),t=n?`rgba(0, 0, 0, 0.${e})`||"rgba(0,0,0,0.9)":`rgba(255, 255, 255, 0.${e})`||"rgba(255,255,255,0.7)",r=n?"rgba(0,0,0,0.78)":"rgba(255,255,255,0.85)",l=n?"rgba(0,0,0,0.92)":"rgba(255,255,255,0.95)";return`.theme-dark, .theme-light {\n  --background-primary: transparent;\n  --background-secondary: transparent;\n  --background-tertiary: transparent;\n  --channeltextarea-background: transparent;\n  --deprecated-panel-background: transparent;\n  --background-secondary-alt: transparent;\n  --scrollbar-auto-track: transparent;\n  --home-background: transparent;\n}\n\n.theme-dark {\n  --scrollbar-auto-thumb:rgba(255,255,255,0.3);\n  --profile-body-background-color: rgba(255, 255, 255, 0.1);   \n}\n\n.theme-light {\n  --scrollbar-auto-thumb:rgba(0,0,0,0.6);\n  --profile-body-background-color: rgba(0, 0, 0, 0.05);\n}\n\n#app-mount {\n  background: url(${(s={backgroundImageURL:N.get("backgroundImageURL"),blurLevelPixels:`${N.get("blur")}px`,brightnessLevelRGBA:t,variousElementsBackground:r,variousElementsBackgroundMoreOpaque:l}).backgroundImageURL}) center center no-repeat;\n  background-size: cover;\n}\n\n${C} {\n  margin-top: 0;\n  padding-top: 4px;\n  background: ${s.brightnessLevelRGBA};\n  backdrop-filter: blur(${s.blurLevelPixels})\n}\n\n${I}, .themeEditor-1Ebyfp {\n  background-color: ${s.brightnessLevelRGBA};\n  backdrop-filter: blur(${s.blurLevelPixels})\n} \n\n.container-2cd8Mz, .applicationStore-2nk7Lo, .background-fkKrXt, .container-3wLKDe, \n.directoryContainer-z-0pgp, .container-2IKOsH, .container-1um7CU, .header-3xB4vB, .pageWrapper-2PwDoS,\n.themed-Hp1KC_, .emptyPage-2TGR7j, .scrollerContainer-y16Rs9 {\n  background-color: transparent !important;\n}\n\n.popout-TdhJ6Z, .container-2kTWmC, .wrapperAudio-1Bzv_Z, \n.wrapper-2vIMkT, .searchResultsWrap-5RVOkx, ${A},\n.container-2RRFHK, .popout-VcNcHB, .reaction-3vwAF2,\n.embedFull-1HGV2S, .attachment-1PZZB2, .container-3XgAHv,\n.popoutContainer-1MXdqN, .wrapper-1HIH0j, .code.inline, .markup-2BOw-j code, code,\n${B}, .editor-1m9XtV {\n  background-color: ${s.variousElementsBackground} !important;\n}\n\n.userProfileOuterUnthemed-11rPfA, .main-jX9p1r, .recentMentionsPopout-3rCiI6, .channelHeader-DFRX8q,\n.container-2ebMPP.recentMentionsPopout-2bI1ZN, .aboutMeGuildIconTooltip-tM91BN, .popout-15UxD6,\n.contentWrapper-2f9yME, .header-11eigE, .wrapper-1NNaWG,\n.quickswitcher-pKcM9U, .messagesPopoutWrap-3zryHW, .container-18GwIk, \n.container-_dQaft, .toast-2sz4eO, ${A},\n.wrapper-2nNnyW, .container-5qN7ct {\nbackground-color: ${s.variousElementsBackgroundMoreOpaque} !important;\n}\n\n.rolePreviewArea-3eeTql {\n  align-items: center;\n}\n\n${B} {\n  margin-left: -24px;\n  padding-left: 24px;\n}\n\ndiv[class=${".groupStart-3Mlgv1".slice(1)}]:not(.message-2CShn3) {\n  display: none;\n}\n\n#${o} {\n  font-family: "Whitney", "Helvetica Neue", "Helvetica", monospace, "Arial", sans-serif;\n  width: 30%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.6);\n  position: absolute;\n  right: 0;\n  z-index: 200;\n  backdrop-filter: blur(8px);\n  transform: translateX(100%);\n  transition: transform 500ms ease;\n}\n\n#${a} {\n  display: none;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 199;\n}\n\n.${g} {\n  transform: translateX(0) !important;\n}\n`;var s}function O(n){w.get("mainStyleSheet").innerHTML+=function(e){return`#app-mount{background: url(${e}) center center no-repeat !important; background-size: cover !important;}`}(n),N.set("backgroundImageURL",n),window.localStorage.setItem(e,n)}function D({elementName:e,appendTo:n,htmlProps:t}){const r=document.createElement(e);for(const[e,n]of Object.entries(t))r[e]=n;if(void 0!==t.style)for(const[e,n]of Object.entries(t.style))r.style[e]=n;return n.appendChild(r),r}function H({text:e,timeout:n,containsHTML:t=!1}){const r=D({elementName:"div",appendTo:document.body,htmlProps:{className:m,[t?"innerHTML":"textContent"]:e}});return new Promise((e=>{setTimeout((()=>{r.classList.add(p),setTimeout((()=>{r.remove(),e(!0)}),1e3)}),n)}))}function K(){const e=N.get("blur");window.localStorage.setItem(t,e.toString()),H({text:`Blur level updated! Now it is at level <b>${e}</b>.`,containsHTML:!0,timeout:3e3})}function U(){const e=N.get("brightness");window.localStorage.setItem(n,e.toString()),H({text:`Brightness level updated! Now it is at level <b>${e}</b>.`,containsHTML:!0,timeout:3e3})}const W=[{name:"Change the background image",execute(e){const n=D({elementName:"label",appendTo:e,htmlProps:{className:`${v} ${y}`,htmlFor:i,textContent:_}}),t=D({elementName:"input",appendTo:e,htmlProps:{type:"file",id:i,accept:"image/*",style:{display:"none"}}});D({elementName:"p",appendTo:e,htmlProps:{textContent:"- or -"}});const r=D({elementName:"input",appendTo:e,htmlProps:{className:v,placeholder:"Paste image link here"}});D({elementName:"p",appendTo:e,htmlProps:{className:f,textContent:"🛑 The image you want as your background must be sent as a message on Discord. You will have to click on the image, press on <Open original>, and copy the link from there. After that, click on this input and press ENTER."}}),t.onchange=()=>function(e,n){if(null===e.files||0===e.files.length)return;const t=e.files[0],r=new FileReader;r.readAsDataURL(t),r.addEventListener("loadstart",(()=>{n.textContent="Loading image..."})),r.addEventListener("loadend",(()=>{const e=r.result;if(null===e)return void H({text:S("image data could not be read"),timeout:1e4});O(e);const o=t.name.split(".")[1]||"???",a=t.name.length>25?`(${t.name.slice(0,25)}...).${o}`:t.name;n.innerHTML=null!==t?`${_} | Image name: ${t.name.length>25?`<span title="${t.name}" style="text-decoration: underline; cursor: help">${a}</span>`:t.name}`:_})),r.addEventListener("error",(e=>H({text:S(`image reader gave error${e.lengthComputable?`, only ${(e.loaded/e.total*100).toPrecision(2)}% of image loaded`:""}}`),timeout:1e4})))}(t,n),r.onkeydown=e=>{const o=r.value.trim();"Enter"===e.code&&""!==o&&(n.textContent=_,t.value="",O(o))}}},{name:"Change the brightness level",execute(e){const n=N.get("isDarkTheme")?"0,0,0":"255,255,255",t=N.get("brightness"),r=D({elementName:"h3",appendTo:e,htmlProps:{className:x,textContent:`Brightness level: ${t}`}}),o=D({elementName:"input",appendTo:e,htmlProps:{className:v,type:"range",min:"0",max:"9",value:t.toString(),oninput:()=>function({overlayColor:e,brightnessLevelIndicator:n,brightnessLevelSlider:t}){const r=w.get("overlayDarkenerElement"),o=w.get("overlayBarElement");r.style.backgroundColor=`rgba(${e}, .${t.value})`,null!==o&&(o.style.backgroundColor=`rgba(${e}, .${t.value})`),n.textContent=`Brightness level: ${t.value}`,N.set("brightness",parseInt(t.value))}({overlayColor:n,brightnessLevelIndicator:r,brightnessLevelSlider:o})}});D({elementName:"button",appendTo:e,htmlProps:{className:k,textContent:"Save brightness level",onclick:U}})}},{name:"Change the blur level",execute(e){const n=N.get("blur"),t=D({elementName:"h3",appendTo:e,htmlProps:{className:x,textContent:`Blur level: ${n}`}}),r=D({elementName:"input",appendTo:e,htmlProps:{className:v,type:"range",min:"0",max:"50",value:n.toString(),oninput:()=>function(e,n){const t=w.get("overlayDarkenerElement"),r=w.get("overlayBarElement");t.style.backdropFilter=`blur(${n.value}px)`,null!==r&&(r.style.backdropFilter=`blur(${n.value}px)`),e.textContent=`Blur level: ${n.value}`,N.set("blur",parseInt(n.value))}(t,r)}});D({elementName:"button",appendTo:e,htmlProps:{className:k,textContent:"Save blur level",onclick:K}})}}];function z(e,n){n.classList.add(h),n.textContent="";try{n.onclick=null,e.execute(n)}catch(e){alert(S(e.message))}}class V{constructor(e){this.targetElement=e,this._observer=new MutationObserver(((e,n)=>{if(null===this._callback)throw new ReferenceError("No callback has been supplied on trigger.");for(const t of e){const e=t.target;if("childList"!==t.type||!e.classList.contains(R.slice(1))||null===e.firstChild)return;this._callback(t,n)}}))}onTrigger(e){return e&&(this._callback=e),this}observe(e){return this._observer.observe(this.targetElement,e),this}unobserve(){return this._observer.disconnect(),this}}let Y;function G(e){if(clearTimeout(Y),null===e.target)return;const n=e.target;if("A"!==n.nodeName||!n.hasAttribute("href")||!n.href.includes("cdn.discord"))return;let t=null;const r=new V(document.body);try{r.onTrigger((e=>{const o=e.target;t=o.querySelector(".menu-2TXYjN"),null!==t&&"menu"===t.role&&(F(t,n),clearTimeout(Y),r.unobserve(),T.delete("contextMenuCreationObserver"))})).observe({subtree:!0,childList:!0})}catch(e){return void alert(S(e.message))}T.set("contextMenuCreationObserver",r),Y=setTimeout((()=>{r.unobserve(),T.delete("contextMenuCreationObserver"),t=function(){const e=Array.from(document.querySelectorAll(R));if(0===e.length)return null;for(const n of e){const e=n.querySelector("div[role='menu']");if(null==e?void 0:e.className.includes("menu"))return e}return null}(),null!==t&&F(t,n)}),5e3)}function F(e,n){const t=N.get("isDarkTheme");D({elementName:"button",appendTo:e,htmlProps:{id:c,textContent:$,style:{color:t?"gold":"#7c7300",boxShadow:"0px 0px 13px 0px "+(t?"hsl(51deg 100% 50% / 45%)":"hsl(51deg 100% 22% / 45%)")}}}).onclick=()=>O(n.href)}function q(e){const n=document.querySelector(e);return null===n?(alert(S(`${e} is not in the DOM.`)),null):n}function X({legacyStorageKey:e,newStorageKey:n,defaultValue:t}){try{let r=window.localStorage.getItem(n);return null===r&&(r=window.localStorage.getItem(e),null===r?r=t:(window.localStorage.removeItem(e),window.localStorage.setItem(n,r))),!0}catch(e){return alert(S(e.message)),!1}}class j{constructor({targetElement:e,from:n,to:t}){this._callback=null,this.targetElement=e,this._from=n,this._to=t,this._wasClassNamePreviouslyPresent=!this.targetElement.classList.contains(this._from)&&this.targetElement.classList.contains(this._to),this._observer=new MutationObserver(((e,n)=>{if(null===this._callback)throw new ReferenceError("No callback has been supplied on class change.");for(const t of e){if("attributes"!==t.type||"class"!==t.attributeName)continue;const e=t.target,r=!e.classList.contains(this._from)&&e.classList.contains(this._to);r!==this._wasClassNamePreviouslyPresent&&(this._wasClassNamePreviouslyPresent=r,this._callback(t,n))}}))}onTrigger(e){return this._callback=e,this}observe(e){return this._observer.observe(this.targetElement,e),this}unobserve(){return this._observer.disconnect(),this}}function Z(){const e=document.getElementById(r),n=document.getElementById(s),t=document.getElementById(o),i=document.getElementById(a),c=document.getElementById(l);if(null==n||n.remove(),null==t||t.remove(),null==i||i.remove(),null==c||c.remove(),null!==e&&(window.onkeydown=null,e.remove()),window.__TRANSPARENCY_OBSERVERS__){for(const e of window.__TRANSPARENCY_OBSERVERS__.values())e.unobserve();window.__TRANSPARENCY_OBSERVERS__=void 0}}!function(){if(Z(),!(function(){const e=D({elementName:"iframe",appendTo:document.body,htmlProps:{}});return e.style.display="none",null===e.contentWindow?(alert(S("Could not create the localStorage object because the iframe's contentWindow isn't defined.")),!1):(window.localStorage=e.contentWindow.localStorage,!0)}()&&X({legacyStorageKey:"bgImg",newStorageKey:e,defaultValue:""})&&X({legacyStorageKey:"brghtns",newStorageKey:n,defaultValue:"9"}))||(N.set("isDarkTheme",document.documentElement.classList.contains(u)).set("brightness",parseInt(null!==(i=window.localStorage.getItem(n))&&void 0!==i?i:"unset")||9).set("blur",parseInt(null!==(c=window.localStorage.getItem(t))&&void 0!==c?c:"unset")||0).set("backgroundImageURL",null!==(m=window.localStorage.getItem(e))&&void 0!==m?m:""),0)||!function(){const e=N.get("isDarkTheme"),n=new j({targetElement:document.documentElement,from:e?u:d,to:e?d:u});try{n.onTrigger((()=>{H({text:"🛑 It looks the theme changed. Discord will refresh in 5 seconds.",timeout:5e3}).then((()=>{n.unobserve(),location.reload()}))})).observe({attributes:!0,attributeFilter:["class"]})}catch(e){return alert(S(e.message)),!1}return T.set("themeChangeObserver",n),!0}()||(window.__TRANSPARENCY_OBSERVERS__=T,0)||!function(){const e=q(I);if(null===e)return!1;const n=document.querySelector(C),t=D({elementName:"style",appendTo:document.head,htmlProps:{id:r,innerHTML:M()}});return w.set("overlayBarElement",n).set("overlayDarkenerElement",e).set("mainStyleSheet",t),!0}())return void Z();var i,c,m;D({elementName:"style",appendTo:document.head,htmlProps:{id:s,innerHTML:P}});const{actionsPanel:p,toggleActionsPanel:h}=function(){const e=D({elementName:"div",appendTo:document.body,htmlProps:{id:o}}),n=D({elementName:"div",appendTo:document.body,htmlProps:{id:a}}),t=function(e,n){const t=w.get("mainStyleSheet");let r;return function(){const o=e.classList.contains(g),a=t.hasAttribute("media");if(clearTimeout(r),!o&&!a)return e.style.display="block",n.style.display="block",void setTimeout((()=>e.classList.add(g)),20);o&&(e.classList.remove(g),n.style.display="none",r=setTimeout((()=>{e.style.display="none"}),1e3))}}(e,n);n.onclick=t,D({elementName:"style",appendTo:document.head,htmlProps:{id:l,innerHTML:L}}),null!==w.get("overlayBarElement")&&(e.style.paddingTop="20px");for(const n of W){const t=D({elementName:"div",appendTo:e,htmlProps:{className:b,textContent:n.name}});t.onclick=()=>z(n,t)}return{actionsPanel:e,toggleActionsPanel:t}}();H({text:"Welcome! <br><br>To toggle the actions panel, press <b>CTRL + SHIFT + X</b><br>To toggle the theme, press <b>CTRL + D</b>",timeout:1e4,containsHTML:!0}).then((()=>{(function(){const e=N.get("isDarkTheme"),n=w.get("overlayBarElement");if(null!==n)return!e&&n.classList.contains(u);const t=q(".bg-1QIAus");return null!==t&&!e&&t.classList.contains(u)})()&&(H({text:"<b>🛑 Warning</b><br><br>Your sidebar is currently dark themed.<br>For proper text visibility, disable its dark theme in Settings > Appearance.<br><br>The theme has disabled itself. After disabling the sidebar's dark theme, you can reactivate the theme by pressing <b>CTRL + D</b>. <u>No need to refresh</u>.",timeout:15e3,containsHTML:!0}),E(p))})),window.onkeydown=e=>{e.ctrlKey&&(e.shiftKey&&"KeyX"===e.code&&(e.preventDefault(),h()),"KeyD"===e.code&&(e.preventDefault(),E(p)))},window.addEventListener("contextmenu",G,{capture:!0})}()})();
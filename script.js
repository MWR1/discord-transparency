(function() {
  // utilities
  (function createLocalStorage() {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.onload = _ =>
      (window.localStorage = iframe.contentWindow.localStorage);
    document.body.appendChild(iframe);
  })();

  const findElement = (parentEl, part) =>
    Array.from(parentEl).find(
      ({ className }) =>
        typeof className === "string" && className.includes(part)
    );

  const state = {
    backgroundChangingInput: {
      active: false,
      input: undefined
    },
    brightnessTweaker: {
      active: false,
      level: window.localStorage.getItem("brghtns") || "9",
      input: undefined,
      saveBtn: undefined
    }
  };

  //components
  const sheet = document.createElement("style");
  const mainParent = document.querySelector("#app-mount").children;
  const overlayDarkener = findElement(mainParent, "app-");
  const overlayBar = findElement(mainParent, "withFrame");
  const localBrightness =
    `rgba(0,0,0,0.${state.brightnessTweaker.level})` ||
    "rgba(0,0,0,0.9)";
  const CSS = `.theme-dark {--background-primary:transparent;--background-secondary:transparent;--background-tertiary:transparent;--channeltextarea-background:transparent;--deprecated-panel-background:transparent}#app-mount {background:url(${window.localStorage.getItem("bgImg")}) center center no-repeat;background-size:cover;}.${overlayBar.className.replace(/ /g,".")}{margin-top:0;padding-top:4px;background:${localBrightness}}.${overlayDarkener.className}{background-color:${localBrightness}} code.inline, .markup-2BOw-j code {background:#2f3136}.theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-track-piece{background:rgba(255,255,255,0.05) !important;}.emojiPicker-3m1S-j{background:rgba(0,0,0,0.7)!important;}.embedFull-2tM8--{background:rgba(0,0,0,0.5);border-left-color:rgba(0,0,0,0.2);}.inner-1ilYF7{background:#2f3136 !important}.theme-dark .container-3gCOGc{background:transparent !important}.wrapper-35wsBm {background-color: rgba(0,0,0,0.5) !important;}`;
  const createBackgroundChangingInput = _ => {
    if (state.backgroundChangingInput.active) {
      removeBackgroundChangingInput();
      return;
    }

    const input = document.createElement("input");
    input.style =
      "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:100; width: 250px;";
    input.placeholder = "Paste discord image link here";
    window.onkeypress = e => {
      if (e.key === "Enter" && input.value.trim() !== "") {
        sheet.innerHTML += `#app-mount{background: url(${input.value}) !important;}`;
        window.localStorage.setItem("bgImg", input.value);
        input.remove();
        window.onkeypress = undefined;
        state.backgroundChangingInput.active = false;
      }
    };
    document.body.appendChild(input);
    state.backgroundChangingInput = { active: true, input };
  };

  const removeBackgroundChangingInput = _ => {
    state.backgroundChangingInput.input.remove();
    window.onkeypress = undefined;
    state.backgroundChangingInput.active = false;
  };

  const createBrightnessTweaker = _ => {
    if (state.brightnessTweaker.active) {
      removeBrightnessTweaker();
      return;
    }
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = "9";
    slider.value = state.brightnessTweaker.level;
    slider.style =
      "position:absolute;right:43px;top:0;bottom:0;margin:auto;transform:translateY(200px);transform: scale(1.5); height: 200px; -webkit-appearance: slider-vertical;";
    const saveBtn = document.createElement("button");
    saveBtn.style =
      "position:absolute;right:43px;top:0;bottom:0;margin:auto;transform:translateY(200px);right:35px;height:40px;width:150px;";
    saveBtn.innerText = "Save brightness level";
    document.body.appendChild(slider);
    document.body.appendChild(saveBtn);
    state.brightnessTweaker = {
      ...state.brightnessTweaker,
      active: true,
      slider,
      saveBtn
    };
    changeBrightness();
  };

  const changeBrightness = _ => {
    state.brightnessTweaker.slider.oninput = _ => {
      overlayDarkener.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.slider.value})`;
      overlayBar.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.slider.value})`;
      state.brightnessTweaker.level = state.brightnessTweaker.slider.value;
    };
    state.brightnessTweaker.saveBtn.onclick = _ => {
      window.localStorage.setItem("brghtns", state.brightnessTweaker.level);
      alert(
        `Brightness level updated! Now it\'s at level ${state.brightnessTweaker.level}.`
      );
      removeBrightnessTweaker();
    };
  };

  const removeBrightnessTweaker = _ => {
    state.brightnessTweaker.slider.remove();
    state.brightnessTweaker.saveBtn.remove();
    state.brightnessTweaker.active = false;
  };

  //manage stylesheet removing/adding (more for debugging)
  const previousStylesheet = document.getElementById("~trn");
  if (previousStylesheet) {
    previousStylesheet.remove();
    window.onkeydown = null;
  }
  sheet.appendChild(document.createTextNode(CSS));
  sheet.id = "~trn";
  document.head.appendChild(sheet);

  //keydown manager
  window.onkeydown = e => {
    if (e.ctrlKey) {
      if (e.key === "d") {
        //disable theme
        if (sheet.getAttribute("media")) {
          sheet.removeAttribute("media");
          overlayBar.style.backgroundColor = `rgba(0,0,0,0.${state.brightnessTweaker.level}`;
        } else {
          sheet.setAttribute("media", "1px");
          overlayBar.style.backgroundColor = "transparent";
        }
      } else if (e.key === "b") createBrightnessTweaker();
      else if (e.altKey) createBackgroundChangingInput();
    }
  };
})();

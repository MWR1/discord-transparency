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
    `rgba(0,0,0,0.${window.localStorage.getItem("brghtns")})` ||
    "rgba(0,0,0,0.9)";
  const CSS = `.theme-dark{--background-primary:transparent;--background-secondary:transparent;--background-tertiary:transparent;--channeltextarea-background:transparent;--deprecated-panel-background:transparent}#app-mount{background:url(${window.localStorage.getItem(
    "bgImg"
  )}) center center no-repeat;background-size:cover}.${overlayBar.className.replace(
    / /g,
    "."
  )}{margin-top:0;padding-top:4px;background:${localBrightness}}.${
    overlayDarkener.className
  }{background-color:${localBrightness}}code.inline,.markup-2BOw-jcode{background:#2f3136}.theme-dark.scrollerThemed-2oenus.themedWithTrack-q8E3vB.scroller-2FKFPG::-webkit-scrollbar-track-piece{background:rgba(255,255,255,0.05)!important;}.emojiPicker-3m1S-j{background:rgba(0,0,0,0.7)!important;}.embedFull-2tM8--{background:rgba(0,0,0,0.5);border-left-color:rgba(0,0,0,0.2);}.inner-1ilYF7{background:#2f3136!important}.theme-dark.container-3gCOGc{background:transparent!important}`;

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
        if (sheet.getAttribute("media")) sheet.removeAttribute("media");
        else sheet.setAttribute("media", "1px");
      } else if (e.key === "b") createBrightnessTweaker();
      else if (e.altKey) createBackgroundChangingInput();
    }
  };
})();
/*
(function() {
  let CLS = () => {
      let ifr = document.createElement("iframe");
      ifr.onload = () => (window.localStorage = ifr.contentWindow.localStorage);
      ifr.style.display = "none";
      document.body.appendChild(ifr);
    },
    ls = !window.localStorage ? CLS() : 0,
    overlay = document.querySelector(".app-1q1i1E"),
    overlayBar = document.querySelector(".withFrame-haYltI"),
    slider = false,
    active = false,
    saveBtn = false,
    brghtns = window.localStorage.getItem("brghtns") || "rgba(0,0,0,0.9)",
    val = brghtns || "rgba(0,0,0,0.9)",
    chooseBrightness = closed => {
      if (closed) {
        slider.oninput = undefined;
        saveBtn.onclick = undefined;
        overlay.style.background = val;
        overlayBar.style.background = val;
        slider.remove();
        saveBtn.remove();
        return;
      }
      overlay.style.background = val;
      overlayBar.style.background = val;
      slider = document.createElement("input");
      saveBtn = document.createElement("button");
      const styling =
        "position: absolute; right: 43px; top: 0; bottom: 0; margin: auto;";
      slider.type = "range";
      slider.min = "0";
      slider.max = "9";
      slider.style =
        styling +
        " transform: scale(1.5); height: 200px; -webkit-appearance: slider-vertical;";
      saveBtn.style =
        styling +
        " transform: translateY(200px); right: 35px; height: 40px; width: 150px;";
      saveBtn.innerText = "Save brightness level";
      document.body.appendChild(slider);
      document.body.appendChild(saveBtn);
      slider.value = brghtns[brghtns.length - 2];
      val = false;

      slider.oninput = () => {
        val = slider.value / 10;
        overlay.style.background = `rgba(0,0,0,${val})`;
        overlayBar.style.background = `rgba(0,0,0,${val})`;
      };

      saveBtn.onclick = () => {
        if (val) {
          window.localStorage.setItem("brghtns", `rgba(0,0,0,${val})`);
          alert("Brightness saved!");
        } else alert("Please specify a brightness level.");
      };
    },
    cl = brghtns || "rgba(0,0,0,0.9)",
    t = "transparent",
    d = "--background",
    b = "background",
    csss = `.theme-dark{${d}-primary:${t};${d}-secondary:${t};${d}-tertiary:${t};--channeltextarea-${b}:${t};--deprecated-panel-${b}:${t}}#app-mount{${b}:url(${window.localStorage.getItem(
      "bgImg"
    ) ||
      "https://cdn.discordapp.com/attachments/622700290017198120/622702563661185024/4k-wallpaper-beach-clouds-2775196.jpg"}) center center no-repeat;${b}-size:cover}.withFrame-haYltI{margin-top:0;padding-top:4px;${b}:${cl}}.app-19_DXt{${b}:${cl}}code.inline,.markup-2BOw-j code{${b}:#2f3136}.theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-track-piece {${b}: rgba(255,255,255,0.05) !important;}.emojiPicker-3m1S-j{${b}:rgba(0,0,0,0.7) !important;}.embedFull-2tM8--{${b}:rgba(0,0,0,0.5); border-left-color: rgba(0,0,0,0.2);}.inner-1ilYF7{${b}:#2f3136 !important}.theme-dark .container-3gCOGc{${b}: ${t} !important}`,
    icss =
      "position: absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index: 100",
    CIP = () => {
      let m = document.createElement("input");
      m.style = icss;
      document.body.appendChild(m);
      window.onkeypress = e =>
        e.key === "Enter" && m.value.trim() !== ""
          ? ((sheet.innerHTML += `#app-mount { ${b}-image: url("${m.value}") !important; }`),
            window.localStorage.setItem("bgImg", m.value),
            m.remove(),
            (window.onkeypress = null))
          : "";
      return m;
    },
    RIP = m => (m.remove(), (window.onkeypress = null), (inp = false)),
    sheet = document.createElement("style"),
    inp = false,
    potentialSheet = document.getElementById("~trn");
  potentialSheet ? (potentialSheet.remove(), (window.onkeydown = null)) : 0,
    (sheet.id = "~trn");
  sheet.appendChild(document.createTextNode(csss));
  document.head.appendChild(sheet);

  window.onkeydown = e => {
    e.ctrlKey
      ? e.key === "d"
        ? sheet.getAttribute("media")
          ? sheet.removeAttribute("media")
          : sheet.setAttribute("media", "1px")
        : e.key === "b"
        ? active
          ? (chooseBrightness(true), (active = !active))
          : (chooseBrightness(false), (active = !active))
        : e.altKey
        ? inp
          ? RIP(inp)
          : (inp = CIP())
        : 0
      : 0;
  };
})();
*/

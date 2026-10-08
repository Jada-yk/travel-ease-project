/* =========================================================
   TRAVELEASE — SHARED SEARCH LOADER  (/js/loader.js)

   Usage (old string form still works):

     TELoader.show("Finding cars in Lagos...");

   Full form:

     TELoader.show({
         title:   "Searching best flights to Lagos",
         meta:    ["Sep 19-Sep 22", "2 travelers", "Economy"],
         tagline: "Unlock big savings by booking together"
     });

     TELoader.hide();

   Hub -> page helper (shows the loader, then navigates):

     TELoader.goTo("/html/index.html?to=Lagos", { title: "..." });
   ========================================================= */

(function () {
    "use strict";

    var LOGO_SRC = "/images/logo.png";
    var DEFAULT_TAGLINE = "Great trips start with great deals";

    var START_PROGRESS = 7;     /* bar starts partly filled, like a real search */
    var MAX_CREEP = 92;         /* bar never reaches 100 until hide() */
    var MIN_VISIBLE_MS = 500;   /* avoids a flash when hide() follows show() instantly */

    var overlay, titleEl, metaEl, taglineEl, fillEl;
    var progress = 0;
    var creepTimer = null;
    var hideTimer = null;
    var shownAt = 0;
    var hiding = false;

    function build() {
        if (overlay) return;

        overlay = document.createElement("div");
        overlay.id = "te-loader-overlay";
        overlay.setAttribute("role", "dialog");
        overlay.setAttribute("aria-modal", "true");
        overlay.setAttribute("aria-live", "polite");
        overlay.setAttribute("aria-label", "Loading");

        var card = document.createElement("div");
        card.className = "te-loader-card";

        titleEl = document.createElement("h2");
        titleEl.className = "te-loader-title";

        metaEl = document.createElement("p");
        metaEl.className = "te-loader-meta";

        /* the logo is white, so it sits on a blue circle */
        var badge = document.createElement("div");
        badge.className = "te-loader-badge";

        var logo = document.createElement("img");
        logo.className = "te-loader-logo";
        logo.src = LOGO_SRC;
        logo.alt = "";

        badge.appendChild(logo);

        taglineEl = document.createElement("p");
        taglineEl.className = "te-loader-tagline";

        var track = document.createElement("div");
        track.className = "te-loader-bar-track";

        fillEl = document.createElement("div");
        fillEl.className = "te-loader-bar-fill";
        track.appendChild(fillEl);

        card.appendChild(titleEl);
        card.appendChild(metaEl);
        card.appendChild(badge);
        card.appendChild(taglineEl);
        card.appendChild(track);
        overlay.appendChild(card);
        document.body.appendChild(overlay);
    }

    function setProgress(value) {
        progress = Math.max(0, Math.min(100, value));
        if (fillEl) fillEl.style.width = progress + "%";
    }

    function startCreep() {
        stopCreep();
        creepTimer = window.setInterval(function () {
            /* ease toward MAX_CREEP: fast at first, slower near the end */
            setProgress(progress + (MAX_CREEP - progress) * 0.07);
        }, 140);
    }

    function stopCreep() {
        if (creepTimer) {
            window.clearInterval(creepTimer);
            creepTimer = null;
        }
    }

    function normalize(input) {
        if (typeof input === "string") return { title: input };
        return input || {};
    }

    function renderMeta(meta) {
        metaEl.textContent = "";

        var parts = Array.isArray(meta)
            ? meta
            : typeof meta === "string" && meta
                ? meta.split("|")
                : [];

        parts.forEach(function (part) {
            var text = String(part).trim();
            if (!text) return;

            var span = document.createElement("span");
            span.textContent = text;
            metaEl.appendChild(span);
        });
    }

    function show(input) {
        var opts = normalize(input);

        build();

        var keepBar = overlay.classList.contains("active") && !hiding;

        hiding = false;

        if (hideTimer) {
            window.clearTimeout(hideTimer);
            hideTimer = null;
        }

        titleEl.textContent = opts.title || "Searching...";
        taglineEl.textContent = opts.tagline || DEFAULT_TAGLINE;
        renderMeta(opts.meta);

        if (keepBar) return;   /* already open: only the text changed */

        /* reset the bar without animating backwards */
        fillEl.style.transition = "none";
        setProgress(START_PROGRESS);
        void fillEl.offsetWidth;
        fillEl.style.transition = "";

        shownAt = Date.now();
        overlay.classList.add("active");
        startCreep();
    }

    function hide() {
        if (!overlay || !overlay.classList.contains("active")) return;

        var wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - shownAt));

        if (hideTimer) window.clearTimeout(hideTimer);

        hiding = true;

        hideTimer = window.setTimeout(function () {
            stopCreep();
            setProgress(100);

            /* let the bar visibly finish, then fade out */
            hideTimer = window.setTimeout(function () {
                overlay.classList.remove("active");
                hideTimer = null;
                hiding = false;
            }, 260);
        }, wait);
    }

    /* Show the loader, then go to another page.
       goTo is the name tripCo.js uses; navigate is kept as an alias. */
    function goTo(url, input, delay) {
        show(input);
        window.setTimeout(function () {
            window.location.assign(url);
        }, typeof delay === "number" ? delay : 450);
    }

    /* Back/forward cache can restore a page with the loader still open */
    window.addEventListener("pageshow", function (event) {
        if (event.persisted && overlay) {
            stopCreep();
            overlay.classList.remove("active");
        }
    });

    window.TELoader = {
        show: show,
        hide: hide,
        setProgress: setProgress,
        goTo: goTo,
        navigate: goTo
    };
})();
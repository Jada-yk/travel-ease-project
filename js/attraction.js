document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       ELEMENTS
       ========================================================= */

    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");
    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");
    const backdrop = document.getElementById("backdrop");

    const headerTrack = document.getElementById("headerTrack");
    const sliderDots = document.getElementById("sliderDots");

    const stateChipRow = document.getElementById("stateChipRow");
    const stateDesc = document.getElementById("stateDesc");
    const resultsTitle = document.getElementById("resultsTitle");
    const resultsCount = document.getElementById("resultsCount");
    const attractionCards = document.querySelectorAll(".attraction-card");


    /* =========================================================
       HAMBURGER MENU
       ========================================================= */

    function openMobileMenu() {

        if (!navMenu) return;

        navMenu.classList.add("active");

        if (backdrop) backdrop.classList.add("active");
        if (openMenu) openMenu.style.display = "none";
        if (closeMenu) closeMenu.style.display = "block";

        document.body.style.overflow = "hidden";

    }

    function closeMobileMenu() {

        if (!navMenu) return;

        navMenu.classList.remove("active");

        if (backdrop) backdrop.classList.remove("active");
        if (openMenu) openMenu.style.display = "block";
        if (closeMenu) closeMenu.style.display = "none";

        document.body.style.overflow = "";

    }

    if (menuButton) {

        menuButton.addEventListener("click", function () {

            if (navMenu && navMenu.classList.contains("active")) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }

        });

    }

    if (backdrop) {
        backdrop.addEventListener("click", closeMobileMenu);
    }

    document.querySelectorAll(".nav-link").forEach(function (link) {

        link.addEventListener("click", closeMobileMenu);

    });


    /* =========================================================
       HEADER IMAGE SLIDER
       ========================================================= */

    const headerImages = [
        "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=1600&q=80"
    ];

    let sliderIndex = 0;
    let sliderTimer = null;

    function buildSlider() {

        if (!headerTrack || !sliderDots) return;

        headerTrack.innerHTML = "";
        sliderDots.innerHTML = "";

        headerImages.forEach(function (url, index) {

            const slide = document.createElement("div");
            slide.className = "header-slide";
            slide.style.backgroundImage = `url('${url}')`;
            headerTrack.appendChild(slide);

            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "slider-dot" + (index === 0 ? " active" : "");
            dot.setAttribute("aria-label", `Show image ${index + 1}`);

            dot.addEventListener("click", function () {
                goToSlide(index);
                restartSliderTimer();
            });

            sliderDots.appendChild(dot);

        });

    }

    function goToSlide(index) {

        if (!headerTrack) return;

        sliderIndex = (index + headerImages.length) % headerImages.length;

        headerTrack.style.transform = `translateX(-${sliderIndex * 100}%)`;

        sliderDots.querySelectorAll(".slider-dot").forEach(function (dot, i) {

            dot.classList.toggle("active", i === sliderIndex);

        });

    }

    function restartSliderTimer() {

        if (sliderTimer) clearInterval(sliderTimer);

        sliderTimer = setInterval(function () {

            goToSlide(sliderIndex + 1);

        }, 5000);

    }

    buildSlider();
    goToSlide(0);
    restartSliderTimer();


    /* =========================================================
       STATE PICKER / ATTRACTION FILTER
       ========================================================= */

    const stateInfo = {
        lagos: {
            name: "Lagos",
            desc: "Coastlines, art and nightlife along Nigeria's busiest state."
        },
        abuja: {
            name: "FCT Abuja",
            desc: "Landmarks, parks and lakeside spots around the nation's capital."
        },
        rivers: {
            name: "Rivers",
            desc: "Riverside parks and quiet island beaches near Port Harcourt."
        },
        "cross-river": {
            name: "Cross River",
            desc: "Cool mountain resorts and carnival energy around Calabar."
        },
        kano: {
            name: "Kano",
            desc: "Centuries of history inside one of Africa's oldest walled cities."
        },
        enugu: {
            name: "Enugu",
            desc: "Forests, waterfalls and hilltop views around the coal city."
        }
    };

    function showState(state) {

        if (!stateInfo[state]) return;

        let visibleCount = 0;

        attractionCards.forEach(function (card) {

            const match = card.dataset.state === state;

            card.classList.toggle("hidden", !match);

            if (match) {
                card.classList.remove("search-hit");
                void card.offsetWidth;
                card.classList.add("search-hit");
                visibleCount++;
            }

        });

        if (stateChipRow) {

            stateChipRow.querySelectorAll(".state-chip").forEach(function (chip) {

                chip.classList.toggle("active", chip.dataset.state === state);

            });

        }

        if (stateDesc) stateDesc.textContent = stateInfo[state].desc;

        if (resultsTitle) {
            resultsTitle.textContent = `Attractions in ${stateInfo[state].name}`;
        }

        if (resultsCount) {
            resultsCount.textContent = `${visibleCount} place${visibleCount === 1 ? "" : "s"}`;
        }

    }

    if (stateChipRow) {

        stateChipRow.querySelectorAll(".state-chip").forEach(function (chip) {

            chip.addEventListener("click", function () {

                showState(chip.dataset.state);

            });

        });

    }

    showState("lagos");


    /* =========================================================
       PREFILL FROM TRIPCO SEARCH
       (e.g. attraction.html?state=kano, sent by the TravelEase hub)
       ========================================================= */

    function prefillStateFromQuery() {
        const params = new URLSearchParams(window.location.search);
        const stateParam = params.get("state");

        if (!stateParam || !stateInfo[stateParam]) return;

        if (window.TELoader) {
            window.TELoader.show(
                `Finding attractions in ${stateInfo[stateParam].name}...`
            );
        }

        window.setTimeout(function () {

            showState(stateParam);

            resultsTitle?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            if (window.TELoader) {
                window.TELoader.hide();
            }

        }, 600);
    }

    prefillStateFromQuery();

});
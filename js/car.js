document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================================
       ELEMENTS
       ========================================================= */

    // Mobile navigation
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");
    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");
    const backdrop = document.getElementById("backdrop");

    // Login buttons
    const signInButton = document.getElementById("signInButton");
    const signInButtonMobile =
        document.getElementById("signInButtonMobile");

    // Search elements
    const searchBtn = document.getElementById("searchBtn");
    const locationInput =
        document.getElementById("locationInput");
    const destinationInput =
        document.getElementById("destinationInput");
    const destinationField =
        document.getElementById("destinationField");
    const pickupDate =
        document.getElementById("pickupDate");
    const returnPreview =
        document.getElementById("returnPreview");

    /* =========================================================
       RESPONSIVE CUSTOM DROPDOWNS
       ========================================================= */

    const customDropdowns =
        document.querySelectorAll(".custom-dropdown");

    function closeAllDropdowns(except = null) {
        customDropdowns.forEach((dropdown) => {
            if (dropdown !== except) {
                dropdown.classList.remove("open");

                const trigger =
                    dropdown.querySelector(
                        ".custom-dropdown-trigger"
                    );

                trigger?.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        });
    }

    customDropdowns.forEach((dropdown) => {
        const trigger =
            dropdown.querySelector(
                ".custom-dropdown-trigger"
            );

        const text =
            dropdown.querySelector(
                ".custom-dropdown-text"
            );

        const hiddenInput =
            dropdown.querySelector(
                'input[type="hidden"]'
            );

        const options =
            dropdown.querySelectorAll(
                ".custom-dropdown-menu button"
            );

        if (!trigger || !text || !hiddenInput) {
            return;
        }

        /* Open / close dropdown */
        trigger.addEventListener("click", (event) => {
            event.stopPropagation();

            const wasOpen =
                dropdown.classList.contains("open");

            closeAllDropdowns(dropdown);

            dropdown.classList.toggle(
                "open",
                !wasOpen
            );

            trigger.setAttribute(
                "aria-expanded",
                String(!wasOpen)
            );
        });

        /* Select an option */
        options.forEach((option) => {
            option.addEventListener(
                "click",
                (event) => {
                    event.stopPropagation();

                    const value =
                        option.dataset.value || "";

                    const label =
                        option.textContent.trim();

                    hiddenInput.value = value;

                    text.textContent = label;

                    options.forEach((item) => {
                        item.classList.remove(
                            "selected"
                        );

                        item.setAttribute(
                            "aria-selected",
                            "false"
                        );
                    });

                    option.classList.add("selected");

                    option.setAttribute(
                        "aria-selected",
                        "true"
                    );

                    dropdown.classList.remove(
                        "open"
                    );

                    trigger.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            );
        });
    });

    /* Close dropdown when clicking outside */
    document.addEventListener("click", () => {
        closeAllDropdowns();
    });

    /* =========================================================
       DAYS SELECTOR
       ========================================================= */

    const daysCount =
        document.getElementById("daysCount");

    const daysMinus =
        document.getElementById("daysMinus");

    const daysPlus =
        document.getElementById("daysPlus");

    /* =========================================================
       SEARCH RESULTS
       ========================================================= */

    const availabilityNote =
        document.getElementById(
            "availabilityNote"
        );

    const modeToggle =
        document.getElementById("modeToggle");

    const carGrid =
        document.getElementById("carGrid");

    const resultsTitle =
        document.getElementById(
            "resultsTitle"
        );

    const resultsCount =
        document.getElementById(
            "resultsCount"
        );

    /* =========================================================
       OTHER BUTTONS
       ========================================================= */

    const promoClaimBtn =
        document.getElementById(
            "promoClaimBtn"
        );

    const bookingsBtn =
        document.getElementById(
            "myBookingsBtn"
        );

    /* =========================================================
       STORAGE
       ========================================================= */

    const USER_KEY = "travelEaseUser";
    const BOOKINGS_KEY = "tripBookings";

    let currentMode = "rental";
    let currentDays = 3;
    let activeSearch = false;

    /* =========================================================
       MY IMAGES
       
       Put your own car images inside the "images" folder.

       Project structure:

       Travel Ease website/
       ├── car.html
       ├── car.css
       ├── js/
       │   └── car.js
       └── images/
           ├── car1.jpg
           ├── car2.jpg
           ├── car3.jpg
           └── car4.jpg

       Because car.html is in the main folder,
       the paths below start with "images/".
       ========================================================= */

    const HEADER_IMAGES = [
        // MY IMAGE 1
        "../images/car2.jpg",

        // MY IMAGE 2
        "../images/car1.jpg",

        // MY IMAGE 3
        "../images/car3.jpg",

        // MY IMAGE 4
        "../images/car4.jpg"
    ];

    const headerTrack =
        document.getElementById("headerTrack");

    const sliderDots =
        document.getElementById("sliderDots");

    let currentSlide = 0;

    /* =========================================================
       HEADER IMAGE SLIDER
       Images sit side by side in #headerTrack and the whole
       track glides left, easing to a stop on each slide.
       ========================================================= */

    function buildHeaderSlides() {
        if (
            !headerTrack ||
            HEADER_IMAGES.length === 0
        ) {
            return;
        }

        headerTrack.innerHTML =
            HEADER_IMAGES
                .map(
                    (src) => `
                        <div
                            class="header-slide"
                            style="background-image:url('${src}');">
                        </div>
                    `
                )
                .join("");
    }

    function buildSliderDots() {
        if (
            !sliderDots ||
            HEADER_IMAGES.length === 0
        ) {
            return;
        }

        sliderDots.innerHTML =
            HEADER_IMAGES
                .map(
                    (_, index) => `
                        <button
                            type="button"
                            class="slider-dot ${
                                index === 0
                                    ? "active"
                                    : ""
                            }"
                            aria-label="Show header image ${
                                index + 1
                            }"
                            data-slide="${index}">
                        </button>
                    `
                )
                .join("");

        sliderDots
            .querySelectorAll(".slider-dot")
            .forEach((dot) => {
                dot.addEventListener(
                    "click",
                    () => {
                        const slideIndex =
                            Number(
                                dot.dataset.slide
                            );

                        showSlide(slideIndex);
                    }
                );
            });
    }

    function showSlide(index) {
        if (
            !headerTrack ||
            HEADER_IMAGES.length === 0
        ) {
            return;
        }

        currentSlide =
            (index +
                HEADER_IMAGES.length) %
            HEADER_IMAGES.length;

        headerTrack.style.transform =
            `translateX(-${currentSlide * 100}%)`;

        if (sliderDots) {
            sliderDots
                .querySelectorAll(
                    ".slider-dot"
                )
                .forEach((dot, i) => {
                    dot.classList.toggle(
                        "active",
                        i === currentSlide
                    );
                });
        }
    }

    buildHeaderSlides();

    buildSliderDots();

    showSlide(0);

    /* Change background every 5 seconds */
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);

/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const MOBILE_BREAKPOINT = 900;


/* ---------------------------------------------------------
   OPEN NAVIGATION
   --------------------------------------------------------- */

function openNavigation() {

    if (!navMenu || !menuButton) {
        return;
    }

    navMenu.classList.add("active");

    if (backdrop) {
        backdrop.classList.add("active");
    }

    menuButton.classList.add("active");

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    menuButton.setAttribute(
        "aria-label",
        "Close navigation"
    );

    if (openMenu) {
        openMenu.style.display = "none";
    }

    if (closeMenu) {
        closeMenu.style.display = "block";
    }

    /*
       Prevent the page underneath the menu
       from scrolling.
    */
    document.body.style.overflow = "hidden";
}


/* ---------------------------------------------------------
   CLOSE NAVIGATION
   --------------------------------------------------------- */

function closeNavigation() {

    if (navMenu) {
        navMenu.classList.remove("active");
    }

    if (backdrop) {
        backdrop.classList.remove("active");
    }

    if (menuButton) {
        menuButton.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation"
        );
    }

    if (openMenu) {
        openMenu.style.display = "block";
    }

    if (closeMenu) {
        closeMenu.style.display = "none";
    }

    /*
       Give scrolling back to the page.
    */
    document.body.style.overflow = "";
}


/* ---------------------------------------------------------
   HAMBURGER BUTTON
   --------------------------------------------------------- */

menuButton?.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        const menuIsOpen =
            navMenu?.classList.contains("active");

        if (menuIsOpen) {
            closeNavigation();
        } else {
            openNavigation();
        }
    }
);


/* ---------------------------------------------------------
   BACKDROP
   --------------------------------------------------------- */

backdrop?.addEventListener(
    "click",
    () => {
        closeNavigation();
    }
);


/* ---------------------------------------------------------
   CLOSE MENU WHEN A NAV LINK IS CLICKED
   --------------------------------------------------------- */

navMenu
    ?.querySelectorAll("a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {
                closeNavigation();
            }
        );

    });


/* ---------------------------------------------------------
   CLOSE MENU WITH ESCAPE KEY
   --------------------------------------------------------- */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            navMenu?.classList.contains("active")
        ) {
            closeNavigation();
        }

    }
);


/* ---------------------------------------------------------
   HANDLE WINDOW RESIZING
   --------------------------------------------------------- */

let previousWidth = window.innerWidth;

window.addEventListener(
    "resize",
    () => {

        const currentWidth =
            window.innerWidth;

        /*
           If the user moves from mobile/tablet
           to desktop, completely reset the menu.
        */
        if (
            currentWidth > MOBILE_BREAKPOINT &&
            previousWidth <= MOBILE_BREAKPOINT
        ) {
            closeNavigation();
        }

        /*
           Also make sure the menu can never remain
           open on desktop after a resize.
        */
        if (
            currentWidth > MOBILE_BREAKPOINT &&
            navMenu?.classList.contains("active")
        ) {
            closeNavigation();
        }

        previousWidth = currentWidth;
    }
);


/* ---------------------------------------------------------
   INITIAL NAVIGATION STATE
   --------------------------------------------------------- */

closeNavigation();
    

    /* =========================================================
       DATE + DAYS
       ========================================================= */

    function formatDate(date) {
        return date.toLocaleDateString(
            "en-NG",
            {
                day: "2-digit",
                month: "short"
            }
        );
    }

    function updateReturnDate() {
        if (
            !pickupDate?.value ||
            !returnPreview
        ) {
            return;
        }

        const start = new Date(
            `${pickupDate.value}T00:00:00`
        );

        if (
            Number.isNaN(
                start.getTime()
            )
        ) {
            return;
        }

        start.setDate(
            start.getDate() +
                currentDays
        );

        returnPreview.textContent =
            formatDate(start);
    }

    function updateDays() {
        if (daysCount) {
            daysCount.textContent =
                currentDays;
        }

        updateReturnDate();
    }

    daysMinus?.addEventListener(
        "click",
        () => {
            currentDays =
                Math.max(
                    1,
                    currentDays - 1
                );

            updateDays();
        }
    );

    daysPlus?.addEventListener(
        "click",
        () => {
            currentDays =
                Math.min(
                    30,
                    currentDays + 1
                );

            updateDays();
        }
    );

    pickupDate?.addEventListener(
        "change",
        updateReturnDate
    );

    /* Set minimum pickup date */
    const today = new Date();

    if (pickupDate) {
        pickupDate.min =
            today
                .toISOString()
                .split("T")[0];

        const tomorrow =
            new Date(today);

        tomorrow.setDate(
            today.getDate() + 1
        );

        pickupDate.value =
            tomorrow
                .toISOString()
                .split("T")[0];
    }

    updateDays();

    /* =========================================================
       MODE TOGGLE
       ========================================================= */

    if (modeToggle) {
        modeToggle
            .querySelectorAll(
                "[data-mode]"
            )
            .forEach((button) => {
                button.addEventListener(
                    "click",
                    () => {
                        currentMode =
                            button.dataset.mode ||
                            "rental";

                        modeToggle
                            .querySelectorAll(
                                "[data-mode]"
                            )
                            .forEach(
                                (item) => {
                                    item.classList.toggle(
                                        "active",
                                        item ===
                                            button
                                    );
                                }
                            );

                        if (
                            destinationField
                        ) {
                            destinationField.classList.toggle(
                                "hidden",
                                currentMode !==
                                    "ride"
                            );
                        }

                        if (
                            destinationInput &&
                            currentMode !==
                                "ride"
                        ) {
                            destinationInput.value =
                                "";
                        }

                        updateSearchLabels();
                    }
                );
            });
    }

    function updateSearchLabels() {
        const searchText =
            document.getElementById(
                "searchBtnText"
            );

        if (!searchText) {
            return;
        }

        if (
            currentMode === "ride"
        ) {
            searchText.textContent =
                "Find a ride";
        } else {
            searchText.textContent =
                "Search cars";
        }
    }

    /* =========================================================
       CAR DATA
       ========================================================= */

    const carTypes = [
        {
            id: 1,
            title: "Economy & Compact",
            subtitle:
                "Affordable and easy to drive",
            price: 25000,
            icon: "fa-car-side",
            theme: "econ",
            cities: [
                "Lagos",
                "Abuja",
                "Port Harcourt",
                "Akure",
                "Enugu",
                "Bauchi"
            ]
        },

        {
            id: 2,
            title: "Compact SUV",
            subtitle:
                "Extra space for city trips",
            price: 45000,
            icon: "fa-car",
            theme: "suv",
            cities: [
                "Lagos",
                "Abuja",
                "Port Harcourt",
                "Enugu"
            ]
        },

        {
            id: 3,
            title: "Electric & Hybrid",
            subtitle:
                "Modern and efficient",
            price: 40000,
            icon: "fa-bolt",
            theme: "ev",
            cities: [
                "Lagos",
                "Abuja"
            ]
        },

        {
            id: 4,
            title: "Minivans & Vans",
            subtitle:
                "More room for groups",
            price: 55000,
            icon: "fa-van-shuttle",
            theme: "van",
            cities: [
                "Lagos",
                "Abuja",
                "Port Harcourt",
                "Enugu"
            ]
        },

        {
            id: 5,
            title: "Convertibles",
            subtitle:
                "Enjoy the drive",
            price: 90000,
            icon: "fa-car",
            theme: "convertible",
            cities: [
                "Lagos",
                "Abuja"
            ]
        },

        {
            id: 6,
            title: "Luxury & Sports",
            subtitle:
                "Premium driving experience",
            price: 120000,
            icon: "fa-gem",
            theme: "luxury",
            cities: [
                "Lagos",
                "Abuja"
            ]
        }
    ];

    /* =========================================================
       MY CAR TYPE IMAGES

       Put your own car photos inside the "images" folder, using
       these exact file names, and they will automatically replace
       the placeholder photo currently shown for each card:

       Travel Ease website/
       ├── car.html
       ├── car.css
       ├── js/
       │   └── car.js
       └── images/
           ├── car-econ.jpg
           ├── car-suv.jpg
           ├── car-ev.jpg
           ├── car-van.jpg
           ├── car-convertible.jpg
           └── car-luxury.jpg

       Because car.html is in the /html folder, the local paths
       below start with "../images/". If a local file is missing,
       the fallback photo loads instead so the cards never look
       broken.
       ========================================================= */

    const CAR_TYPE_IMAGES = {
        econ: {
            src: "../images/car-econ.jpg",
            fallback: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80"
        },
        suv: {
            src: "../images/car-suv.jpg",
            fallback: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80"
        },
        ev: {
            src: "../images/car-ev.jpg",
            fallback: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=80"
        },
        van: {
            src: "../images/car-van.jpg",
            fallback: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=900&q=80"
        },
        convertible: {
            src: "../images/car-convertible.jpg",
            fallback: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=80"
        },
        luxury: {
            src: "../images/car-luxury.jpg",
            fallback: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80"
        }
    };

    /* =========================================================
       HELPERS
       ========================================================= */

    function naira(amount) {
        return new Intl.NumberFormat(
            "en-NG",
            {
                style: "currency",
                currency: "NGN",
                maximumFractionDigits: 0
            }
        ).format(amount);
    }

    function escapeHTML(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function getBookings() {
        try {
            return JSON.parse(
                localStorage.getItem(
                    BOOKINGS_KEY
                ) || "[]"
            );
        } catch {
            return [];
        }
    }

    function saveBookings(bookings) {
        localStorage.setItem(
            BOOKINGS_KEY,
            JSON.stringify(bookings)
        );
    }

    function getCurrentUser() {
        try {
            const sessionUser =
                sessionStorage.getItem(
                    USER_KEY
                );

            const localUser =
                localStorage.getItem(
                    USER_KEY
                );

            return JSON.parse(
                sessionUser ||
                    localUser ||
                    "null"
            );
        } catch {
            return null;
        }
    }

    function showNotification(message) {
        const existing =
            document.querySelector(
                ".travel-notification"
            );

        existing?.remove();

        const notification =
            document.createElement(
                "div"
            );

        notification.className =
            "travel-notification";

        notification.textContent =
            message;

        document.body.appendChild(
            notification
        );

        setTimeout(() => {
            notification.classList.add(
                "show"
            );
        }, 10);

        setTimeout(() => {
            notification.classList.remove(
                "show"
            );

            setTimeout(
                () =>
                    notification.remove(),
                250
            );
        }, 3000);
    }

    /* =========================================================
       SEARCH
       ========================================================= */

    function shuffle(array) {
        const copy = [...array];

        for (
            let i = copy.length - 1;
            i > 0;
            i--
        ) {
            const j =
                Math.floor(
                    Math.random() *
                        (i + 1)
                );

            [
                copy[i],
                copy[j]
            ] = [
                copy[j],
                copy[i]
            ];
        }

        return copy;
    }

    function applyCityAvailability(
        city
    ) {
        const matching =
            carTypes.filter(
                (car) =>
                    car.cities.includes(
                        city
                    )
            );

        const available =
            matching.length
                ? shuffle(matching)
                : shuffle(carTypes);

        renderCars(
            available,
            city
        );
    }

    function renderCars(
        cars,
        city = ""
    ) {
        if (!carGrid) {
            return;
        }

        carGrid.innerHTML =
            cars
                .map(
                    (car) => {
                        const demoPrice =
                            Math.round(
                                car.price *
                                    (0.94 +
                                        Math.random() *
                                            0.14)
                            );

                        const carImage =
                            CAR_TYPE_IMAGES[
                                car.theme
                            ] || {};

                        return `
                            <article
                                class="car-card"
                                data-car-id="${car.id}">

                                <div
                                    class="car-visual">
                                    <img
                                        class="car-img"
                                        src="${carImage.src || ""}"
                                        alt="${escapeHTML(
                                            car.title
                                        )}"
                                        loading="lazy"
                                        onerror="this.onerror=null;this.src='${
                                            carImage.fallback ||
                                            ""
                                        }';">
                                </div>

                                <div
                                    class="car-card-body">

                                    <span
                                        class="car-category">
                                        TRAVELEASE
                                    </span>

                                    <h3>
                                        ${escapeHTML(
                                            car.title
                                        )}
                                    </h3>

                                    <p>
                                        ${escapeHTML(
                                            car.subtitle
                                        )}
                                    </p>

                                    <div
                                        class="car-price">

                                        <strong>
                                            ${naira(
                                                demoPrice
                                            )}
                                        </strong>

                                        <span>
                                            / day
                                        </span>

                                    </div>

                                    <button
                                        type="button"
                                        class="reserve-btn"
                                        data-car-id="${car.id}"
                                        data-price="${demoPrice}">
                                        Reserve
                                    </button>

                                </div>

                            </article>
                        `;
                    }
                )
                .join("");

        carGrid
            .querySelectorAll(
                ".reserve-btn"
            )
            .forEach((button) => {
                button.addEventListener(
                    "click",
                    () => {
                        const carId =
                            Number(
                                button.dataset
                                    .carId
                            );

                        const price =
                            Number(
                                button.dataset
                                    .price
                            );

                        const car =
                            carTypes.find(
                                (item) =>
                                    item.id ===
                                    carId
                            );

                        if (!car) {
                            return;
                        }

                        showDealModal(
                            car,
                            price,
                            city
                        );
                    }
                );
            });

        if (resultsTitle) {
            resultsTitle.textContent =
                city
                    ? `Cars available in ${city}`
                    : "Recommended cars";
        }

        if (resultsCount) {
            resultsCount.textContent =
                `${cars.length} ${
                    cars.length === 1
                        ? "car"
                        : "cars"
                }`;
        }
    }

    searchBtn?.addEventListener(
        "click",
        (event) => {
            event.preventDefault();

            if (activeSearch) {
                return;
            }

            const city =
                locationInput?.value?.trim();

            if (!city) {
                showNotification(
                    "Please select a pickup city."
                );

                return;
            }

            if (
                currentMode === "ride" &&
                !destinationInput?.value?.trim()
            ) {
                showNotification(
                    "Please select a drop-off location."
                );

                return;
            }

            activeSearch = true;

            searchBtn.classList.add(
                "loading"
            );

            searchBtn.disabled = true;

            if (availabilityNote) {
                availabilityNote.textContent =
                    "Searching available cars...";
            }

            setTimeout(() => {
                applyCityAvailability(
                    city
                );

                if (availabilityNote) {
                    availabilityNote.textContent =
                        `Showing available cars for ${city}.`;
                }

                showNotification(
                    `Cars found for ${city}.`
                );

                if (carGrid) {
                    carGrid.scrollIntoView(
                        {
                            behavior:
                                "smooth",
                            block:
                                "start"
                        }
                    );
                }

                searchBtn.classList.remove(
                    "loading"
                );

                searchBtn.disabled = false;

                activeSearch = false;
            }, 900);
        }
    );

    /* =========================================================
       LOGIN / REGISTER
       ========================================================= */

    function updateLoginButton(user) {
        const buttons = [
            signInButton,
            signInButtonMobile
        ];

        buttons.forEach((button) => {
            if (!button) {
                return;
            }

            if (user?.loggedIn) {
                button.textContent =
                    user.name
                        ? `Hi, ${user.name}`
                        : "My account";
            } else {
                button.textContent =
                    "Sign in / Register";
            }
        });
    }

    function removeExistingPopup() {
        document
            .querySelectorAll(
                ".dynamic-modal"
            )
            .forEach((modal) =>
                modal.remove()
            );
    }

    function wireModalDismiss(modal) {
        const closeButton =
            modal.querySelector(
                ".modal-close"
            );

        closeButton?.addEventListener(
            "click",
            () => modal.remove()
        );

        modal.addEventListener(
            "click",
            (event) => {
                if (
                    event.target ===
                    modal
                ) {
                    modal.remove();
                }
            }
        );
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            email
        );
    }

    function showFormError(modal, message) {
        const form =
            modal.querySelector("form");

        if (!form) {
            return;
        }

        let errorBox =
            modal.querySelector(
                ".login-error"
            );

        if (!errorBox) {
            errorBox =
                document.createElement(
                    "p"
                );

            errorBox.className =
                "login-error";

            form.prepend(errorBox);
        }

        errorBox.textContent =
            message;
    }

    function wirePasswordToggle(toggle, input) {
        toggle?.addEventListener(
            "click",
            () => {
                const isPassword =
                    input.type ===
                    "password";

                input.type =
                    isPassword
                        ? "text"
                        : "password";

                toggle.innerHTML =
                    isPassword
                        ? `<i class="fa-solid fa-eye-slash"></i>`
                        : `<i class="fa-solid fa-eye"></i>`;
            }
        );
    }

    function showLoginModal() {
        removeExistingPopup();

        const modal =
            document.createElement(
                "div"
            );

        modal.className =
            "modal-overlay dynamic-modal";

        modal.innerHTML = `
            <div class="login-modal">

                <button
                    class="modal-close"
                    type="button"
                    aria-label="Close">
                    &times;
                </button>

                <span class="section-kicker">
                    TRAVELEASE
                </span>

                <h2>
                    Welcome back
                </h2>

                <p class="login-description">
                    Sign in to manage your bookings, save your
                    trips and get exclusive car deals.
                </p>

                <form id="loginForm">

                    <label for="loginEmail">
                        Email
                    </label>

                    <input
                        type="email"
                        id="loginEmail"
                        placeholder="Enter your email"
                        autocomplete="email"
                        required>

                    <label for="loginPassword">
                        Password
                    </label>

                    <div class="password-wrapper">

                        <input
                            type="password"
                            id="loginPassword"
                            placeholder="Enter your password"
                            autocomplete="current-password"
                            required>

                        <button
                            type="button"
                            class="toggle-password"
                            id="loginPasswordToggle">
                            <i
                                class="fa-solid fa-eye">
                            </i>
                        </button>

                    </div>

                    <div class="login-options">

                        <label class="remember-me">
                            <input
                                type="checkbox"
                                id="loginRememberMe">
                            <span>
                                Remember me
                            </span>
                        </label>

                        <button
                            type="button"
                            class="forgot-password"
                            id="loginForgotPassword">
                            Forgot password?
                        </button>

                    </div>

                    <button
                        type="submit"
                        class="continue-login">
                        Sign in
                    </button>

                </form>

                <div class="login-divider">
                    <span>or</span>
                </div>

                <button
                    type="button"
                    class="create-account"
                    id="openRegister">
                    Create a new account
                </button>

            </div>
        `;

        document.body.appendChild(
            modal
        );

        wireModalDismiss(modal);

        const password =
            modal.querySelector(
                "#loginPassword"
            );

        const passwordToggle =
            modal.querySelector(
                "#loginPasswordToggle"
            );

        wirePasswordToggle(
            passwordToggle,
            password
        );

        modal
            .querySelector(
                "#loginForgotPassword"
            )
            ?.addEventListener(
                "click",
                () => {
                    showNotification(
                        "Password recovery will be connected to the backend."
                    );
                }
            );

        modal
            .querySelector(
                "#openRegister"
            )
            ?.addEventListener(
                "click",
                () => {
                    modal.remove();
                    showRegisterModal();
                }
            );

        modal
            .querySelector(
                "#loginForm"
            )
            ?.addEventListener(
                "submit",
                (event) => {
                    event.preventDefault();

                    const email =
                        modal
                            .querySelector(
                                "#loginEmail"
                            )
                            .value.trim();

                    const passwordValue =
                        modal
                            .querySelector(
                                "#loginPassword"
                            )
                            .value;

                    const rememberMe =
                        modal
                            .querySelector(
                                "#loginRememberMe"
                            )
                            ?.checked;

                    if (
                        !isValidEmail(email)
                    ) {
                        showFormError(
                            modal,
                            "Please enter a valid email address."
                        );

                        return;
                    }

                    if (
                        passwordValue.length < 6
                    ) {
                        showFormError(
                            modal,
                            "Password must be at least 6 characters."
                        );

                        return;
                    }

                    const user = {
                        name:
                            email
                                .split("@")[0]
                                .replace(
                                    /^./,
                                    (char) =>
                                        char.toUpperCase()
                                ),
                        email,
                        loggedIn:
                            true
                    };

                    localStorage.removeItem(
                        USER_KEY
                    );

                    sessionStorage.removeItem(
                        USER_KEY
                    );

                    if (rememberMe) {
                        localStorage.setItem(
                            USER_KEY,
                            JSON.stringify(
                                user
                            )
                        );
                    } else {
                        sessionStorage.setItem(
                            USER_KEY,
                            JSON.stringify(
                                user
                            )
                        );
                    }

                    updateLoginButton(
                        user
                    );

                    modal.remove();

                    showNotification(
                        `Welcome, ${user.name}! You are now signed in.`
                    );
                }
            );
    }

    function showRegisterModal() {
        removeExistingPopup();

        const modal =
            document.createElement(
                "div"
            );

        modal.className =
            "modal-overlay dynamic-modal";

        modal.innerHTML = `
            <div class="login-modal">

                <button
                    class="modal-close"
                    type="button"
                    aria-label="Close">
                    &times;
                </button>

                <span class="section-kicker">
                    TRAVELEASE
                </span>

                <h2>
                    Create your account
                </h2>

                <p class="login-description">
                    Register to manage your car bookings and
                    save your favorite deals.
                </p>

                <form id="registerForm">

                    <label for="registerName">
                        Full name
                    </label>

                    <input
                        type="text"
                        id="registerName"
                        placeholder="Enter your name"
                        autocomplete="name"
                        required>

                    <label for="registerEmail">
                        Email
                    </label>

                    <input
                        type="email"
                        id="registerEmail"
                        placeholder="Enter your email"
                        autocomplete="email"
                        required>

                    <label for="registerPassword">
                        Password
                    </label>

                    <div class="password-wrapper">

                        <input
                            type="password"
                            id="registerPassword"
                            placeholder="Create a password"
                            autocomplete="new-password"
                            required>

                        <button
                            type="button"
                            class="toggle-password"
                            id="registerPasswordToggle">
                            <i
                                class="fa-solid fa-eye">
                            </i>
                        </button>

                    </div>

                    <button
                        type="submit"
                        class="continue-login">
                        Create account
                    </button>

                </form>

                <div class="login-divider">
                    <span>or</span>
                </div>

                <button
                    type="button"
                    class="create-account"
                    id="openLogin">
                    Already have an account? Sign in
                </button>

            </div>
        `;

        document.body.appendChild(
            modal
        );

        wireModalDismiss(modal);

        const password =
            modal.querySelector(
                "#registerPassword"
            );

        const passwordToggle =
            modal.querySelector(
                "#registerPasswordToggle"
            );

        wirePasswordToggle(
            passwordToggle,
            password
        );

        modal
            .querySelector(
                "#openLogin"
            )
            ?.addEventListener(
                "click",
                () => {
                    modal.remove();
                    showLoginModal();
                }
            );

        modal
            .querySelector(
                "#registerForm"
            )
            ?.addEventListener(
                "submit",
                (event) => {
                    event.preventDefault();

                    const name =
                        modal
                            .querySelector(
                                "#registerName"
                            )
                            .value.trim();

                    const email =
                        modal
                            .querySelector(
                                "#registerEmail"
                            )
                            .value.trim();

                    const passwordValue =
                        modal
                            .querySelector(
                                "#registerPassword"
                            )
                            .value;

                    if (!name) {
                        showFormError(
                            modal,
                            "Please enter your full name."
                        );

                        return;
                    }

                    if (
                        !isValidEmail(email)
                    ) {
                        showFormError(
                            modal,
                            "Please enter a valid email address."
                        );

                        return;
                    }

                    if (
                        passwordValue.length < 6
                    ) {
                        showFormError(
                            modal,
                            "Password must be at least 6 characters."
                        );

                        return;
                    }

                    const user = {
                        name,
                        email,
                        loggedIn:
                            true
                    };

                    localStorage.setItem(
                        USER_KEY,
                        JSON.stringify(
                            user
                        )
                    );

                    sessionStorage.setItem(
                        USER_KEY,
                        JSON.stringify(
                            user
                        )
                    );

                    updateLoginButton(
                        user
                    );

                    modal.remove();

                    showNotification(
                        "Account created successfully."
                    );
                }
            );
    }
    signInButton?.addEventListener(
        "click",
        showLoginModal
    );

    signInButtonMobile?.addEventListener(
        "click",
        () => {
            closeNavigation();
            showLoginModal();
        }
    );

    /* =========================================================
       DEAL / RESERVATION MODAL
       ========================================================= */

    function showDealModal(
        car,
        price,
        city
    ) {
        removeExistingPopup();

        const total =
            price * currentDays;

        const modal =
            document.createElement(
                "div"
            );

        modal.className =
            "modal-overlay dynamic-modal";

        modal.innerHTML = `
            <div class="deal-modal">

                <button
                    class="modal-close"
                    type="button"
                    aria-label="Close">
                    &times;
                </button>

                <span class="section-kicker">
                    CAR RENTAL
                </span>

                <h2>
                    ${escapeHTML(
                        car.title
                    )}
                </h2>

                <p>
                    ${escapeHTML(
                        car.subtitle
                    )}
                </p>

                <div class="deal-summary">

                    <div>
                        Pickup
                        <strong>
                            ${escapeHTML(
                                city ||
                                    "Selected city"
                            )}
                        </strong>
                    </div>

                    <div>
                        Duration
                        <strong>
                            ${currentDays}
                            day${
                                currentDays ===
                                1
                                    ? ""
                                    : "s"
                            }
                        </strong>
                    </div>

                    <div>
                        Daily rate
                        <strong>
                            ${naira(
                                price
                            )}
                        </strong>
                    </div>

                </div>

                <div
                    class="deal-price-box">

                    <span>
                        Total demo payment
                    </span>

                    <strong>
                        ${naira(
                            total
                        )}
                    </strong>

                </div>

                <div
                    class="deal-actions">

                    <button
                        type="button"
                        class="deal-cancel-btn"
                        id="dealCancelBtn">
                        Cancel
                    </button>

                    <button
                        type="button"
                        class="deal-reserve-btn"
                        id="dealReserveBtn">
                        Reserve car
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(
            modal
        );

        wireModalDismiss(modal);

        modal
            .querySelector(
                "#dealCancelBtn"
            )
            ?.addEventListener(
                "click",
                () => {
                    modal.remove();
                }
            );

        modal
            .querySelector(
                "#dealReserveBtn"
            )
            ?.addEventListener(
                "click",
                () => {
                    modal.remove();

                    showPaymentModal(
                        car,
                        price,
                        city
                    );
                }
            );
    }

    /* =========================================================
       PAYMENT PLATFORM
       ========================================================= */

    const PAYMENT_METHOD_LABELS = {
        card: "Card payment",
        transfer: "Bank transfer",
        momo: "Mobile money"
    };

    function showPaymentModal(
        car,
        price,
        city
    ) {
        const user =
            getCurrentUser();

        if (!user) {
            showNotification(
                "Please sign in before reserving a car."
            );

            showLoginModal();

            return;
        }

        removeExistingPopup();

        const total =
            price * currentDays;

        const draftId =
            Date.now();

        const reference =
            `TE-${draftId
                .toString(36)
                .toUpperCase()}`;

        const modal =
            document.createElement(
                "div"
            );

        modal.className =
            "modal-overlay dynamic-modal";

        modal.innerHTML = `
            <div class="payment-modal">

                <button
                    class="modal-close"
                    type="button"
                    aria-label="Close">
                    &times;
                </button>

                <span class="section-kicker">
                    SECURE CHECKOUT
                </span>

                <h2>
                    Complete your payment
                </h2>

                <div class="payment-order-summary">
                    <div>
                        ${escapeHTML(
                            car.title
                        )}
                        <strong>
                            ${currentDays}
                            day${
                                currentDays === 1
                                    ? ""
                                    : "s"
                            }
                            ·
                            ${escapeHTML(
                                city ||
                                    "Selected city"
                            )}
                        </strong>
                    </div>
                    <div class="payment-order-total">
                        Total
                        <strong>
                            ${naira(
                                total
                            )}
                        </strong>
                    </div>
                </div>

                <div class="payment-methods" id="paymentMethods">
                    <button
                        type="button"
                        class="payment-method-btn active"
                        data-method="card">
                        <i class="fa-regular fa-credit-card"></i>
                        Card
                    </button>
                    <button
                        type="button"
                        class="payment-method-btn"
                        data-method="transfer">
                        <i class="fa-solid fa-building-columns"></i>
                        Bank transfer
                    </button>
                    <button
                        type="button"
                        class="payment-method-btn"
                        data-method="momo">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                        Mobile money
                    </button>
                </div>

                <div class="payment-form" id="paymentForm">

                    <div class="payment-panel" data-panel="card">
                        <label for="cardName">Cardholder name</label>
                        <input
                            type="text"
                            id="cardName"
                            placeholder="Name on card"
                            autocomplete="cc-name">

                        <label for="cardNumber">Card number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            inputmode="numeric"
                            placeholder="1234 5678 9012 3456"
                            maxlength="19"
                            autocomplete="cc-number">

                        <div class="payment-row">
                            <div>
                                <label for="cardExpiry">Expiry</label>
                                <input
                                    type="text"
                                    id="cardExpiry"
                                    inputmode="numeric"
                                    placeholder="MM/YY"
                                    maxlength="5"
                                    autocomplete="cc-exp">
                            </div>
                            <div>
                                <label for="cardCvv">CVV</label>
                                <input
                                    type="text"
                                    id="cardCvv"
                                    inputmode="numeric"
                                    placeholder="123"
                                    maxlength="4"
                                    autocomplete="cc-csc">
                            </div>
                        </div>
                    </div>

                    <div class="payment-panel hidden" data-panel="transfer">
                        <div class="payment-transfer-box">
                            <div>Bank <strong>TravelEase MFB</strong></div>
                            <div>Account number <strong>8081234567</strong></div>
                            <div>Account name <strong>TravelEase Nigeria Ltd</strong></div>
                            <div>Reference <strong>${reference}</strong></div>
                        </div>
                        <p class="payment-security-note">
                            <i class="fa-solid fa-circle-info"></i>
                            Transfer the exact amount, then confirm below.
                        </p>
                    </div>

                    <div class="payment-panel hidden" data-panel="momo">
                        <label for="momoProvider">Provider</label>
                        <select id="momoProvider">
                            <option value="">Select provider</option>
                            <option value="MTN MoMo">MTN MoMo</option>
                            <option value="Airtel Money">Airtel Money</option>
                            <option value="OPay">OPay</option>
                            <option value="PalmPay">PalmPay</option>
                        </select>

                        <label for="momoPhone">Phone number</label>
                        <input
                            type="tel"
                            id="momoPhone"
                            inputmode="numeric"
                            placeholder="080X XXX XXXX"
                            maxlength="11">
                    </div>

                </div>

                <p class="payment-security-note">
                    <i class="fa-solid fa-lock"></i>
                    This is a demo checkout — no real card or account is charged.
                </p>

                <button
                    type="button"
                    class="pay-btn"
                    id="payNowBtn">
                    <span class="pay-btn-label">
                        Pay ${naira(total)} now
                    </span>
                    <span class="pay-btn-spinner">
                        <i class="fa-solid fa-spinner"></i>
                        Processing payment...
                    </span>
                </button>

            </div>
        `;

        document.body.appendChild(
            modal
        );

        wireModalDismiss(modal);

        let activeMethod = "card";

        modal
            .querySelectorAll(
                ".payment-method-btn"
            )
            .forEach((button) => {
                button.addEventListener(
                    "click",
                    () => {
                        activeMethod =
                            button.dataset
                                .method;

                        modal
                            .querySelectorAll(
                                ".payment-method-btn"
                            )
                            .forEach((item) =>
                                item.classList.toggle(
                                    "active",
                                    item ===
                                        button
                                )
                            );

                        modal
                            .querySelectorAll(
                                ".payment-panel"
                            )
                            .forEach((panel) =>
                                panel.classList.toggle(
                                    "hidden",
                                    panel.dataset
                                        .panel !==
                                        activeMethod
                                )
                            );
                    }
                );
            });

        const cardNumberInput =
            modal.querySelector(
                "#cardNumber"
            );

        cardNumberInput?.addEventListener(
            "input",
            () => {
                const digits =
                    cardNumberInput.value
                        .replace(/\D/g, "")
                        .slice(0, 16);

                cardNumberInput.value =
                    digits
                        .replace(
                            /(\d{4})(?=\d)/g,
                            "$1 "
                        );
            }
        );

        const cardExpiryInput =
            modal.querySelector(
                "#cardExpiry"
            );

        cardExpiryInput?.addEventListener(
            "input",
            () => {
                const digits =
                    cardExpiryInput.value
                        .replace(/\D/g, "")
                        .slice(0, 4);

                cardExpiryInput.value =
                    digits.length > 2
                        ? `${digits.slice(
                              0,
                              2
                          )}/${digits.slice(
                              2
                          )}`
                        : digits;
            }
        );

        const cardCvvInput =
            modal.querySelector(
                "#cardCvv"
            );

        cardCvvInput?.addEventListener(
            "input",
            () => {
                cardCvvInput.value =
                    cardCvvInput.value
                        .replace(/\D/g, "")
                        .slice(0, 4);
            }
        );

        const momoPhoneInput =
            modal.querySelector(
                "#momoPhone"
            );

        momoPhoneInput?.addEventListener(
            "input",
            () => {
                momoPhoneInput.value =
                    momoPhoneInput.value
                        .replace(/\D/g, "")
                        .slice(0, 11);
            }
        );

        const payBtn =
            modal.querySelector(
                "#payNowBtn"
            );

        payBtn?.addEventListener(
            "click",
            () => {
                if (
                    payBtn.classList.contains(
                        "loading"
                    )
                ) {
                    return;
                }

                if (
                    activeMethod === "card"
                ) {
                    const name =
                        modal
                            .querySelector(
                                "#cardName"
                            )
                            ?.value.trim();

                    const number =
                        modal
                            .querySelector(
                                "#cardNumber"
                            )
                            ?.value.replace(
                                /\D/g,
                                ""
                            );

                    const expiry =
                        modal
                            .querySelector(
                                "#cardExpiry"
                            )
                            ?.value.trim();

                    const cvv =
                        modal
                            .querySelector(
                                "#cardCvv"
                            )
                            ?.value.trim();

                    if (
                        !name ||
                        !number ||
                        number.length < 16 ||
                        !/^\d{2}\/\d{2}$/.test(
                            expiry || ""
                        ) ||
                        !cvv ||
                        cvv.length < 3
                    ) {
                        showNotification(
                            "Please fill in all card details correctly."
                        );

                        return;
                    }
                } else if (
                    activeMethod ===
                    "momo"
                ) {
                    const provider =
                        modal.querySelector(
                            "#momoProvider"
                        )?.value;

                    const phone =
                        modal
                            .querySelector(
                                "#momoPhone"
                            )
                            ?.value.trim();

                    if (
                        !provider ||
                        !phone ||
                        phone.length < 10
                    ) {
                        showNotification(
                            "Please select a provider and enter a valid phone number."
                        );

                        return;
                    }
                }

                payBtn.classList.add(
                    "loading"
                );

                setTimeout(() => {
                    modal.remove();

                    completeBooking(
                        car,
                        price,
                        city,
                        activeMethod,
                        draftId
                    );
                }, 1400);
            }
        );
    }

    function completeBooking(
        car,
        price,
        city,
        method,
        id
    ) {
        const user =
            getCurrentUser();

        if (!user) {
            showNotification(
                "Please sign in before reserving a car."
            );

            showLoginModal();

            return;
        }

        const bookingId =
            id || Date.now();

        const booking = {
            id: bookingId,
            reference:
                `TE-${bookingId
                    .toString(36)
                    .toUpperCase()}`,
            title: car.title,
            subtitle:
                car.subtitle,
            location:
                city ||
                "Selected city",
            days: currentDays,
            price,
            total:
                price *
                currentDays,
            paymentMethod:
                method,
            status: "Paid",
            bookedAt:
                new Date().toISOString()
        };

        const bookings =
            getBookings();

        bookings.push(booking);

        saveBookings(
            bookings
        );

        showNotification(
            "Payment received — your car is booked."
        );

        showConfirmationModal(
            booking
        );
    }

    /* =========================================================
       DOWNLOADABLE RECEIPT
       ========================================================= */

    function downloadReceipt(booking) {
        if (
            typeof html2canvas ===
            "undefined"
        ) {
            showNotification(
                "Still loading the receipt tool — please try again in a moment."
            );

            return;
        }

        const methodLabel =
            PAYMENT_METHOD_LABELS[
                booking.paymentMethod
            ] || "Card payment";

        const bookedDate =
            booking.bookedAt
                ? new Date(
                      booking.bookedAt
                  ).toLocaleString(
                      "en-NG",
                      {
                          dateStyle: "medium",
                          timeStyle: "short"
                      }
                  )
                : "";

        const reference =
            booking.reference ||
            `TE-${Number(booking.id)
                .toString(36)
                .toUpperCase()}`;

        const fieldStyle =
            "min-width:0;";

        const fieldLabelStyle =
            "font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#98a2b3;";

        const fieldValueStyle =
            "font-size:14px;font-weight:700;color:#172033;margin-top:4px;word-break:break-word;";

        const sideLabelStyle =
            "font-size:10px;font-weight:800;letter-spacing:1.5px;color:rgba(255,255,255,.55);";

        const sideValueStyle =
            "font-size:19px;font-weight:800;color:#ffffff;margin:5px 0 22px;word-break:break-word;";

        const fields = [
            [
                "Pickup location",
                booking.location ||
                    ""
            ],
            [
                "Duration",
                `${booking.days} day${
                    booking.days === 1
                        ? ""
                        : "s"
                }`
            ],
            [
                "Daily rate",
                naira(
                    booking.price ||
                        0
                )
            ],
            [
                "Payment method",
                methodLabel
            ]
        ];

        /* All styling below is written inline (not via car.css
           classes) on purpose — html2canvas has to read every
           style straight off the element it is capturing, and an
           off-screen element can't reliably pull in rules from an
           external stylesheet. Inline styles remove that risk. */
        const wrapper =
            document.createElement(
                "div"
            );

        wrapper.setAttribute(
            "style",
            "position:fixed;top:0;left:-9999px;width:640px;" +
                "font-family:'Segoe UI',Arial,sans-serif;" +
                "background:#ffffff;border-radius:18px;overflow:hidden;" +
                "display:flex;"
        );

        wrapper.innerHTML = `
            <div style="flex:0 0 62%;padding:34px 30px;box-sizing:border-box;">

                <div style="${fieldLabelStyle}">
                    TRAVELEASE · CAR RENTAL
                </div>

                <h1 style="font-size:23px;color:#172033;margin:8px 0 3px;font-weight:800;">
                    ${escapeHTML(
                        booking.title ||
                            ""
                    )}
                </h1>

                <div style="font-size:12px;color:#667085;">
                    Booking receipt
                </div>

                <div style="height:1px;background:#e1e6ef;margin:18px 0;"></div>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">
                    ${fields
                        .map(
                            ([
                                label,
                                value
                            ]) => `
                                <div style="${fieldStyle}">
                                    <div style="${fieldLabelStyle}">
                                        ${escapeHTML(
                                            label
                                        )}
                                    </div>
                                    <div style="${fieldValueStyle}">
                                        ${escapeHTML(
                                            value
                                        )}
                                    </div>
                                </div>
                            `
                        )
                        .join("")}
                </div>

                <div style="margin-top:24px;font-size:11px;color:#98a2b3;font-style:italic;">
                    Show this receipt as proof of your TravelEase booking.
                </div>

            </div>

            <div style="flex:0 0 38%;background:#172033;color:#ffffff;padding:34px 26px;box-sizing:border-box;">

                <div style="${sideLabelStyle}">
                    BOOKING REFERENCE
                </div>
                <div style="${sideValueStyle}">
                    ${escapeHTML(
                        reference
                    )}
                </div>

                <div style="${sideLabelStyle}">
                    TOTAL PAID
                </div>
                <div style="font-size:25px;font-weight:800;color:#ffffff;margin:5px 0 22px;">
                    ${naira(
                        booking.total ||
                            0
                    )}
                </div>

                <div style="${sideLabelStyle}">
                    DATE BOOKED
                </div>
                <div style="font-size:13px;color:#ffffff;margin:5px 0 26px;">
                    ${escapeHTML(
                        bookedDate
                    )}
                </div>

                <div style="display:flex;align-items:center;gap:7px;font-size:11px;font-weight:800;color:#4ade80;letter-spacing:.5px;">
                    <span style="width:7px;height:7px;border-radius:50%;background:#4ade80;display:inline-block;"></span>
                    ${escapeHTML(
                        (
                            booking.status ||
                            "Paid"
                        ).toUpperCase()
                    )}
                </div>

            </div>
        `;

        document.body.appendChild(
            wrapper
        );

        html2canvas(wrapper, {
            scale: 2,
            backgroundColor:
                "#ffffff"
        })
            .then((canvas) => {
                const link =
                    document.createElement(
                        "a"
                    );

                link.download =
                    `TravelEase-Receipt-${reference}.png`;

                link.href =
                    canvas.toDataURL(
                        "image/png"
                    );

                document.body.appendChild(
                    link
                );

                link.click();

                link.remove();

                wrapper.remove();
            })
            .catch(() => {
                wrapper.remove();

                showNotification(
                    "Couldn't generate the receipt image. Please try again."
                );
            });
    }

    /* =========================================================
       CONFIRMATION MODAL
       ========================================================= */

    function showConfirmationModal(
        booking
    ) {
        removeExistingPopup();

        const summary =
            `${booking.days} day${
                booking.days ===
                1
                    ? ""
                    : "s"
            } · ${
                booking.location
            }`;

        const modal =
            document.createElement(
                "div"
            );

        modal.className =
            "modal-overlay dynamic-modal";

        modal.innerHTML = `
            <div class="deal-modal">

                <button
                    class="modal-close"
                    type="button"
                    aria-label="Close">
                    &times;
                </button>

                <div
                    class="confirmation-icon">
                    <i
                        class="fa-solid fa-check">
                    </i>
                </div>

                <span class="section-kicker">
                    BOOKING CONFIRMED
                </span>

                <h2>
                    Your reservation is confirmed
                </h2>

                <p
                    class="deal-summary"
                    style="text-align:center;">
                    ${escapeHTML(
                        summary
                    )}
                </p>

                <div
                    class="deal-price-box">

                    <span>
                        Total paid ·
                        ${escapeHTML(
                            PAYMENT_METHOD_LABELS[
                                booking.paymentMethod
                            ] ||
                                "Card payment"
                        )}
                    </span>

                    <strong>
                        ${naira(
                            booking.total
                        )}
                    </strong>

                </div>

                <button
                    type="button"
                    class="receipt-btn"
                    id="confirmReceiptBtn">
                    <i class="fa-solid fa-download"></i>
                    Download receipt
                </button>

                <div
                    class="deal-actions">

                    <button
                        type="button"
                        class="deal-cancel-btn"
                        id="confirmDoneBtn">
                        Done
                    </button>

                    <button
                        type="button"
                        class="deal-reserve-btn"
                        id="confirmViewBtn">
                        View bookings
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(
            modal
        );

        wireModalDismiss(modal);

        modal
            .querySelector(
                "#confirmReceiptBtn"
            )
            ?.addEventListener(
                "click",
                () =>
                    downloadReceipt(
                        booking
                    )
            );

        modal
            .querySelector(
                "#confirmDoneBtn"
            )
            ?.addEventListener(
                "click",
                () => {
                    modal.remove();
                }
            );

        modal
            .querySelector(
                "#confirmViewBtn"
            )
            ?.addEventListener(
                "click",
                () => {
                    modal.remove();

                    showBookingsModal();
                }
            );
    }

    /* =========================================================
       MY BOOKINGS MODAL
       ========================================================= */

    function iconForBooking(
        booking
    ) {
        const title =
            booking.title ||
            "";

        if (
            title.includes(
                "Luxury"
            )
        ) {
            return "fa-gem";
        }

        if (
            title.includes(
                "Van"
            )
        ) {
            return "fa-van-shuttle";
        }

        if (
            title.includes(
                "Electric"
            )
        ) {
            return "fa-bolt";
        }

        return "fa-car";
    }

    function gradientForBooking(
        booking
    ) {
        const title =
            booking.title ||
            "";

        if (
            title.includes(
                "Luxury"
            )
        ) {
            return "linear-gradient(135deg,#111827,#4b5563)";
        }

        if (
            title.includes(
                "Electric"
            )
        ) {
            return "linear-gradient(135deg,#047857,#10b981)";
        }

        return "linear-gradient(135deg,#1669ed,#60a5fa)";
    }

    function showBookingsModal() {
        removeExistingPopup();

        const bookings =
            getBookings().sort(
                (a, b) =>
                    new Date(
                        b.bookedAt
                    ) -
                    new Date(
                        a.bookedAt
                    )
            );

        const listHtml =
            bookings.length
                ? bookings
                      .map(
                          (booking) => `
                            <div
                                class="booking-item"
                                data-id="${booking.id}">

                                <div
                                    class="booking-icon"
                                    style="
                                        background:${gradientForBooking(
                                            booking
                                        )}
                                    ">

                                    <i
                                        class="fa-solid ${iconForBooking(
                                            booking
                                        )}">
                                    </i>

                                </div>

                                <div
                                    class="booking-info">

                                    <div
                                        class="booking-title">
                                        ${escapeHTML(
                                            booking.title ||
                                                "Booking"
                                        )}
                                    </div>

                                    <div
                                        class="booking-meta">

                                        ${
                                            booking.subtitle
                                                ? escapeHTML(
                                                      booking.subtitle
                                                  ) +
                                                  " · "
                                                : ""
                                        }

                                        ${
                                            booking.days
                                                ? booking.days +
                                                  " day" +
                                                  (booking.days ===
                                                  1
                                                      ? ""
                                                      : "s") +
                                                  " · "
                                                : ""
                                        }

                                        ${escapeHTML(
                                            booking.location ||
                                                ""
                                        )}

                                        ·

                                        ${naira(
                                            booking.total ||
                                                0
                                        )}

                                    </div>

                                </div>

                                <div
                                    class="booking-actions">

                                    <button
                                        class="booking-receipt-btn"
                                        type="button">
                                        Receipt
                                    </button>

                                    <button
                                        class="booking-cancel"
                                        type="button">
                                        Cancel
                                    </button>

                                </div>

                            </div>
                        `
                      )
                      .join("")
                : `
                    <div
                        class="bookings-empty">

                        <i
                            class="fa-solid fa-calendar-xmark">
                        </i>

                        <p>
                            No bookings yet.
                            Reserve a car to see it here.
                        </p>

                    </div>
                `;

        const modal =
            document.createElement(
                "div"
            );

        modal.className =
            "modal-overlay dynamic-modal";

        modal.innerHTML = `
            <div class="bookings-modal">

                <button
                    class="modal-close"
                    type="button"
                    aria-label="Close">
                    &times;
                </button>

                <span class="section-kicker">
                    TRAVELEASE
                </span>

                <h2>
                    My bookings
                </h2>

                ${listHtml}

            </div>
        `;

        document.body.appendChild(
            modal
        );

        wireModalDismiss(modal);

        modal
            .querySelectorAll(
                ".booking-receipt-btn"
            )
            .forEach((button) => {
                button.addEventListener(
                    "click",
                    () => {
                        const item =
                            button.closest(
                                ".booking-item"
                            );

                        const id =
                            Number(
                                item?.dataset
                                    .id
                            );

                        const booking =
                            getBookings().find(
                                (entry) =>
                                    entry.id ===
                                    id
                            );

                        if (booking) {
                            downloadReceipt(
                                booking
                            );
                        }
                    }
                );
            });

        modal
            .querySelectorAll(
                ".booking-cancel"
            )
            .forEach((button) => {
                button.addEventListener(
                    "click",
                    () => {
                        const item =
                            button.closest(
                                ".booking-item"
                            );

                        const id =
                            Number(
                                item?.dataset
                                    .id
                            );

                        saveBookings(
                            getBookings().filter(
                                (booking) =>
                                    booking.id !==
                                    id
                            )
                        );

                        modal.remove();

                        showBookingsModal();

                        showNotification(
                            "Booking cancelled."
                        );
                    }
                );
            });
    }

    /* =========================================================
       MY BOOKINGS BUTTON
       ========================================================= */

    bookingsBtn?.addEventListener(
        "click",
        () => {
            const user =
                getCurrentUser();

            if (!user) {
                showNotification(
                    "Please sign in to view your bookings."
                );

                showLoginModal();

                return;
            }

            showBookingsModal();
        }
    );

    /* =========================================================
       PROMO
       ========================================================= */

    promoClaimBtn?.addEventListener(
        "click",
        () => {
            if (
                promoClaimBtn.dataset
                    .claimed ===
                "true"
            ) {
                return;
            }

            promoClaimBtn.dataset.claimed =
                "true";

            promoClaimBtn.textContent =
                "Claimed";

            showNotification(
                "Your 8% new-user offer has been claimed."
            );
        }
    );

    /* =========================================================
       RESTORE LOGGED-IN USER
       ========================================================= */

    function restoreLoggedInUser() {
        const user =
            getCurrentUser();

        if (user?.loggedIn) {
            updateLoginButton(
                user
            );
        } else {
            updateLoginButton(
                null
            );
        }
    }

    /* =========================================================
       PREFILL FROM TRIPCO SEARCH
       (e.g. car.html?city=Lagos, sent by the TravelEase hub)
       ========================================================= */

    function prefillCityFromQuery() {
        const params = new URLSearchParams(window.location.search);
        const cityParam = params.get("city");

        if (!cityParam) return;

        const locationDropdown =
            document.getElementById("locationDropdown");

        if (!locationDropdown) return;

        const options = locationDropdown.querySelectorAll(
            ".custom-dropdown-menu button"
        );

        const normalized = cityParam.trim().toLowerCase();

        let matchedOption = null;

        options.forEach((option) => {
            const value = (option.dataset.value || "").toLowerCase();

            if (
                !matchedOption &&
                (value === normalized || value.includes(normalized))
            ) {
                matchedOption = option;
            }
        });

        if (window.TELoader) {
            window.TELoader.show(`Finding cars in ${cityParam}...`);
        }

        if (matchedOption) {
            /* Simulate picking the option, same as a real click */
            matchedOption.click();
        } else if (locationInput) {
            /* No exact match in the list — still show what was typed */
            locationInput.value = cityParam;

            const text = locationDropdown.querySelector(
                ".custom-dropdown-text"
            );

            if (text) text.textContent = cityParam;
        }

        /* Trigger the same search flow as a manual click
           (it already scrolls to the results grid when done) */
        searchBtn?.click();

        if (window.TELoader) {
            window.setTimeout(() => {
                window.TELoader.hide();
            }, 950);
        }
    }

    /* =========================================================
       INITIALIZE
       ========================================================= */

    restoreLoggedInUser();
    prefillCityFromQuery();

    /* Hide X when page first loads */
    if (closeMenu) {
        closeMenu.style.display =
            "none";
    }

    /* Make sure mobile menu starts closed */
    if (navMenu) {
        navMenu.classList.remove(
            "active"
        );
    }

    if (backdrop) {
        backdrop.classList.remove(
            "active"
        );
    }

    if (menuButton) {
        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }
});
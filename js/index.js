document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       ELEMENTS
       ========================================================= */

    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");
    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");
    const backdrop = document.getElementById("backdrop");

    const signInButton =
        document.getElementById("sign-in-button");

    const fromCity =
        document.getElementById("from-city");

    const toCity =
        document.getElementById("to-city");

    const fromField =
        document.getElementById("from-field");

    const toField =
        document.getElementById("to-field");

    const fromCityBtn =
        document.getElementById("from-city-btn");

    const toCityBtn =
        document.getElementById("to-city-btn");

    const fromCityText =
        document.getElementById("from-city-text");

    const toCityText =
        document.getElementById("to-city-text");

    const fromCityDropdown =
        document.getElementById("from-city-dropdown");

    const toCityDropdown =
        document.getElementById("to-city-dropdown");

    const swapButton =
        document.getElementById("swap-btn");

    const travelDate =
        document.getElementById("travel-date");

    const searchButton =
        document.getElementById("search-flights");

    const tableSection =
        document.getElementById("flights-table-section");

    const routeInfo =
        document.getElementById("route-info");

    const paxWrapper =
        document.getElementById("pax-wrapper");

    const paxDisplay =
        document.getElementById("pax-display");

    const paxDropdown =
        document.getElementById("pax-dropdown");

    const paxAdults =
        document.getElementById("pax-adults");

    const paxChildren =
        document.getElementById("pax-children");

    const paxClass =
        document.getElementById("pax-class");

    const paxDone =
        document.getElementById("pax-done");

    const tripTypeRadios =
        document.querySelectorAll('input[name="tripType"]');

    const departureDateLabel =
        document.getElementById("departure-date-label");

    const returnDateField =
        document.getElementById("return-date-field");

    const returnDateInput =
        document.getElementById("return-date");

    const multiCityLegs =
        document.getElementById("multi-city-legs");

    const addFlightBtn =
        document.getElementById("add-flight-btn");

    const directFlightCheckbox =
        document.getElementById("directFlight");


    /* =========================================================
       NIGERIAN STATES
       ========================================================= */

    const domesticAirports = {

        "Abia": {
            airport: "Akanu Ibiam International Airport",
            code: "ENU"
        },

        "Adamawa": {
            airport: "Yola Airport",
            code: "YOL"
        },

        "Akwa Ibom": {
            airport: "Victor Attah International Airport",
            code: "QUO"
        },

        "Anambra": {
            airport: "Chinua Achebe International Airport",
            code: "ENU"
        },

        "Bauchi": {
            airport: "Bauchi State Airport",
            code: "BCU"
        },

        "Bayelsa": {
            airport: "Bayelsa International Airport",
            code: "OSP"
        },

        "Benue": {
            airport: "Makurdi Airport",
            code: "MDI"
        },

        "Borno": {
            airport: "Maiduguri International Airport",
            code: "MIU"
        },

        "Cross River": {
            airport: "Margaret Ekpo International Airport",
            code: "CBQ"
        },

        "Delta": {
            airport: "Asaba International Airport",
            code: "ABB"
        },

        "Ebonyi": {
            airport: "Ebonyi Airport",
            code: "QEB"
        },

        "Edo": {
            airport: "Benin Airport",
            code: "BNI"
        },

        "Ekiti": {
            airport: "Ekiti Airport",
            code: "EKI"
        },

        "Enugu": {
            airport: "Akanu Ibiam International Airport",
            code: "ENU"
        },

        "Gombe": {
            airport: "Gombe Lawanti International Airport",
            code: "GMO"
        },

        "Imo": {
            airport: "Sam Mbakwe International Airport",
            code: "QOW"
        },

        "Jigawa": {
            airport: "Hadejia Airport",
            code: "HAJ"
        },

        "Kaduna": {
            airport: "Kaduna International Airport",
            code: "KAD"
        },

        "Kano": {
            airport: "Mallam Aminu Kano International Airport",
            code: "KAN"
        },

        "Katsina": {
            airport: "Katsina Airport",
            code: "DKA"
        },

        "Kebbi": {
            airport: "Sokoto Airport",
            code: "SKO"
        },

        "Kogi": {
            airport: "Kogi Airport",
            code: "QGY"
        },

        "Kwara": {
            airport: "Ilorin International Airport",
            code: "ILR"
        },

        "Lagos": {
            airport: "Murtala Muhammed International Airport",
            code: "LOS"
        },

        "Nasarawa": {
            airport: "Nasarawa Airport",
            code: "QQA"
        },

        "Niger": {
            airport: "Minna Airport",
            code: "MXJ"
        },

        "Ogun": {
            airport: "Gateway International Airport",
            code: "QAT"
        },

        "Ondo": {
            airport: "Akure Airport",
            code: "AKR"
        },

        "Osun": {
            airport: "Osun Airport",
            code: "QOS"
        },

        "Oyo": {
            airport: "Ibadan Airport",
            code: "IBA"
        },

        "Plateau": {
            airport: "Yakubu Gowon Airport",
            code: "JOS"
        },

        "Rivers": {
            airport: "Port Harcourt International Airport",
            code: "PHC"
        },

        "Sokoto": {
            airport: "Sadiq Abubakar III International Airport",
            code: "SKO"
        },

        "Taraba": {
            airport: "Jalingo Airport",
            code: "JAL"
        },

        "Yobe": {
            airport: "Nguru Airport",
            code: "NGU"
        },

        "Zamfara": {
            airport: "Gusau Airport",
            code: "QUS"
        },

        "FCT Abuja": {
            airport: "Nnamdi Azikiwe International Airport",
            code: "ABV"
        }

    };


    /* =========================================================
       INTERNATIONAL DESTINATIONS
       ========================================================= */

    const internationalAirports = {

        "London, United Kingdom": {
            airport: "Heathrow Airport",
            code: "LHR"
        },

        "Dubai, UAE": {
            airport: "Dubai International Airport",
            code: "DXB"
        },

        "Doha, Qatar": {
            airport: "Hamad International Airport",
            code: "DOH"
        },

        "Istanbul, Turkey": {
            airport: "Istanbul Airport",
            code: "IST"
        },

        "Accra, Ghana": {
            airport: "Kotoka International Airport",
            code: "ACC"
        },

        "Johannesburg, South Africa": {
            airport: "O.R. Tambo International Airport",
            code: "JNB"
        },

        "Nairobi, Kenya": {
            airport: "Jomo Kenyatta International Airport",
            code: "NBO"
        },

        "Addis Ababa, Ethiopia": {
            airport: "Bole International Airport",
            code: "ADD"
        },

        "Paris, France": {
            airport: "Charles de Gaulle Airport",
            code: "CDG"
        },

        "Amsterdam, Netherlands": {
            airport: "Amsterdam Airport Schiphol",
            code: "AMS"
        },

        "New York, USA": {
            airport: "John F. Kennedy International Airport",
            code: "JFK"
        },

        "Atlanta, USA": {
            airport: "Hartsfield-Jackson Atlanta International Airport",
            code: "ATL"
        }

    };


    /* ALL DESTINATIONS (used for lookups) */

    const airports = {
        ...domesticAirports,
        ...internationalAirports
    };


    /* =========================================================
       LOAD STATES
       ========================================================= */

    function loadStates() {

        if (!fromCity || !toCity) return;

        fromCity.innerHTML = "";
        toCity.innerHTML = "";

        if (fromCityDropdown) fromCityDropdown.innerHTML = "";
        if (toCityDropdown) toCityDropdown.innerHTML = "";


        /* FROM PLACEHOLDER */

        const fromPlaceholder =
            document.createElement("option");

        fromPlaceholder.value = "";

        fromPlaceholder.textContent =
            "Select departure state";

        fromPlaceholder.disabled = true;

        fromPlaceholder.selected = true;

        fromCity.appendChild(fromPlaceholder);


        /* TO PLACEHOLDER */

        const toPlaceholder =
            document.createElement("option");

        toPlaceholder.value = "";

        toPlaceholder.textContent =
            "Select destination state";

        toPlaceholder.disabled = true;

        toPlaceholder.selected = true;

        toCity.appendChild(toPlaceholder);


        /* STATES (hidden native <select> — holds the real value) */

        const domesticGroupFrom =
            document.createElement("optgroup");

        domesticGroupFrom.label = "Nigeria";

        const internationalGroupFrom =
            document.createElement("optgroup");

        internationalGroupFrom.label = "International";

        const domesticGroupTo =
            document.createElement("optgroup");

        domesticGroupTo.label = "Nigeria";

        const internationalGroupTo =
            document.createElement("optgroup");

        internationalGroupTo.label = "International";


        function buildOption(state, data) {

            const option =
                document.createElement("option");

            option.value = state;

            option.textContent =
                `${state} — ${data.code}`;

            return option;

        }


        Object.keys(domesticAirports).forEach(
            function (state) {

                const data =
                    domesticAirports[state];

                domesticGroupFrom.appendChild(
                    buildOption(state, data)
                );

                domesticGroupTo.appendChild(
                    buildOption(state, data)
                );

            }
        );

        Object.keys(internationalAirports).forEach(
            function (state) {

                const data =
                    internationalAirports[state];

                internationalGroupFrom.appendChild(
                    buildOption(state, data)
                );

                internationalGroupTo.appendChild(
                    buildOption(state, data)
                );

            }
        );

        fromCity.appendChild(domesticGroupFrom);
        fromCity.appendChild(internationalGroupFrom);

        toCity.appendChild(domesticGroupTo);
        toCity.appendChild(internationalGroupTo);


        /* CUSTOM DROPDOWN PANELS (what the user actually sees/clicks) */

        buildCustomLocationDropdown(
            fromCityDropdown,
            fromCity,
            fromCityText,
            fromCityBtn
        );

        buildCustomLocationDropdown(
            toCityDropdown,
            toCity,
            toCityText,
            toCityBtn
        );

    }


    function buildCustomLocationDropdown(dropdownEl, selectEl, textEl, btnEl) {

        if (!dropdownEl) return;

        dropdownEl.innerHTML = "";

        const groups = [
            { label: "Nigeria", data: domesticAirports },
            { label: "International", data: internationalAirports }
        ];

        groups.forEach(function (group) {

            const groupLabel =
                document.createElement("div");

            groupLabel.className =
                "location-optgroup-label";

            groupLabel.textContent =
                group.label;

            dropdownEl.appendChild(groupLabel);

            Object.keys(group.data).forEach(
                function (state) {

                    const data =
                        group.data[state];

                    const option =
                        document.createElement("button");

                    option.type = "button";

                    option.className =
                        "location-option";

                    option.setAttribute(
                        "role",
                        "option"
                    );

                    option.dataset.value = state;

                    option.textContent =
                        `${state} — ${data.code}`;

                    option.addEventListener(
                        "click",
                        function () {

                            selectEl.value = state;

                            textEl.textContent =
                                option.textContent;

                            dropdownEl
                                .querySelectorAll(
                                    ".location-option.selected"
                                )
                                .forEach(function (el) {
                                    el.classList.remove(
                                        "selected"
                                    );
                                });

                            option.classList.add(
                                "selected"
                            );

                            closeLocationDropdown(
                                dropdownEl,
                                btnEl
                            );

                        }
                    );

                    dropdownEl.appendChild(option);

                }
            );

        });

    }


    function openLocationDropdown(dropdownEl, wrapperEl, btnEl) {

        closeAllFloatingPanels();

        dropdownEl.classList.add("open");

        if (btnEl) {
            btnEl.setAttribute("aria-expanded", "true");
        }

        positionFloatingPanel(wrapperEl, dropdownEl);

    }


    function closeLocationDropdown(dropdownEl, btnEl) {

        dropdownEl.classList.remove("open");

        if (btnEl) {
            btnEl.setAttribute("aria-expanded", "false");
        }

    }


    function closeAllFloatingPanels() {

        document
            .querySelectorAll(
                ".location-dropdown.open, .pax-dropdown.open"
            )
            .forEach(function (panel) {

                panel.classList.remove("open");

            });

        document
            .querySelectorAll('[aria-expanded="true"]')
            .forEach(function (btn) {

                btn.setAttribute("aria-expanded", "false");

            });

    }


    if (fromCityBtn) {

        fromCityBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const isOpen =
                    fromCityDropdown.classList.contains(
                        "open"
                    );

                if (isOpen) {
                    closeLocationDropdown(
                        fromCityDropdown,
                        fromCityBtn
                    );
                } else {
                    openLocationDropdown(
                        fromCityDropdown,
                        fromField,
                        fromCityBtn
                    );
                }

            }
        );

    }


    if (toCityBtn) {

        toCityBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const isOpen =
                    toCityDropdown.classList.contains(
                        "open"
                    );

                if (isOpen) {
                    closeLocationDropdown(
                        toCityDropdown,
                        toCityBtn
                    );
                } else {
                    openLocationDropdown(
                        toCityDropdown,
                        toField,
                        toCityBtn
                    );
                }

            }
        );

    }


    document.addEventListener(
        "click",
        function (event) {

            document
                .querySelectorAll(".location-field")
                .forEach(function (fieldEl) {

                    if (fieldEl.contains(event.target)) return;

                    const dropdownEl =
                        fieldEl.querySelector(".location-dropdown");

                    const btnEl =
                        fieldEl.querySelector(".location-select-btn");

                    if (dropdownEl) {
                        closeLocationDropdown(dropdownEl, btnEl);
                    }

                });

        }
    );


    loadStates();


    /* =========================================================
       PREFILL DESTINATION FROM QUERY STRING
       (used by the "Explore" buttons on the attractions page,
       e.g. index.html?to=Lagos)
       ========================================================= */

    function selectLocationOption(dropdownEl, state) {

        if (!dropdownEl || !state) return false;

        const option = Array.from(
            dropdownEl.querySelectorAll(".location-option")
        ).find(function (item) {
            return item.dataset.value === state;
        });

        if (!option) return false;

        option.click();

        return true;

    }

    function prefillDestinationFromQuery() {

        if (!toCity || !toCityText || !toCityDropdown) return;

        const params = new URLSearchParams(window.location.search);
        const toParam = params.get("to");

        if (!toParam) return;

        const matchedState = Object.keys(airports).find(
            function (state) {
                return state.toLowerCase() === toParam.toLowerCase();
            }
        );

        if (!matchedState) return;

        /* ---- small helpers (local dates, so no timezone surprises) ---- */

        function toISO(date) {
            const yyyy = date.getFullYear();
            const mm = String(date.getMonth() + 1).padStart(2, "0");
            const dd = String(date.getDate()).padStart(2, "0");
            return `${yyyy}-${mm}-${dd}`;
        }

        function isISODate(value) {
            return /^\d{4}-\d{2}-\d{2}$/.test(value || "") &&
                !isNaN(new Date(value + "T00:00:00"));
        }

        function shortDate(value) {
            return new Date(value + "T00:00:00").toLocaleDateString(
                "en-US",
                { month: "short", day: "numeric" }
            );
        }

        function setSelectValue(selectEl, value) {
            if (!selectEl || value === null) return;

            const exists = Array.from(selectEl.options).some(
                function (option) { return option.value === String(value); }
            );

            if (exists) selectEl.value = String(value);
        }

        /* ---- destination ---- */

        const data = airports[matchedState];

        toCity.value = matchedState;
        toCityText.textContent = `${matchedState} — ${data.code}`;

        toCityDropdown
            .querySelectorAll(".location-option")
            .forEach(function (option) {

                option.classList.toggle(
                    "selected",
                    option.dataset.value === matchedState
                );

            });

        /* Departure: ?from= when the hub sent one, otherwise pick a
           sensible default so a full search can still run. */
        const fromParam = params.get("from");

        const matchedFrom = fromParam
            ? Object.keys(airports).find(function (state) {
                return state.toLowerCase() === fromParam.toLowerCase();
            })
            : null;

        if (matchedFrom && matchedFrom !== matchedState) {
            selectLocationOption(fromCityDropdown, matchedFrom);
        }

        if (!fromCity.value) {

            const defaultFrom =
                matchedState === "Lagos" ? "FCT Abuja" : "Lagos";

            selectLocationOption(fromCityDropdown, defaultFrom);

        }

        /* ---- dates: ?depart=YYYY-MM-DD (and optional &return=) ---- */

        const todayISO = toISO(new Date());

        let depart = params.get("depart");

        if (!isISODate(depart) || depart < todayISO) depart = "";

        if (!depart) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            depart = toISO(tomorrow);
        }

        if (travelDate) travelDate.value = depart;

        const returnParam = params.get("return");
        const tripParam = params.get("trip");
        const hasReturn = isISODate(returnParam) && returnParam >= depart;

        let tripType;

        if (tripParam === "multiCity") {
            tripType = "multiCity";
        } else if (tripParam === "oneWay") {
            tripType = "oneWay";
        } else if (tripParam === "roundTrip") {
            tripType = hasReturn ? "roundTrip" : "oneWay";
        } else {
            /* older links (attractions page, etc.) only send ?to= */
            tripType = hasReturn ? "roundTrip" : "oneWay";
        }

        const isRoundTrip = tripType === "roundTrip";

        if (isRoundTrip && returnDateInput) {
            returnDateInput.value = returnParam;
        }

        /* Round trip is the page default; anything else is selected here.
           (The trip-type handler further down reads the checked radio
           once the page finishes setting up.) */
        const tripRadio = document.getElementById(tripType);

        if (tripRadio) tripRadio.checked = true;

        /* ---- passengers: ?adults=2&children=1 ---- */

        setSelectValue(paxAdults, params.get("adults"));
        setSelectValue(paxChildren, params.get("children"));
        setSelectValue(paxClass, params.get("cabin"));

        if (params.get("nonstop") === "1" && directFlightCheckbox) {
            directFlightCheckbox.checked = true;
        }

        updatePassengerDisplay();

        /* ---- loader (shows the trip details, like a real search) ---- */

        if (window.TELoader) {

            const travelers =
                Number(paxAdults ? paxAdults.value : 1) +
                Number(paxChildren ? paxChildren.value : 0);

            window.TELoader.show({
                title: `Searching best flights to ${matchedState}`,
                meta: [
                    isRoundTrip
                        ? `${shortDate(depart)} - ${shortDate(returnParam)}`
                        : shortDate(depart),
                    `${travelers} traveler${travelers === 1 ? "" : "s"}`,
                    paxClass && paxClass.selectedIndex >= 0
                        ? paxClass.options[paxClass.selectedIndex].text.trim()
                        : ""
                ],
                tagline: "Unlock big savings by booking your flights and hotels together"
            });

        }

        window.setTimeout(function () {

            /* multi-city needs the extra legs filled in first, so the
               person finishes that one themselves */
            if (tripType !== "multiCity") {
                searchButton?.click();
            }

            if (window.TELoader) {
                window.setTimeout(function () {
                    window.TELoader.hide();
                }, 600);
            }

        }, 900);

    }

    prefillDestinationFromQuery();


    /* =========================================================
       HAMBURGER MENU
       ========================================================= */

    function openMobileMenu() {

        if (!navMenu) return;

        navMenu.classList.add("active");

        if (backdrop) {
            backdrop.classList.add("active");
        }

        if (openMenu) {
            openMenu.style.display = "none";
        }

        if (closeMenu) {
            closeMenu.style.display = "block";
        }

        document.body.style.overflow = "hidden";
    }


    function closeMobileMenu() {

        if (!navMenu) return;

        navMenu.classList.remove("active");

        if (backdrop) {
            backdrop.classList.remove("active");
        }

        if (openMenu) {
            openMenu.style.display = "block";
        }

        if (closeMenu) {
            closeMenu.style.display = "none";
        }

        document.body.style.overflow = "";
    }


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            function () {

                if (
                    navMenu &&
                    navMenu.classList.contains("active")
                ) {

                    closeMobileMenu();

                } else {

                    openMobileMenu();

                }

            }
        );

    }


    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    /* CLOSE MOBILE MENU WHEN LINK IS CLICKED */

    document.querySelectorAll(".nav-link")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });


    /* =========================================================
       SWAP LOCATIONS
       ========================================================= */

    if (swapButton) {

        swapButton.addEventListener(
            "click",
            function () {

                const temporaryValue =
                    fromCity.value;

                const temporaryText =
                    fromCityText.textContent;

                fromCity.value =
                    toCity.value;

                toCity.value =
                    temporaryValue;

                fromCityText.textContent =
                    toCityText.textContent;

                toCityText.textContent =
                    temporaryText;

                [fromCityDropdown, toCityDropdown].forEach(
                    function (dropdownEl) {

                        if (!dropdownEl) return;

                        dropdownEl
                            .querySelectorAll(".location-option")
                            .forEach(function (option) {

                                option.classList.toggle(
                                    "selected",
                                    option.dataset.value ===
                                        (dropdownEl === fromCityDropdown
                                            ? fromCity.value
                                            : toCity.value)
                                );

                            });

                    }
                );

            }
        );

    }


    /* =========================================================
       PASSENGER DROPDOWN
       ========================================================= */

    if (paxWrapper) {

        paxWrapper.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.closest(
                        ".pax-dropdown"
                    )
                ) {
                    return;
                }

                const willOpen =
                    !paxDropdown.classList.contains(
                        "open"
                    );

                if (willOpen) {
                    closeAllFloatingPanels();
                }

                paxDropdown.classList.toggle("open");

                if (willOpen) {
                    positionFloatingPanel(
                        paxWrapper,
                        paxDropdown
                    );
                }

            }
        );

    }


    function positionFloatingPanel(wrapperEl, panelEl) {

        panelEl.classList.remove(
            "align-right",
            "align-top"
        );

        const wrapperRect =
            wrapperEl.getBoundingClientRect();

        const panelRect =
            panelEl.getBoundingClientRect();

        const margin = 12;

        if (
            wrapperRect.left + panelRect.width >
            window.innerWidth - margin
        ) {
            panelEl.classList.add("align-right");
        }

        if (
            wrapperRect.bottom + panelRect.height + 10 >
            window.innerHeight - margin
        ) {
            panelEl.classList.add("align-top");
        }

    }


    window.addEventListener(
        "resize",
        function () {

            if (
                paxDropdown &&
                paxDropdown.classList.contains("open")
            ) {
                positionFloatingPanel(paxWrapper, paxDropdown);
            }

            if (
                fromCityDropdown &&
                fromCityDropdown.classList.contains("open")
            ) {
                positionFloatingPanel(fromField, fromCityDropdown);
            }

            if (
                toCityDropdown &&
                toCityDropdown.classList.contains("open")
            ) {
                positionFloatingPanel(toField, toCityDropdown);
            }

        }
    );


    if (paxDone) {

        paxDone.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                updatePassengerDisplay();

                paxDropdown.classList.remove("open");

            }
        );

    }


    function updatePassengerDisplay() {

        const adults =
            Number(paxAdults.value);

        const children =
            Number(paxChildren.value);

        const cabin =
            paxClass.value;


        let text =
            `${adults} adult`;

        if (adults !== 1) {
            text =
                `${adults} adults`;
        }


        if (children > 0) {

            text +=
                ` · ${children} child`;

            if (children !== 1) {

                text =
                    `${adults}${adults === 1 ? " adult" : " adults"} · ${children} children`;

            }

        }


        text +=
            ` · ${cabin}`;


        paxDisplay.textContent = text;

    }


    /* CLOSE PAX DROPDOWN OUTSIDE */

    document.addEventListener(
        "click",
        function (event) {

            if (
                paxWrapper &&
                !paxWrapper.contains(event.target)
            ) {

                paxDropdown.classList.remove(
                    "open"
                );

            }

        }
    );


    /* =========================================================
       DATE
       ========================================================= */

    const today =
        new Date().toISOString().split("T")[0];

    if (travelDate) {
        travelDate.min = today;
    }


    /* =========================================================
       TRIP TYPE (round trip / one way / multi city)
       ========================================================= */

    let legCount = 0;

    function getSelectedTripType() {

        const checked =
            document.querySelector(
                'input[name="tripType"]:checked'
            );

        return checked ? checked.value : "roundTrip";

    }


    function populateLegSelect(selectEl, placeholderText) {

        if (!selectEl) return;

        selectEl.innerHTML = "";

        const placeholder =
            document.createElement("option");

        placeholder.value = "";
        placeholder.textContent = placeholderText;
        placeholder.disabled = true;
        placeholder.selected = true;

        selectEl.appendChild(placeholder);

        const domesticGroup =
            document.createElement("optgroup");

        domesticGroup.label = "Nigeria";

        const internationalGroup =
            document.createElement("optgroup");

        internationalGroup.label = "International";

        Object.keys(domesticAirports).forEach(
            function (state) {

                const option =
                    document.createElement("option");

                option.value = state;

                option.textContent =
                    `${state} — ${domesticAirports[state].code}`;

                domesticGroup.appendChild(option);

            }
        );

        Object.keys(internationalAirports).forEach(
            function (state) {

                const option =
                    document.createElement("option");

                option.value = state;

                option.textContent =
                    `${state} — ${internationalAirports[state].code}`;

                internationalGroup.appendChild(option);

            }
        );

        selectEl.appendChild(domesticGroup);
        selectEl.appendChild(internationalGroup);

    }


    function renumberLegs() {

        if (!multiCityLegs) return;

        const rows =
            multiCityLegs.querySelectorAll(".leg-row");

        rows.forEach(function (row, index) {

            const labels =
                row.querySelectorAll(".field-label");

            if (labels[0]) {
                labels[0].textContent =
                    `Flight ${index + 2} · From`;
            }

            if (labels[1]) {
                labels[1].textContent =
                    `Flight ${index + 2} · To`;
            }

        });

    }


    function createLegRow() {

        legCount++;

        const row =
            document.createElement("div");

        row.className = "leg-row";
        row.dataset.legId = String(legCount);

        row.innerHTML = `
            <div class="leg-field location-field leg-from-field">
                <label class="field-label">Flight ${legCount + 1} · From</label>

                <button
                    type="button"
                    class="location-select-btn leg-from-btn"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                >
                    <span class="leg-from-text">Select departure</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>

                <select
                    class="location-select-native leg-from"
                    tabindex="-1"
                    aria-hidden="true"
                ></select>

                <div
                    class="location-dropdown leg-from-dropdown"
                    role="listbox"
                ></div>
            </div>

            <div class="leg-field location-field leg-to-field">
                <label class="field-label">Flight ${legCount + 1} · To</label>

                <button
                    type="button"
                    class="location-select-btn leg-to-btn"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                >
                    <span class="leg-to-text">Select destination</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>

                <select
                    class="location-select-native leg-to"
                    tabindex="-1"
                    aria-hidden="true"
                ></select>

                <div
                    class="location-dropdown leg-to-dropdown"
                    role="listbox"
                ></div>
            </div>

            <div class="leg-field" style="max-width: 170px;">
                <label class="field-label">Date</label>
                <input type="date" class="date-input leg-date">
            </div>

            <button type="button" class="leg-remove" aria-label="Remove flight">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;

        const fromWrapper = row.querySelector(".leg-from-field");
        const fromBtn = row.querySelector(".leg-from-btn");
        const fromText = row.querySelector(".leg-from-text");
        const fromSelect = row.querySelector(".leg-from");
        const fromDropdown = row.querySelector(".leg-from-dropdown");

        const toWrapper = row.querySelector(".leg-to-field");
        const toBtn = row.querySelector(".leg-to-btn");
        const toText = row.querySelector(".leg-to-text");
        const toSelect = row.querySelector(".leg-to");
        const toDropdown = row.querySelector(".leg-to-dropdown");

        const dateInput = row.querySelector(".leg-date");
        const removeBtn = row.querySelector(".leg-remove");

        populateLegSelect(fromSelect, "Select departure");
        populateLegSelect(toSelect, "Select destination");

        buildCustomLocationDropdown(fromDropdown, fromSelect, fromText, fromBtn);
        buildCustomLocationDropdown(toDropdown, toSelect, toText, toBtn);

        fromBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const isOpen =
                    fromDropdown.classList.contains("open");

                if (isOpen) {
                    closeLocationDropdown(fromDropdown, fromBtn);
                } else {
                    openLocationDropdown(fromDropdown, fromWrapper, fromBtn);
                }

            }
        );

        toBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const isOpen =
                    toDropdown.classList.contains("open");

                if (isOpen) {
                    closeLocationDropdown(toDropdown, toBtn);
                } else {
                    openLocationDropdown(toDropdown, toWrapper, toBtn);
                }

            }
        );

        dateInput.min = today;

        removeBtn.addEventListener(
            "click",
            function () {

                row.remove();

                renumberLegs();

            }
        );

        return row;

    }


    if (addFlightBtn && multiCityLegs) {

        addFlightBtn.addEventListener(
            "click",
            function () {

                const legRowCount =
                    multiCityLegs.querySelectorAll(".leg-row").length;

                if (legRowCount >= 3) {

                    showNotification(
                        "You can add up to 3 extra flights."
                    );

                    return;

                }

                multiCityLegs.appendChild(
                    createLegRow()
                );

                renumberLegs();

            }
        );

    }


    function applyTripType(type) {

        if (type === "roundTrip") {

            if (returnDateField) {
                returnDateField.classList.add("open");
            }

            if (multiCityLegs) {
                multiCityLegs.classList.remove("open");
            }

            if (addFlightBtn) {
                addFlightBtn.classList.remove("open");
            }

            if (departureDateLabel) {
                departureDateLabel.textContent = "Departure";
            }

        } else if (type === "oneWay") {

            if (returnDateField) {
                returnDateField.classList.remove("open");
            }

            if (returnDateInput) {
                returnDateInput.value = "";
            }

            if (multiCityLegs) {
                multiCityLegs.classList.remove("open");
            }

            if (addFlightBtn) {
                addFlightBtn.classList.remove("open");
            }

            if (departureDateLabel) {
                departureDateLabel.textContent = "Date";
            }

        } else if (type === "multiCity") {

            if (returnDateField) {
                returnDateField.classList.remove("open");
            }

            if (returnDateInput) {
                returnDateInput.value = "";
            }

            if (addFlightBtn) {
                addFlightBtn.classList.add("open");
            }

            if (multiCityLegs) {

                multiCityLegs.classList.add("open");

                if (multiCityLegs.children.length === 0) {

                    multiCityLegs.appendChild(
                        createLegRow()
                    );

                    renumberLegs();

                }

            }

            if (departureDateLabel) {
                departureDateLabel.textContent = "Flight 1 · Departure";
            }

        }

    }


    tripTypeRadios.forEach(function (radio) {

        radio.addEventListener(
            "change",
            function () {

                if (!radio.checked) return;

                applyTripType(radio.value);

            }
        );

    });


    applyTripType(
        getSelectedTripType()
    );


    /* =========================================================
       SEARCH FLIGHTS
       ========================================================= */

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            function () {

                const from =
                    fromCity.value;

                const to =
                    toCity.value;

                const date =
                    travelDate.value;


                if (!from) {

                    showNotification(
                        "Please select your departure state."
                    );

                    return;

                }


                if (!to) {

                    showNotification(
                        "Please select your destination state."
                    );

                    return;

                }


                if (from === to) {

                    showNotification(
                        "Departure and destination cannot be the same."
                    );

                    return;

                }


                if (!date) {

                    showNotification(
                        "Please select your travel date."
                    );

                    return;

                }


                const selectedDate =
                    new Date(date);

                const currentDate =
                    new Date();

                currentDate.setHours(
                    0, 0, 0, 0
                );


                if (selectedDate < currentDate) {

                    showNotification(
                        "Please select a future travel date."
                    );

                    return;

                }


                const fromData =
                    airports[from];

                const toData =
                    airports[to];

                const tripType =
                    getSelectedTripType();

                let routeMessage =
                    `${from} (${fromData.code}) → ${to} (${toData.code}) · ${date}`;


                if (tripType === "roundTrip") {

                    const returnDate =
                        returnDateInput ? returnDateInput.value : "";

                    if (!returnDate) {

                        showNotification(
                            "Please select your return date."
                        );

                        return;

                    }

                    if (new Date(returnDate) < selectedDate) {

                        showNotification(
                            "Return date must be after your departure date."
                        );

                        return;

                    }

                    routeMessage =
                        `${from} (${fromData.code}) ⇄ ${to} (${toData.code}) · ${date} – ${returnDate} · Round trip`;

                } else if (tripType === "oneWay") {

                    routeMessage =
                        `${from} (${fromData.code}) → ${to} (${toData.code}) · ${date} · One way`;

                } else if (tripType === "multiCity") {

                    const legRows =
                        multiCityLegs ?
                            Array.from(multiCityLegs.querySelectorAll(".leg-row")) :
                            [];

                    const legSummaries = [
                        `${from} (${fromData.code}) → ${to} (${toData.code})`
                    ];

                    for (let i = 0; i < legRows.length; i++) {

                        const legFrom =
                            legRows[i].querySelector(".leg-from").value;

                        const legTo =
                            legRows[i].querySelector(".leg-to").value;

                        const legDate =
                            legRows[i].querySelector(".leg-date").value;

                        if (!legFrom || !legTo || !legDate) {

                            showNotification(
                                `Please complete all fields for Flight ${i + 2}.`
                            );

                            return;

                        }

                        if (legFrom === legTo) {

                            showNotification(
                                `Flight ${i + 2} cannot depart from and arrive at the same place.`
                            );

                            return;

                        }

                        const legAirportFrom =
                            airports[legFrom];

                        const legAirportTo =
                            airports[legTo];

                        legSummaries.push(
                            `${legFrom} (${legAirportFrom.code}) → ${legTo} (${legAirportTo.code})`
                        );

                    }

                    routeMessage =
                        `${legSummaries.join("  ·  ")} · Multi-city (${legRows.length + 1} flights)`;

                }


                routeInfo.textContent =
                    routeMessage;


                tableSection.style.display =
                    "block";


                filterFlights();


                tableSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    }


    /* =========================================================
       FILTER FLIGHTS BY CABIN
       ========================================================= */

    function filterFlights() {

        const selectedClass =
            paxClass.value;

        const nonstopOnly =
            directFlightCheckbox ?
                directFlightCheckbox.checked :
                false;

        const flightRows =
            document.querySelectorAll(
                ".flight-row"
            );

        const noResultsRow =
            document.getElementById(
                "no-results-row"
            );

        let visibleFlights = 0;


        flightRows.forEach(
            function (row) {

                const cellClass =
                    row.querySelector(
                        ".cell-class"
                    );

                if (!cellClass) return;


                const flightClass =
                    cellClass.textContent.trim();

                const stops =
                    Number(row.dataset.stops || 0);

                const matchesClass =
                    selectedClass === flightClass;

                const matchesStops =
                    !nonstopOnly || stops === 0;


                if (
                    matchesClass &&
                    matchesStops
                ) {

                    row.style.display =
                        "";

                    visibleFlights++;

                } else {

                    row.style.display =
                        "none";

                }

            }
        );


        if (visibleFlights === 0) {

            noResultsRow.style.display =
                "";

            const noResultsCell =
                noResultsRow.querySelector(
                    ".no-results-cell"
                );

            if (noResultsCell) {

                noResultsCell.textContent =
                    nonstopOnly ?
                        "No nonstop flights available for the selected cabin class." :
                        "No flights available for the selected cabin class.";

            }

        } else {

            noResultsRow.style.display =
                "none";

        }

    }


    if (directFlightCheckbox) {

        directFlightCheckbox.addEventListener(
            "change",
            function () {

                if (
                    tableSection &&
                    tableSection.style.display === "block"
                ) {

                    filterFlights();

                }

            }
        );

    }


    /* =========================================================
       BOOK BUTTONS
       ========================================================= */

    document.querySelectorAll(".btn-book")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const userData =
                        localStorage.getItem(
                            "travelEaseUser"
                        ) ||
                        sessionStorage.getItem(
                            "travelEaseUser"
                        );


                    if (!userData) {

                        showNotification(
                            "Please sign in or register before booking a flight."
                        );

                        showLoginModal();

                        return;

                    }


                    const row = button.closest("tr");
                    if (!row) return;

                    const cells = row.querySelectorAll("td");

                    const priceText = cells[5]
                        ? cells[5].textContent.trim()
                        : "₦0";

                    const priceNumber =
                        parseInt(priceText.replace(/[^\d]/g, ""), 10) || 0;

                    const fromState = fromCityText
                        ? fromCityText.textContent.trim()
                        : "";

                    const toState = toCityText
                        ? toCityText.textContent.trim()
                        : "";

                    const fromCode =
                        airports[fromState] ? airports[fromState].code : "";

                    const toCode =
                        airports[toState] ? airports[toState].code : "";

                    const flight = {
                        airline: cells[0] ? cells[0].textContent.trim() : "",
                        departureTime: cells[1] ? cells[1].textContent.trim() : "",
                        arrivalTime: cells[2] ? cells[2].textContent.trim() : "",
                        duration: cells[3] ? cells[3].textContent.trim() : "",
                        cabinClass: cells[4] ? cells[4].textContent.trim() : "",
                        price: priceNumber,
                        fromState: fromState,
                        toState: toState,
                        fromCode: fromCode,
                        toCode: toCode,
                        travelDate: travelDate ? travelDate.value : "",
                        stops: row.dataset.stops === "1" ? "1 stop" : "Non-stop"
                    };

                    sessionStorage.setItem(
                        "flightBookingDraft",
                        JSON.stringify({ flight: flight })
                    );

                    window.location.href = "passenger-info.html";

                }
            );

        });


    /* =========================================================
       LOGIN / REGISTER
       ========================================================= */

    if (signInButton) {

        signInButton.addEventListener(
            "click",
            function () {

                const userData =
                    localStorage.getItem(
                        "travelEaseUser"
                    ) ||
                    sessionStorage.getItem(
                        "travelEaseUser"
                    );


                if (userData) {

                    showAccountMenu();

                } else {

                    showLoginModal();

                }

            }
        );

    }


    /* =========================================================
       SHOW LOGIN MODAL
       ========================================================= */

    function showLoginModal() {

        removeExistingPopup();


        const modal =
            document.createElement("div");

        modal.className =
            "modal-overlay";


        modal.innerHTML = `

            <div class="login-modal">

                <button
                    class="modal-close"
                    type="button"
                >
                    &times;
                </button>


                <div class="login-logo">
                    TravelEase
                </div>


                <h2>
                    Welcome back
                </h2>


                <p class="login-description">
                    Sign in to manage your bookings,
                    save your trips and get exclusive deals.
                </p>


                <form id="travelEaseLoginForm">


                    <label>
                        Gmail / Email
                    </label>


                    <input
                        type="email"
                        id="loginEmail"
                        placeholder="Enter your Gmail or email"
                        autocomplete="email"
                        required
                    >


                    <label>
                        Phone number
                    </label>


                    <input
                        type="tel"
                        id="loginPhone"
                        placeholder="Enter your phone number"
                        autocomplete="tel"
                        required
                    >


                    <label>
                        Password
                    </label>


                    <div class="password-wrapper">

                        <input
                            type="password"
                            id="loginPassword"
                            placeholder="Enter your password"
                            autocomplete="current-password"
                            required
                        >


                        <button
                            type="button"
                            class="toggle-password"
                            id="togglePassword"
                        >
                            <i class="fa-solid fa-eye"></i>
                        </button>

                    </div>


                    <div class="login-options">

                        <label class="remember-me">

                            <input
                                type="checkbox"
                                id="rememberMe"
                            >

                            <span>
                                Remember me
                            </span>

                        </label>


                        <button
                            type="button"
                            class="forgot-password"
                        >
                            Forgot password?
                        </button>

                    </div>


                    <button
                        type="submit"
                        class="continue-login"
                    >
                        Login
                    </button>

                </form>


                <div class="login-divider">
                    <span>or</span>
                </div>


                <button
                    type="button"
                    class="create-account"
                >
                    Create a new account
                </button>


                <p class="login-terms">
                    By continuing, you agree to our
                    Terms of Use and Privacy Policy.
                </p>

            </div>

        `;


        document.body.appendChild(modal);


        /* CLOSE */

        modal
            .querySelector(".modal-close")
            .addEventListener(
                "click",
                function () {

                    modal.remove();

                }
            );


        /* CLICK OUTSIDE */

        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === modal
                ) {

                    modal.remove();

                }

            }
        );


        /* PASSWORD */

        const passwordInput =
            modal.querySelector(
                "#loginPassword"
            );

        const togglePassword =
            modal.querySelector(
                "#togglePassword"
            );


        togglePassword.addEventListener(
            "click",
            function () {

                const isPassword =
                    passwordInput.type ===
                    "password";


                passwordInput.type =
                    isPassword
                        ? "text"
                        : "password";


                togglePassword.innerHTML =
                    isPassword
                        ? `<i class="fa-solid fa-eye-slash"></i>`
                        : `<i class="fa-solid fa-eye"></i>`;

            }
        );


        /* FORGOT PASSWORD */

        modal
            .querySelector(".forgot-password")
            .addEventListener(
                "click",
                function () {

                    showNotification(
                        "Password recovery will be connected to the backend."
                    );

                }
            );


        /* CREATE ACCOUNT */

        modal
            .querySelector(".create-account")
            .addEventListener(
                "click",
                function () {

                    modal.remove();

                    showRegisterModal();

                }
            );


        /* LOGIN FORM */

        const loginForm =
            modal.querySelector(
                "#travelEaseLoginForm"
            );


        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const email =
                    modal
                        .querySelector("#loginEmail")
                        .value
                        .trim();


                const phone =
                    modal
                        .querySelector("#loginPhone")
                        .value
                        .trim();


                const password =
                    modal
                        .querySelector("#loginPassword")
                        .value;


                const rememberMe =
                    modal
                        .querySelector("#rememberMe")
                        .checked;


                /* EMAIL */

                if (!validateEmail(email)) {

                    showLoginError(
                        modal,
                        "Please enter a valid Gmail or email address."
                    );

                    return;

                }


                /* PHONE */

                const phoneClean =
                    phone.replace(/\D/g, "");


                if (
                    phoneClean.length < 7
                ) {

                    showLoginError(
                        modal,
                        "Please enter a valid phone number."
                    );

                    return;

                }


                /* PASSWORD */

                if (
                    password.length < 6
                ) {

                    showLoginError(
                        modal,
                        "Password must contain at least 6 characters."
                    );

                    return;

                }


                const name =
                    getNameFromEmail(email);


                const user = {

                    name: name,

                    email: email,

                    phone: phone,

                    loggedIn: true,

                    loginDate:
                        new Date().toISOString()

                };


                localStorage.removeItem(
                    "travelEaseUser"
                );

                sessionStorage.removeItem(
                    "travelEaseUser"
                );


                if (rememberMe) {

                    localStorage.setItem(
                        "travelEaseUser",
                        JSON.stringify(user)
                    );

                } else {

                    sessionStorage.setItem(
                        "travelEaseUser",
                        JSON.stringify(user)
                    );

                }


                updateLoginButton(user);


                modal.remove();


                showNotification(
                    `Welcome, ${name}! You have successfully logged in.`
                );

            }
        );

    }


    /* =========================================================
       REGISTER MODAL
       ========================================================= */

    function showRegisterModal() {

        removeExistingPopup();


        const modal =
            document.createElement("div");

        modal.className =
            "modal-overlay";


        modal.innerHTML = `

            <div class="login-modal">

                <button
                    class="modal-close"
                    type="button"
                >
                    &times;
                </button>


                <div class="login-logo">
                    TravelEase
                </div>


                <h2>
                    Create your account
                </h2>


                <p class="login-description">
                    Join TravelEase and start planning
                    your next adventure.
                </p>


                <form id="travelEaseRegisterForm">


                    <label>
                        Full name
                    </label>


                    <input
                        type="text"
                        id="registerName"
                        placeholder="Enter your full name"
                        autocomplete="name"
                        required
                    >


                    <label>
                        Gmail / Email
                    </label>


                    <input
                        type="email"
                        id="registerEmail"
                        placeholder="Enter your Gmail or email"
                        autocomplete="email"
                        required
                    >


                    <label>
                        Phone number
                    </label>


                    <input
                        type="tel"
                        id="registerPhone"
                        placeholder="Enter your phone number"
                        autocomplete="tel"
                        required
                    >


                    <label>
                        Password
                    </label>


                    <div class="password-wrapper">

                        <input
                            type="password"
                            id="registerPassword"
                            placeholder="Create a password"
                            autocomplete="new-password"
                            required
                        >


                        <button
                            type="button"
                            class="toggle-password"
                            id="registerTogglePassword"
                        >
                            <i class="fa-solid fa-eye"></i>
                        </button>

                    </div>


                    <button
                        type="submit"
                        class="continue-login"
                    >
                        Create account
                    </button>

                </form>


                <p class="login-terms">
                    By creating an account, you agree to our
                    Terms of Use and Privacy Policy.
                </p>

            </div>

        `;


        document.body.appendChild(modal);


        /* CLOSE */

        modal
            .querySelector(".modal-close")
            .addEventListener(
                "click",
                function () {

                    modal.remove();

                }
            );


        /* OUTSIDE CLICK */

        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === modal
                ) {

                    modal.remove();

                }

            }
        );


        /* REGISTER PASSWORD TOGGLE */

        const registerPassword =
            modal.querySelector(
                "#registerPassword"
            );

        const registerToggle =
            modal.querySelector(
                "#registerTogglePassword"
            );


        registerToggle.addEventListener(
            "click",
            function () {

                const isPassword =
                    registerPassword.type ===
                    "password";


                registerPassword.type =
                    isPassword
                        ? "text"
                        : "password";


                registerToggle.innerHTML =
                    isPassword
                        ? `<i class="fa-solid fa-eye-slash"></i>`
                        : `<i class="fa-solid fa-eye"></i>`;

            }
        );


        /* REGISTER FORM */

        const registerForm =
            modal.querySelector(
                "#travelEaseRegisterForm"
            );


        registerForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    modal
                        .querySelector("#registerName")
                        .value
                        .trim();


                const email =
                    modal
                        .querySelector("#registerEmail")
                        .value
                        .trim();


                const phone =
                    modal
                        .querySelector("#registerPhone")
                        .value
                        .trim();


                const password =
                    modal
                        .querySelector("#registerPassword")
                        .value;


                /* NAME */

                if (name.length < 2) {

                    showLoginError(
                        modal,
                        "Please enter your full name."
                    );

                    return;

                }


                /* EMAIL */

                if (!validateEmail(email)) {

                    showLoginError(
                        modal,
                        "Please enter a valid email address."
                    );

                    return;

                }


                /* PHONE */

                if (
                    phone
                        .replace(/\D/g, "")
                        .length < 7
                ) {

                    showLoginError(
                        modal,
                        "Please enter a valid phone number."
                    );

                    return;

                }


                /* PASSWORD */

                if (
                    password.length < 6
                ) {

                    showLoginError(
                        modal,
                        "Password must contain at least 6 characters."
                    );

                    return;

                }


                const user = {

                    name: name,

                    email: email,

                    phone: phone,

                    loggedIn: true,

                    loginDate:
                        new Date().toISOString()

                };


                localStorage.removeItem(
                    "travelEaseUser"
                );

                sessionStorage.removeItem(
                    "travelEaseUser"
                );


                localStorage.setItem(
                    "travelEaseUser",
                    JSON.stringify(user)
                );


                updateLoginButton(user);


                modal.remove();


                showNotification(
                    `Welcome ${name}! Your TravelEase account has been created.`
                );

            }
        );

    }


    /* =========================================================
       UPDATE LOGIN BUTTON
       ========================================================= */

    function updateLoginButton(user) {

        if (
            !signInButton ||
            !user
        ) {
            return;
        }


        const firstLetter =
            user.name
                .trim()
                .charAt(0)
                .toUpperCase() || "U";


        signInButton.textContent =
            firstLetter;


        signInButton.classList.add(
            "user-avatar"
        );


        signInButton.title =
            `Logged in as ${user.name}`;


        signInButton.setAttribute(
            "aria-label",
            `Logged in as ${user.name}`
        );

    }


    /* =========================================================
       RESTORE LOGIN BUTTON
       ========================================================= */

    function restoreLoginButton() {

        if (!signInButton) {
            return;
        }


        signInButton.textContent =
            "Sign in / Register";


        signInButton.classList.remove(
            "user-avatar"
        );


        signInButton.removeAttribute(
            "title"
        );


        signInButton.removeAttribute(
            "aria-label"
        );

    }


    /* =========================================================
       RESTORE LOGGED-IN USER
       ========================================================= */

    function restoreLoggedInUser() {

        const userData =
            localStorage.getItem(
                "travelEaseUser"
            ) ||
            sessionStorage.getItem(
                "travelEaseUser"
            );


        if (!userData) {

            restoreLoginButton();

            return;

        }


        try {

            const user =
                JSON.parse(userData);


            if (
                user &&
                user.loggedIn
            ) {

                updateLoginButton(user);

            } else {

                restoreLoginButton();

            }

        } catch (error) {

            console.error(
                "Unable to restore user:",
                error
            );


            localStorage.removeItem(
                "travelEaseUser"
            );

            sessionStorage.removeItem(
                "travelEaseUser"
            );


            restoreLoginButton();

        }

    }


    restoreLoggedInUser();


    /* =========================================================
       ACCOUNT MENU AFTER LOGIN
       ========================================================= */

    function showAccountMenu() {

        removeExistingPopup();


        const userData =
            localStorage.getItem(
                "travelEaseUser"
            ) ||
            sessionStorage.getItem(
                "travelEaseUser"
            );


        if (!userData) {

            showLoginModal();

            return;

        }


        let user;


        try {

            user =
                JSON.parse(userData);

        } catch {

            showLoginModal();

            return;

        }


        const modal =
            document.createElement("div");

        modal.className =
            "modal-overlay";


        modal.innerHTML = `

            <div class="login-modal">

                <button
                    class="modal-close"
                    type="button"
                >
                    &times;
                </button>


                <div class="login-logo">
                    TravelEase
                </div>


                <h2>
                    Hello, ${escapeHTML(user.name)}
                </h2>


                <p class="login-description">
                    You are currently signed in to your
                    TravelEase account.
                </p>


                <div style="
                    background:#f5f7fa;
                    border-radius:10px;
                    padding:16px;
                    margin-bottom:20px;
                ">

                    <p style="
                        font-size:13px;
                        color:#374151;
                        margin-bottom:8px;
                    ">
                        <strong>Email:</strong>
                        ${escapeHTML(user.email)}
                    </p>


                    <p style="
                        font-size:13px;
                        color:#374151;
                    ">
                        <strong>Phone:</strong>
                        ${escapeHTML(user.phone)}
                    </p>

                </div>


                <button
                    type="button"
                    class="continue-login"
                    id="logoutButton"
                >
                    Log out
                </button>

            </div>

        `;


        document.body.appendChild(modal);


        modal
            .querySelector(".modal-close")
            .addEventListener(
                "click",
                function () {

                    modal.remove();

                }
            );


        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === modal
                ) {

                    modal.remove();

                }

            }
        );


        modal
            .querySelector("#logoutButton")
            .addEventListener(
                "click",
                function () {

                    localStorage.removeItem(
                        "travelEaseUser"
                    );

                    sessionStorage.removeItem(
                        "travelEaseUser"
                    );


                    restoreLoginButton();


                    modal.remove();


                    showNotification(
                        "You have been logged out."
                    );

                }
            );

    }


    /* =========================================================
       REMOVE EXISTING POPUP
       ========================================================= */

    function removeExistingPopup() {

        const existing =
            document.querySelector(
                ".modal-overlay"
            );


        if (existing) {
            existing.remove();
        }

    }


    /* =========================================================
       VALIDATE EMAIL
       ========================================================= */

    function validateEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email);

    }


    /* =========================================================
       GET NAME FROM EMAIL
       ========================================================= */

    function getNameFromEmail(email) {

        const local =
            email.split("@")[0] ||
            "User";


        return local
            .replace(/[._-]+/g, " ")
            .replace(
                /\b\w/g,
                function (char) {

                    return char.toUpperCase();

                }
            );

    }


    /* =========================================================
       LOGIN ERROR
       ========================================================= */

    function showLoginError(
        modal,
        message
    ) {

        const old =
            modal.querySelector(
                ".login-error"
            );


        if (old) {
            old.remove();
        }


        const error =
            document.createElement("div");


        error.className =
            "login-error";


        error.innerHTML = `

            <i class="fa-solid fa-circle-exclamation"></i>

            <span>
                ${escapeHTML(message)}
            </span>

        `;


        const form =
            modal.querySelector("form");


        form.prepend(error);

    }


    /* =========================================================
       NOTIFICATION
       ========================================================= */

    function showNotification(message) {

        const old =
            document.querySelector(
                ".travel-notification"
            );


        if (old) {
            old.remove();
        }


        const notification =
            document.createElement("div");


        notification.className =
            "travel-notification";


        notification.textContent =
            message;


        document.body.appendChild(
            notification
        );


        setTimeout(
            function () {

                notification.remove();

            },
            3500
        );

    }


    /* =========================================================
       ESCAPE HTML
       ========================================================= */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }

});
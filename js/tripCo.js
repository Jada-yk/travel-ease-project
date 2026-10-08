document.addEventListener("DOMContentLoaded", () => {
  // =========================================================
  // STATE
  // =========================================================

  const state = {
    category: "Hotels & Homes",
    destination: "",
    checkIn: null,
    checkOut: null,
    rooms: 1,
    adults: 2,
    children: 0,
    currency: "USD",

    /* the Flights tab has its own details (separate from hotels) */
    flight: {
      trip: "roundTrip",     // roundTrip | oneWay | multiCity
      from: "",
      to: "",
      depart: null,
      ret: null,
      adults: 1,
      children: 0,
      cabin: "Economy",      // Economy | Premium | Business
      nonstop: false,
    },
  };

  // =========================================================
  // ELEMENTS
  // =========================================================

  const categories = document.querySelectorAll(".category");
  const searchButton = document.querySelector(".search-button");
  const destinationBox = document.querySelector(".input-box:nth-child(1)");
  const dateBox = document.querySelector(".input-box:nth-child(2)");
  const guestBox = document.querySelector(".input-box:nth-child(3)");
  const signInButton = document.querySelector(".signin");

  const topSearchInput = document.getElementById("topSearchInput");
  const topSearchButton = document.getElementById("topSearchButton");

  /* flights form */
  const searchPanel = document.querySelector(".search-panel");
  const heroSection = document.querySelector(".hero");
  const flightSearch = document.getElementById("flightSearch");
  const flFrom = document.getElementById("flFrom");
  const flTo = document.getElementById("flTo");
  const flSwap = document.getElementById("flSwap");
  const flNonstop = document.getElementById("flNonstop");
  const flDepartInput = document.getElementById("flDepartInput");
  const flReturnInput = document.getElementById("flReturnInput");
  const flDepartText = document.getElementById("flDepartText");
  const flReturnText = document.getElementById("flReturnText");
  const flPax = document.getElementById("flPax");
  const flPaxText = document.getElementById("flPaxText");
  const flBundle = document.getElementById("flBundle");
  const flSearchBtn = document.getElementById("flSearch");

  /* value the flights page understands -> label shown to people */
  const FLIGHT_CABINS = {
    Economy: "Economy",
    Premium: "Premium Economy",
    Business: "Business",
  };

  // =========================================================
  // INITIALIZATION
  // =========================================================

  initialize();

  function initialize() {
    restoreCurrency();
    restoreSavedSearch();
    restoreLoggedInUser();
    setupCategories();
    setupSearchBoxes();
    setupFlightForm();
    setupTopSearch();
    setupSearchPlaceholder();
    setupCurrencySelector();
    setupOutsideClick();
    setupTopLinkScroll();
    setupCardReveal();
    syncActiveCategoryTab();
    updateSearchInterface(state.category);
  }

  /* phones get the short "Where to?" pill, like the big travel apps */
  function setupSearchPlaceholder() {
    const input = document.getElementById("topSearchInput");

    if (!input || !window.matchMedia) return;

    const phone = window.matchMedia("(max-width: 750px)");

    const apply = () => {
      input.placeholder = phone.matches
        ? "Where to?"
        : "Destination, attraction, hotel etc.";
    };

    apply();

    if (phone.addEventListener) {
      phone.addEventListener("change", apply);
    }
  }

  /* A restored search can start on a tab other than the one in the
     HTML (e.g. Flights) - make the highlighted tab match. */
  function syncActiveCategoryTab() {
    const names = Array.from(categories).map(
      (item) =>
        item.querySelector("span")?.textContent.trim() ||
        item.textContent.trim()
    );

    if (!names.includes(state.category)) return;

    categories.forEach((item, index) => {
      item.classList.toggle("active", names[index] === state.category);
    });
  }

  // =========================================================
  // NAV ANCHOR SCROLLING
  // =========================================================

  function setupTopLinkScroll() {
    document
      .querySelectorAll(".top-link")
      .forEach((link) => {
        link.addEventListener("click", (event) => {
          const targetId =
            link.getAttribute("href");

          if (!targetId || !targetId.startsWith("#")) {
            return;
          }

          const target =
            document.querySelector(targetId);

          if (!target) return;

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      });
  }

  // =========================================================
  // LIGHT SCROLL-REVEAL FOR THE NEW CARDS
  // (kept subtle — a small fade/slide the first time each
  // card enters view, not a full animation library)
  // =========================================================

  function setupCardReveal() {
    const cards = document.querySelectorAll(
      ".family-card, .testimonial-card"
    );

    if (!cards.length) return;

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) =>
        card.classList.add("in-view")
      );

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
  }

  // =========================================================
  // CATEGORY SWITCHING
  // =========================================================

  function setupCategories() {
    categories.forEach((category) => {
      category.addEventListener("click", () => {
        categories.forEach((item) => {
          item.classList.remove("active");
        });

        category.classList.add("active");

        const categoryName =
          category.querySelector("span")?.textContent.trim() ||
          category.textContent.trim();

        if (categoryName !== state.category) {
          /* A destination picked under one category (e.g. a flight
             route) isn't valid under another (e.g. a car city), so
             clear it rather than carrying over a stale value. */
          state.destination = "";
        }

        state.category = categoryName;

        updateSearchInterface(categoryName);
      });
    });
  }

  function updateSearchInterface(categoryName) {
    /* Flights has its own form; every other tab uses the 3-box layout */
    const isFlights = categoryName === "Flights";

    if (searchPanel) searchPanel.classList.toggle("flights-mode", isFlights);
    if (heroSection) heroSection.classList.toggle("flights-mode", isFlights);

    if (isFlights) {
      renderFlightForm();
      return;
    }

    if (!destinationBox || !dateBox || !guestBox) return;

    const destinationSmall = destinationBox.querySelector("small");
    const destinationText = destinationBox.querySelector("p");

    const dateSmall = dateBox.querySelector("small");
    const dateText = dateBox.querySelector("p");

    const guestSmall = guestBox.querySelector("small");
    const guestText = guestBox.querySelector("p");

    if (
      !destinationSmall ||
      !destinationText ||
      !dateSmall ||
      !dateText ||
      !guestSmall ||
      !guestText
    ) {
      return;
    }

    if (categoryName === "Trains") {
      destinationSmall.textContent = "Route";
      destinationText.textContent = "Select departure and arrival";

      dateSmall.textContent = "Travel date";
      dateText.textContent = formatDate(state.checkIn || new Date());

      guestSmall.textContent = "Passengers";
      guestText.textContent = `${state.adults + state.children} passengers`;

      return;
    }

    if (categoryName === "Cars") {
      destinationSmall.textContent = "Pick-up location";
      destinationText.textContent =
        state.destination || "Select location";

      dateSmall.textContent = "Rental dates";
      dateText.textContent =
        `${formatDate(state.checkIn || new Date())} → ` +
        `${formatDate(state.checkOut || addDays(new Date(), 1))}`;

      guestSmall.textContent = "Driver";
      guestText.textContent = "1 driver";

      return;
    }

    if (categoryName === "Attractions & Tours") {
      destinationSmall.textContent = "Destination";
      destinationText.textContent =
        state.destination || "Select destination";

      dateSmall.textContent = "Date";
      dateText.textContent = formatDate(state.checkIn || new Date());

      guestSmall.textContent = "Guests";
      guestText.textContent =
        `${state.adults + state.children} guests`;

      return;
    }

    // Hotels & Homes
    destinationSmall.textContent = "Where to?";
    destinationText.textContent =
      state.destination || "Select destination";

    dateSmall.textContent = "Date";

    dateText.innerHTML = `
      ${formatDate(state.checkIn || new Date())}
      <b>→</b>
      ${formatDate(state.checkOut || addDays(new Date(), 1))}
    `;

    guestSmall.textContent = "Guests";

    guestText.textContent =
      `${state.rooms} room${state.rooms !== 1 ? "s" : ""}, ` +
      `${state.adults} adults, ` +
      `${state.children} children`;
  }

  // =========================================================
  // SEARCH BOX SETUP
  // =========================================================

  function setupSearchBoxes() {
    if (destinationBox) {
      destinationBox.addEventListener("click", openDestinationPopup);
    }

    if (dateBox) {
      dateBox.addEventListener("click", openDatePopup);
    }

    if (guestBox) {
      guestBox.addEventListener("click", openGuestPopup);
    }

    if (searchButton) {
      searchButton.addEventListener("click", performMainSearch);
    }

    if (signInButton) {
      signInButton.addEventListener("click", handleSignInButton);
    }
  }

  // =========================================================
  // DESTINATION POPUP
  // =========================================================

  // =========================================================
  // DESTINATION DATA
  // (kept in sync with what each real TravelEase page actually
  // accepts, so a pick here always finds a matching result there)
  // =========================================================

  const HOTEL_DESTINATIONS = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
    "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
    "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna",
    "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
    "FCT — Abuja",
  ];

  const CAR_DESTINATIONS = [
    "Lagos", "Abuja", "Port Harcourt", "Kano", "Enugu",
    "Ibadan", "Kaduna", "Benin City", "Uyo", "Owerri",
  ];

  const FLIGHT_DOMESTIC_DESTINATIONS = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
    "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
    "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna",
    "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
    "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
    "FCT Abuja",
  ];

  const FLIGHT_INTERNATIONAL_DESTINATIONS = [
    "London, United Kingdom", "Dubai, UAE", "Doha, Qatar",
    "Istanbul, Turkey", "Accra, Ghana", "Johannesburg, South Africa",
    "Nairobi, Kenya", "Addis Ababa, Ethiopia", "Paris, France",
    "Amsterdam, Netherlands", "New York, USA", "Atlanta, USA",
  ];

  const ATTRACTION_DESTINATIONS = [
    "Lagos", "FCT Abuja", "Rivers", "Cross River", "Kano", "Enugu",
  ];

  function getDestinationList(categoryName) {
    if (categoryName === "Cars") {
      return CAR_DESTINATIONS.map((name) => ({
        name,
        sub: "Nigeria",
        value: name,
      }));
    }

    if (categoryName === "Flights") {
      const domestic = FLIGHT_DOMESTIC_DESTINATIONS.map((name) => ({
        name,
        sub: "Nigeria",
        value: name,
      }));

      const international = FLIGHT_INTERNATIONAL_DESTINATIONS.map(
        (full) => {
          const [city, country] = full.split(", ");

          return {
            name: city,
            sub: country || "International",
            /* keep the full "City, Country" as the value so it
               matches the airports list on the flights page exactly */
            value: full,
          };
        }
      );

      return [...domestic, ...international];
    }

    // Hotels & Homes (default)
    return HOTEL_DESTINATIONS.map((name) => ({
      name,
      sub: "Nigeria",
      value: name,
    }));
  }

  // =========================================================
  // DESTINATION POPUP
  // =========================================================

  function openDestinationPopup() {
    removeExistingPopup();

    if (state.category === "Attractions & Tours") {
      openAttractionDestinationDropdown();
      return;
    }

    const popup = document.createElement("div");

    popup.className = "travel-popup destination-popup";

    const list = getDestinationList(state.category);

    const popularTitle =
      state.category === "Flights" ? "Popular routes" : "Popular destinations";

    popup.innerHTML = `
      <div class="popup-header">
        <strong>Where do you want to go?</strong>
        <button class="close-popup" type="button">&times;</button>
      </div>

      <input
        type="text"
        class="destination-search"
        placeholder="Search city or state..."
        autocomplete="off"
      >

      <div class="popular-title">
        ${popularTitle}
      </div>

      <div class="destination-list">
        ${list
          .map((item) =>
            createDestinationButton(item.name, item.sub, item.value)
          )
          .join("")}
      </div>
    `;

    document.body.appendChild(popup);

    positionPopup(popup, destinationBox);

    const input = popup.querySelector(".destination-search");

    input.focus();

    popup
      .querySelector(".close-popup")
      .addEventListener("click", removeExistingPopup);

    popup.querySelectorAll("[data-destination]").forEach((button) => {
      button.addEventListener("click", () => {
        state.destination = button.dataset.destination;

        updateSearchInterface(state.category);

        removeExistingPopup();
      });
    });

    input.addEventListener("input", () => {
      const search = input.value.toLowerCase().trim();

      popup.querySelectorAll("[data-destination]").forEach((button) => {
        const label = button.textContent.toLowerCase();

        button.style.display = label.includes(search) ? "flex" : "none";
      });
    });
  }

  function openAttractionDestinationDropdown() {
    removeExistingPopup();

    const popup = document.createElement("div");

    popup.className = "travel-popup destination-popup destination-dropdown-popup";

    const options = ATTRACTION_DESTINATIONS.map((name) => {
      const selected = state.destination === name ? "selected" : "";

      return `<option value="${escapeHTML(name)}" ${selected}>${escapeHTML(
        name
      )}</option>`;
    }).join("");

    popup.innerHTML = `
      <div class="popup-header">
        <strong>Where do you want to explore?</strong>
        <button class="close-popup" type="button">&times;</button>
      </div>

      <label class="destination-select-label" for="attractionDestinationSelect">
        Choose a state
      </label>

      <select id="attractionDestinationSelect" class="destination-select">
        <option value="" disabled ${state.destination ? "" : "selected"}>
          Select a state
        </option>
        ${options}
      </select>

      <button type="button" class="apply-destination">
        Apply
      </button>
    `;

    document.body.appendChild(popup);

    positionPopup(popup, destinationBox);

    popup
      .querySelector(".close-popup")
      .addEventListener("click", removeExistingPopup);

    popup.querySelector(".apply-destination").addEventListener("click", () => {
      const select = popup.querySelector("#attractionDestinationSelect");

      if (!select.value) {
        showNotification("Please choose a state to explore.");
        return;
      }

      state.destination = select.value;

      updateSearchInterface(state.category);

      removeExistingPopup();
    });
  }

  function createDestinationButton(name, country, value) {
    return `
      <button type="button" data-destination="${escapeHTML(value || name)}">
        <i class="fa-solid fa-location-dot"></i>

        <span>
          <strong>${escapeHTML(name)}</strong>
          <small>${escapeHTML(country)}</small>
        </span>
      </button>
    `;
  }

  // =========================================================
  // DATE POPUP
  // =========================================================

  function openDatePopup() {
    removeExistingPopup();

    const popup = document.createElement("div");

    popup.className = "travel-popup date-popup";

    popup.innerHTML = `
      <div class="popup-header">
        <strong>Select your dates</strong>
        <button class="close-popup" type="button">&times;</button>
      </div>

      <div class="date-fields">

        <div>
          <label>Check-in</label>
          <input type="date" id="checkInDate">
        </div>

        <div>
          <label>Check-out</label>
          <input type="date" id="checkOutDate">
        </div>

      </div>

      <div class="quick-dates">
        <button type="button" data-days="1">1 night</button>
        <button type="button" data-days="2">2 nights</button>
        <button type="button" data-days="3">3 nights</button>
        <button type="button" data-days="7">1 week</button>
      </div>

      <button type="button" class="apply-dates">
        Apply dates
      </button>
    `;

    document.body.appendChild(popup);

    positionPopup(popup, dateBox);

    const checkIn = popup.querySelector("#checkInDate");
    const checkOut = popup.querySelector("#checkOutDate");

    const today = new Date();

    const todayString = toInputDate(today);

    checkIn.min = todayString;
    checkOut.min = todayString;

    checkIn.value = state.checkIn
      ? toInputDate(state.checkIn)
      : todayString;

    checkOut.value = state.checkOut
      ? toInputDate(state.checkOut)
      : toInputDate(addDays(today, 1));

    checkIn.addEventListener("change", () => {
      if (!checkIn.value) return;

      const selected = new Date(`${checkIn.value}T00:00:00`);

      checkOut.min = checkIn.value;

      if (
        !checkOut.value ||
        new Date(`${checkOut.value}T00:00:00`) <= selected
      ) {
        checkOut.value = toInputDate(addDays(selected, 1));
      }
    });

    popup.querySelectorAll("[data-days]").forEach((button) => {
      button.addEventListener("click", () => {
        const nights = Number(button.dataset.days);

        const start = new Date();

        const end = addDays(start, nights);

        checkIn.value = toInputDate(start);
        checkOut.value = toInputDate(end);
      });
    });

    popup
      .querySelector(".apply-dates")
      .addEventListener("click", () => {
        if (!checkIn.value || !checkOut.value) {
          showNotification("Please select both dates.");
          return;
        }

        const start = new Date(`${checkIn.value}T00:00:00`);
        const end = new Date(`${checkOut.value}T00:00:00`);

        if (end <= start) {
          showNotification(
            "Check-out date must be after check-in date."
          );
          return;
        }

        state.checkIn = start;
        state.checkOut = end;

        updateSearchInterface(state.category);

        removeExistingPopup();
      });

    popup
      .querySelector(".close-popup")
      .addEventListener("click", removeExistingPopup);
  }

  // =========================================================
  // GUEST POPUP
  // =========================================================

  function openGuestPopup() {
    removeExistingPopup();

    const popup = document.createElement("div");

    popup.className = "travel-popup guest-popup";

    let rooms = state.rooms;
    let adults = state.adults;
    let children = state.children;

    popup.innerHTML = `
      <div class="popup-header">
        <strong>Rooms & Guests</strong>
        <button class="close-popup" type="button">&times;</button>
      </div>

      <div class="guest-row">
        <div>
          <strong>Rooms</strong>
          <small>Number of rooms</small>
        </div>

        <div class="counter">
          <button type="button" data-action="rooms-minus">−</button>
          <span id="roomsCount">${rooms}</span>
          <button type="button" data-action="rooms-plus">+</button>
        </div>
      </div>

      <div class="guest-row">
        <div>
          <strong>Adults</strong>
          <small>Ages 13+</small>
        </div>

        <div class="counter">
          <button type="button" data-action="adults-minus">−</button>
          <span id="adultsCount">${adults}</span>
          <button type="button" data-action="adults-plus">+</button>
        </div>
      </div>

      <div class="guest-row">
        <div>
          <strong>Children</strong>
          <small>Ages 0–12</small>
        </div>

        <div class="counter">
          <button type="button" data-action="children-minus">−</button>
          <span id="childrenCount">${children}</span>
          <button type="button" data-action="children-plus">+</button>
        </div>
      </div>

      <button type="button" class="apply-guests">
        Apply
      </button>
    `;

    document.body.appendChild(popup);

    positionPopup(popup, guestBox);

    function updateCounters() {
      popup.querySelector("#roomsCount").textContent = rooms;
      popup.querySelector("#adultsCount").textContent = adults;
      popup.querySelector("#childrenCount").textContent = children;
    }

    popup
      .querySelector('[data-action="rooms-minus"]')
      .addEventListener("click", () => {
        if (rooms > 1) {
          rooms--;
          updateCounters();
        }
      });

    popup
      .querySelector('[data-action="rooms-plus"]')
      .addEventListener("click", () => {
        rooms++;
        updateCounters();
      });

    popup
      .querySelector('[data-action="adults-minus"]')
      .addEventListener("click", () => {
        if (adults > 1) {
          adults--;
          updateCounters();
        }
      });

    popup
      .querySelector('[data-action="adults-plus"]')
      .addEventListener("click", () => {
        adults++;
        updateCounters();
      });

    popup
      .querySelector('[data-action="children-minus"]')
      .addEventListener("click", () => {
        if (children > 0) {
          children--;
          updateCounters();
        }
      });

    popup
      .querySelector('[data-action="children-plus"]')
      .addEventListener("click", () => {
        children++;
        updateCounters();
      });

    popup
      .querySelector(".apply-guests")
      .addEventListener("click", () => {
        state.rooms = rooms;
        state.adults = adults;
        state.children = children;

        updateSearchInterface(state.category);

        removeExistingPopup();
      });

    popup
      .querySelector(".close-popup")
      .addEventListener("click", removeExistingPopup);
  }

  // =========================================================
  // FLIGHTS SEARCH FORM
  // =========================================================

  function startOfToday() {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return today;
  }

  function shortDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  }

  /* dates are never left empty or in the past */
  function ensureFlightDates() {
    const flight = state.flight;

    if (!flight.depart || flight.depart < startOfToday()) {
      flight.depart = addDays(startOfToday(), 1);
      flight.ret = addDays(flight.depart, 3);
    }

    if (!flight.ret || flight.ret <= flight.depart) {
      flight.ret = addDays(flight.depart, 1);
    }
  }

  function setPlaceField(button, value) {
    if (!button) return;

    const valueEl = button.querySelector(".fl-value");

    button.classList.toggle("has-value", Boolean(value));

    if (valueEl) valueEl.textContent = value || "";
  }

  function flightPassengerText() {
    const flight = state.flight;

    let text = `${flight.adults} adult${flight.adults === 1 ? "" : "s"}`;

    if (flight.children > 0) {
      text += ` · ${flight.children} ${
        flight.children === 1 ? "child" : "children"
      }`;
    }

    return `${text} · ${FLIGHT_CABINS[flight.cabin] || flight.cabin}`;
  }

  function renderFlightForm() {
    if (!flightSearch) return;

    ensureFlightDates();

    const flight = state.flight;

    flightSearch.dataset.trip = flight.trip;

    flightSearch
      .querySelectorAll('input[name="flTripType"]')
      .forEach((radio) => {
        radio.checked = radio.value === flight.trip;
      });

    if (flNonstop) flNonstop.checked = flight.nonstop;

    setPlaceField(flFrom, flight.from);
    setPlaceField(flTo, flight.to);

    if (flDepartText) flDepartText.textContent = formatDate(flight.depart);
    if (flReturnText) flReturnText.textContent = formatDate(flight.ret);

    if (flDepartInput) {
      flDepartInput.min = toInputDate(new Date());
      flDepartInput.value = toInputDate(flight.depart);
    }

    if (flReturnInput) {
      flReturnInput.min = toInputDate(flight.depart);
      flReturnInput.value = toInputDate(flight.ret);
    }

    if (flPaxText) flPaxText.textContent = flightPassengerText();
  }

  function setupFlightForm() {
    if (!flightSearch) return;

    flightSearch
      .querySelectorAll('input[name="flTripType"]')
      .forEach((radio) => {
        radio.addEventListener("change", () => {
          if (!radio.checked) return;

          state.flight.trip = radio.value;

          renderFlightForm();
        });
      });

    if (flNonstop) {
      flNonstop.addEventListener("change", () => {
        state.flight.nonstop = flNonstop.checked;
      });
    }

    if (flFrom) {
      flFrom.addEventListener("click", () => openFlightPlacePopup("from"));
    }

    if (flTo) {
      flTo.addEventListener("click", () => openFlightPlacePopup("to"));
    }

    if (flSwap) {
      flSwap.addEventListener("click", () => {
        const flight = state.flight;

        [flight.from, flight.to] = [flight.to, flight.from];

        flSwap.classList.toggle("spin");

        removeExistingPopup();
        renderFlightForm();
      });
    }

    /* the date inputs sit invisibly over the date text */
    [flDepartInput, flReturnInput].forEach((input) => {
      if (!input) return;

      input.addEventListener("click", () => {
        removeExistingPopup();

        try {
          input.showPicker();
        } catch (error) {
          /* older browsers open the picker from the click itself */
        }
      });
    });

    if (flDepartInput) {
      flDepartInput.addEventListener("change", () => {
        if (!flDepartInput.value) return;

        const flight = state.flight;

        flight.depart = new Date(`${flDepartInput.value}T00:00:00`);

        if (!flight.ret || flight.ret <= flight.depart) {
          flight.ret = addDays(flight.depart, 1);
        }

        renderFlightForm();
      });
    }

    if (flReturnInput) {
      flReturnInput.addEventListener("change", () => {
        if (!flReturnInput.value) return;

        const flight = state.flight;
        const picked = new Date(`${flReturnInput.value}T00:00:00`);

        if (picked < flight.depart) {
          showNotification("Return date can't be before departure.");
          renderFlightForm();
          return;
        }

        flight.ret = picked;

        renderFlightForm();
      });
    }

    if (flPax) {
      flPax.addEventListener("click", openFlightPassengerPopup);

      flPax.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openFlightPassengerPopup();
        }
      });
    }

    if (flSearchBtn) {
      flSearchBtn.addEventListener("click", performFlightSearch);
    }

    if (flBundle) {
      flBundle.addEventListener("click", performFlightHotelSearch);
    }
  }

  /* keep a popup inside the window (the "Going to" box is far right) */
  function keepPopupOnScreen(popup) {
    const maxLeft =
      window.scrollX +
      document.documentElement.clientWidth -
      popup.offsetWidth -
      15;

    if (parseFloat(popup.style.left) > maxLeft) {
      popup.style.left = `${Math.max(15, maxLeft)}px`;
    }
  }

  function openFlightPlacePopup(which) {
    removeExistingPopup();

    const flight = state.flight;
    const other = which === "from" ? flight.to : flight.from;
    const anchor = which === "from" ? flFrom : flTo;

    /* the other end of the trip can't be picked again */
    const list = getDestinationList("Flights").filter(
      (item) => item.value !== other
    );

    const popup = document.createElement("div");

    popup.className = "travel-popup destination-popup";

    popup.innerHTML = `
      <div class="popup-header">
        <strong>${
          which === "from"
            ? "Where are you leaving from?"
            : "Where do you want to go?"
        }</strong>
        <button class="close-popup" type="button">&times;</button>
      </div>

      <input
        type="text"
        class="destination-search"
        placeholder="Search city or state..."
        autocomplete="off"
      >

      <div class="destination-list">
        ${list
          .map((item) =>
            createDestinationButton(item.name, item.sub, item.value)
          )
          .join("")}
      </div>
    `;

    document.body.appendChild(popup);

    positionPopup(popup, anchor);
    keepPopupOnScreen(popup);

    const input = popup.querySelector(".destination-search");

    input.focus();

    popup
      .querySelector(".close-popup")
      .addEventListener("click", removeExistingPopup);

    popup.querySelectorAll("[data-destination]").forEach((button) => {
      button.addEventListener("click", () => {
        state.flight[which] = button.dataset.destination;

        renderFlightForm();
        removeExistingPopup();

        /* picked the start point first? go straight to the destination */
        if (which === "from" && !state.flight.to) {
          setTimeout(() => openFlightPlacePopup("to"), 60);
        }
      });
    });

    input.addEventListener("input", () => {
      const search = input.value.toLowerCase().trim();

      popup.querySelectorAll("[data-destination]").forEach((button) => {
        const label = button.textContent.toLowerCase();

        button.style.display = label.includes(search) ? "flex" : "none";
      });
    });
  }

  function openFlightPassengerPopup() {
    removeExistingPopup();

    const flight = state.flight;

    let adults = flight.adults;
    let children = flight.children;

    const popup = document.createElement("div");

    popup.className = "travel-popup guest-popup";

    popup.innerHTML = `
      <div class="popup-header">
        <strong>Passengers & class</strong>
        <button class="close-popup" type="button">&times;</button>
      </div>

      <div class="guest-row">
        <div>
          <strong>Adults</strong>
          <small>Ages 12+</small>
        </div>

        <div class="counter">
          <button type="button" data-action="adults-minus">−</button>
          <span data-count="adults">${adults}</span>
          <button type="button" data-action="adults-plus">+</button>
        </div>
      </div>

      <div class="guest-row">
        <div>
          <strong>Children</strong>
          <small>Ages 2–11</small>
        </div>

        <div class="counter">
          <button type="button" data-action="children-minus">−</button>
          <span data-count="children">${children}</span>
          <button type="button" data-action="children-plus">+</button>
        </div>
      </div>

      <label class="destination-select-label" for="flCabinSelect">
        Cabin class
      </label>

      <select id="flCabinSelect" class="destination-select">
        ${Object.keys(FLIGHT_CABINS)
          .map(
            (value) =>
              `<option value="${value}" ${
                value === flight.cabin ? "selected" : ""
              }>${FLIGHT_CABINS[value]}</option>`
          )
          .join("")}
      </select>

      <button type="button" class="apply-guests" style="margin-top:16px;">
        Done
      </button>
    `;

    document.body.appendChild(popup);

    positionPopup(popup, flPax);
    keepPopupOnScreen(popup);

    popup.addEventListener("click", (event) => {
      const button = event.target.closest("[data-action]");

      if (!button) return;

      const action = button.dataset.action;

      if (action === "adults-minus" && adults > 1) adults--;
      if (action === "adults-plus" && adults < 10) adults++;
      if (action === "children-minus" && children > 0) children--;
      if (action === "children-plus" && children < 6) children++;

      popup.querySelector('[data-count="adults"]').textContent = adults;
      popup.querySelector('[data-count="children"]').textContent = children;
    });

    popup.querySelector(".apply-guests").addEventListener("click", () => {
      flight.adults = adults;
      flight.children = children;
      flight.cabin = popup.querySelector("#flCabinSelect").value;

      renderFlightForm();
      removeExistingPopup();
    });

    popup
      .querySelector(".close-popup")
      .addEventListener("click", removeExistingPopup);
  }

  function buildFlightUrl() {
    const flight = state.flight;
    const params = new URLSearchParams();

    params.set("from", flight.from);
    params.set("to", flight.to);
    params.set("trip", flight.trip);
    params.set("depart", toInputDate(flight.depart));

    if (flight.trip === "roundTrip") {
      params.set("return", toInputDate(flight.ret));
    }

    params.set("adults", String(flight.adults));

    if (flight.children > 0) {
      params.set("children", String(flight.children));
    }

    params.set("cabin", flight.cabin);

    if (flight.nonstop) params.set("nonstop", "1");

    return `/html/index.html?${params.toString()}`;
  }

  /* the details line on the loader card:  Sep 20 - Sep 22 | 2 travelers | Economy */
  function flightLoaderInput(title) {
    const flight = state.flight;
    const travelers = flight.adults + flight.children;

    return {
      title,
      tagline: "Unlock big savings by booking your flights and hotels together",
      meta: [
        flight.trip === "roundTrip"
          ? `${shortDate(flight.depart)} - ${shortDate(flight.ret)}`
          : shortDate(flight.depart),
        `${travelers} traveler${travelers === 1 ? "" : "s"}`,
        FLIGHT_CABINS[flight.cabin] || flight.cabin,
      ],
    };
  }

  function saveFlightSearch() {
    const flight = state.flight;

    localStorage.setItem(
      "travelEaseLastSearch",
      JSON.stringify({
        type: "Flights",
        destination: flight.to,
        currency: state.currency,
        flight: {
          trip: flight.trip,
          from: flight.from,
          to: flight.to,
          depart: toInputDate(flight.depart),
          ret: toInputDate(flight.ret),
          adults: flight.adults,
          children: flight.children,
          cabin: flight.cabin,
          nonstop: flight.nonstop,
        },
      })
    );
  }

  function performFlightSearch() {
    const flight = state.flight;

    if (!flight.from) {
      showNotification("Please select where you're leaving from.");
      openFlightPlacePopup("from");
      return;
    }

    if (!flight.to) {
      showNotification("Please select your destination.");
      openFlightPlacePopup("to");
      return;
    }

    if (flight.from === flight.to) {
      showNotification("Departure and destination cannot be the same.");
      return;
    }

    ensureFlightDates();

    if (flight.trip === "roundTrip" && flight.ret < flight.depart) {
      showNotification("Return date can't be before departure.");
      return;
    }

    saveFlightSearch();

    goToPage(
      buildFlightUrl(),
      flightLoaderInput(`Searching best flights to ${flight.to}`)
    );
  }

  /* "Flight + Hotel": jump to hotels at the destination (the hotel page
     covers Nigerian destinations only) */
  function performFlightHotelSearch() {
    const flight = state.flight;

    if (!flight.to) {
      showNotification("Please select your destination first.");
      openFlightPlacePopup("to");
      return;
    }

    if (!FLIGHT_DOMESTIC_DESTINATIONS.includes(flight.to)) {
      showNotification(
        "Flight + Hotel is available for destinations in Nigeria only."
      );
      return;
    }

    const city = flight.to === "FCT Abuja" ? "Abuja" : flight.to;

    saveFlightSearch();

    goToPage(
      `/html/hotel.html?city=${encodeURIComponent(city)}`,
      flightLoaderInput(`Finding hotels in ${city}`)
    );
  }

  // =========================================================
  // MAIN SEARCH
  // =========================================================

  function performMainSearch() {
    if (!state.destination) {
      showNotification("Please select a destination first.");

      if (destinationBox) {
        destinationBox.click();
      }

      return;
    }

    if (
      state.category === "Hotels & Homes" &&
      (!state.checkIn || !state.checkOut)
    ) {
      showNotification(
        "Please select your check-in and check-out dates."
      );

      if (dateBox) {
        dateBox.click();
      }

      return;
    }

    const searchData = {
      type: state.category,
      destination: state.destination,
      checkIn: state.checkIn
        ? toInputDate(state.checkIn)
        : null,
      checkOut: state.checkOut
        ? toInputDate(state.checkOut)
        : null,
      rooms: state.rooms,
      adults: state.adults,
      children: state.children,
      currency: state.currency,
    };

    localStorage.setItem(
      "travelEaseLastSearch",
      JSON.stringify(searchData)
    );

    navigateToSearch(
      state.category,
      state.destination
    );
  }

  // =========================================================
  // ROUTE THE SEARCH TO THE RIGHT TRAVELEASE PAGE
  // =========================================================

  const ATTRACTION_STATE_SLUGS = {
    lagos: "lagos",
    abuja: "abuja",
    "fct abuja": "abuja",
    "fct - abuja": "abuja",
    "fct, abuja": "abuja",
    rivers: "rivers",
    "port harcourt": "rivers",
    "cross river": "cross-river",
    calabar: "cross-river",
    kano: "kano",
    enugu: "enugu",
  };

  function buildSearchUrl(category, destination) {
    const dest = (destination || "").trim();
    const encoded = encodeURIComponent(dest);

    if (category === "Flights") {
      /* real flight searches go through performFlightSearch();
         this is only a fallback that pre-selects the destination */
      return `/html/index.html?to=${encoded}`;
    }

    if (category === "Cars") {
      return `/html/car.html?city=${encoded}`;
    }

    if (category === "Attractions & Tours") {
      const slug =
        ATTRACTION_STATE_SLUGS[dest.toLowerCase()] ||
        "lagos";

      return `/html/attraction.html?state=${slug}`;
    }

    // Hotels & Homes (default)
    return `/html/hotel.html?city=${encoded}`;
  }

  function navigateToSearch(category, destination) {
    const url = buildSearchUrl(category, destination);

    if (!url) return;

    const dest = (destination || "").trim();
    const message = dest
      ? `Searching ${category} in ${dest}...`
      : `Searching ${category}...`;

    goToPage(url, message);
  }

  /* show the loader, then go to the page (plain redirect if the
     loader script isn't there) */
  function goToPage(url, loaderInput) {
    if (window.TELoader && typeof window.TELoader.goTo === "function") {
      window.TELoader.goTo(url, loaderInput);
    } else {
      window.location.href = url;
    }
  }

  // =========================================================
  // LOGIN BUTTON
  // =========================================================

  function handleSignInButton() {
    const userData =
      localStorage.getItem("travelEaseUser") ||
      sessionStorage.getItem("travelEaseUser");

    if (userData) {
      showAccountMenu();
    } else {
      showLoginModal();
    }
  }

  // =========================================================
  // LOGIN MODAL
  // =========================================================

  function showLoginModal() {
    removeExistingPopup();

    const modal = document.createElement("div");

    modal.className = "modal-overlay";

    modal.innerHTML = `
      <div class="login-modal">

        <button class="modal-close" type="button">
          &times;
        </button>

        <div class="login-logo">
          TravelEase
        </div>

        <h2>Welcome back</h2>

        <p class="login-description">
          Sign in to manage your bookings,
          save your trips and get exclusive deals.
        </p>

        <form id="travelEaseLoginForm">

          <label>Gmail / Email</label>

          <input
            type="email"
            id="loginEmail"
            placeholder="Enter your Gmail or email"
            autocomplete="email"
            required
          >

          <label>Phone number</label>

          <input
            type="tel"
            id="loginPhone"
            placeholder="Enter your phone number"
            autocomplete="tel"
            required
          >

          <label>Password</label>

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

              <span>Remember me</span>

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

    // Close
    modal
      .querySelector(".modal-close")
      .addEventListener("click", () => {
        modal.remove();
      });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.remove();
      }
    });

    // Password toggle
    const passwordInput =
      modal.querySelector("#loginPassword");

    const togglePassword =
      modal.querySelector("#togglePassword");

    togglePassword.addEventListener("click", () => {
      const isPassword =
        passwordInput.type === "password";

      passwordInput.type =
        isPassword ? "text" : "password";

      togglePassword.innerHTML = isPassword
        ? `<i class="fa-solid fa-eye-slash"></i>`
        : `<i class="fa-solid fa-eye"></i>`;
    });

    // Forgot password
    modal
      .querySelector(".forgot-password")
      .addEventListener("click", () => {
        showNotification(
          "Password recovery would normally be connected to your backend."
        );
      });

    // Create account
    modal
      .querySelector(".create-account")
      .addEventListener("click", () => {
        modal.remove();
        showRegisterModal();
      });

    // Login form
    const loginForm =
      modal.querySelector("#travelEaseLoginForm");

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email =
        modal.querySelector("#loginEmail").value.trim();

      const phone =
        modal.querySelector("#loginPhone").value.trim();

      const password =
        modal.querySelector("#loginPassword").value;

      const rememberMe =
        modal.querySelector("#rememberMe").checked;

      if (!validateEmail(email)) {
        showLoginError(
          modal,
          "Please enter a valid Gmail or email address."
        );
        return;
      }

      const phoneClean = phone.replace(/\D/g, "");

      if (phoneClean.length < 7) {
        showLoginError(
          modal,
          "Please enter a valid phone number."
        );
        return;
      }

      if (password.length < 6) {
        showLoginError(
          modal,
          "Password must contain at least 6 characters."
        );
        return;
      }

      const name = getNameFromEmail(email);

      const user = {
        name,
        email,
        phone,
        loggedIn: true,
        loginDate: new Date().toISOString(),
      };

      // Clear old login state first
      localStorage.removeItem("travelEaseUser");
      sessionStorage.removeItem("travelEaseUser");

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
    });
  }

  // =========================================================
  // REGISTER MODAL
  // =========================================================

  function showRegisterModal() {
    removeExistingPopup();

    const modal = document.createElement("div");

    modal.className = "modal-overlay";

    modal.innerHTML = `
      <div class="login-modal">

        <button class="modal-close" type="button">
          &times;
        </button>

        <div class="login-logo">
          TravelEase
        </div>

        <h2>Create your account</h2>

        <p class="login-description">
          Join TravelEase and start planning
          your next adventure.
        </p>

        <form id="travelEaseRegisterForm">

          <label>Full name</label>

          <input
            type="text"
            id="registerName"
            placeholder="Enter your full name"
            required
          >

          <label>Gmail / Email</label>

          <input
            type="email"
            id="registerEmail"
            placeholder="Enter your Gmail or email"
            required
          >

          <label>Phone number</label>

          <input
            type="tel"
            id="registerPhone"
            placeholder="Enter your phone number"
            required
          >

          <label>Password</label>

          <input
            type="password"
            id="registerPassword"
            placeholder="Create a password"
            required
          >

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

    modal
      .querySelector(".modal-close")
      .addEventListener("click", () => {
        modal.remove();
      });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.remove();
      }
    });

    modal
      .querySelector("#travelEaseRegisterForm")
      .addEventListener("submit", (event) => {
        event.preventDefault();

        const name =
          modal.querySelector("#registerName").value.trim();

        const email =
          modal.querySelector("#registerEmail").value.trim();

        const phone =
          modal.querySelector("#registerPhone").value.trim();

        const password =
          modal.querySelector("#registerPassword").value;

        if (name.length < 2) {
          showLoginError(
            modal,
            "Please enter your full name."
          );
          return;
        }

        if (!validateEmail(email)) {
          showLoginError(
            modal,
            "Please enter a valid email address."
          );
          return;
        }

        if (phone.replace(/\D/g, "").length < 7) {
          showLoginError(
            modal,
            "Please enter a valid phone number."
          );
          return;
        }

        if (password.length < 6) {
          showLoginError(
            modal,
            "Password must contain at least 6 characters."
          );
          return;
        }

        const user = {
          name,
          email,
          phone,
          loggedIn: true,
          loginDate: new Date().toISOString(),
        };

        // Clear previous state
        localStorage.removeItem("travelEaseUser");
        sessionStorage.removeItem("travelEaseUser");

        // Register = persistent login
        localStorage.setItem(
          "travelEaseUser",
          JSON.stringify(user)
        );

        updateLoginButton(user);

        modal.remove();

        showNotification(
          `Welcome ${name}! Your TravelEase account has been created.`
        );
      });
  }

  // =========================================================
  // UPDATE LOGIN BUTTON
  // =========================================================

  function updateLoginButton(user) {
    if (!signInButton || !user) return;

    const firstLetter =
      user.name.trim().charAt(0).toUpperCase() || "U";

    signInButton.textContent = firstLetter;

    signInButton.classList.add("user-avatar");

    signInButton.title =
      `Logged in as ${user.name}`;

    signInButton.setAttribute(
      "aria-label",
      `Logged in as ${user.name}`
    );
  }

  // =========================================================
  // RESTORE LOGIN BUTTON
  // =========================================================

  function restoreLoginButton() {
    if (!signInButton) return;

    signInButton.textContent = "Sign in/register";

    signInButton.classList.remove("user-avatar");

    signInButton.removeAttribute("title");
    signInButton.removeAttribute("aria-label");
  }

  // =========================================================
  // RESTORE LOGGED-IN USER
  // =========================================================

  function restoreLoggedInUser() {
    const userData =
      localStorage.getItem("travelEaseUser") ||
      sessionStorage.getItem("travelEaseUser");

    if (!userData) {
      restoreLoginButton();
      return;
    }

    try {
      const user = JSON.parse(userData);

      if (user && user.loggedIn) {
        updateLoginButton(user);
      } else {
        restoreLoginButton();
      }
    } catch (error) {
      console.error(
        "Unable to restore user:",
        error
      );

      localStorage.removeItem("travelEaseUser");
      sessionStorage.removeItem("travelEaseUser");

      restoreLoginButton();
    }
  }

  // =========================================================
  // ACCOUNT MENU
  // =========================================================

  function showAccountMenu() {
    removeExistingPopup();

    const userData =
      localStorage.getItem("travelEaseUser") ||
      sessionStorage.getItem("travelEaseUser");

    if (!userData) {
      showLoginModal();
      return;
    }

    let user;

    try {
      user = JSON.parse(userData);
    } catch (error) {
      localStorage.removeItem("travelEaseUser");
      sessionStorage.removeItem("travelEaseUser");

      restoreLoginButton();
      showLoginModal();

      return;
    }

    const popup = document.createElement("div");

    popup.className = "travel-popup account-popup";

    popup.innerHTML = `
      <div class="account-header">

        <div class="account-avatar">
          ${escapeHTML(
            user.name.charAt(0).toUpperCase()
          )}
        </div>

        <div>
          <strong>
            ${escapeHTML(user.name)}
          </strong>

          <small>
            ${escapeHTML(user.email)}
          </small>
        </div>

      </div>

      <div class="account-divider"></div>

      <button
        type="button"
        class="account-option"
      >
        <i class="fa-solid fa-user"></i>
        My profile
      </button>

      <button
        type="button"
        class="account-option"
      >
        <i class="fa-solid fa-suitcase"></i>
        My bookings
      </button>

      <button
        type="button"
        class="account-option"
      >
        <i class="fa-solid fa-heart"></i>
        Saved trips
      </button>

      <button
        type="button"
        class="account-option"
      >
        <i class="fa-solid fa-gear"></i>
        Settings
      </button>

      <div class="account-divider"></div>

      <button
        type="button"
        class="logout-button"
      >
        <i class="fa-solid fa-right-from-bracket"></i>
        Log out
      </button>
    `;

    document.body.appendChild(popup);

    positionPopup(popup, signInButton);

    // =====================================================
    // LOGOUT
    // =====================================================

    popup
      .querySelector(".logout-button")
      .addEventListener("click", () => {

        // Remove both types of login storage
        localStorage.removeItem("travelEaseUser");
        sessionStorage.removeItem("travelEaseUser");

        // Restore original button
        restoreLoginButton();

        // Close account menu
        popup.remove();

        // Tell user
        showNotification(
          "You have been logged out."
        );
      });

    // =====================================================
    // ACCOUNT OPTIONS
    // =====================================================

    popup
      .querySelectorAll(".account-option")
      .forEach((button) => {

        button.addEventListener("click", () => {

          showNotification(
            `${button.textContent.trim()} is coming soon.`
          );

        });

      });
  }

  // =========================================================
  // LOGIN ERROR
  // =========================================================

  function showLoginError(modal, message) {
    let error =
      modal.querySelector(".login-error");

    if (!error) {
      error = document.createElement("div");

      error.className = "login-error";

      const form = modal.querySelector("form");

      if (form) {
        form.prepend(error);
      }
    }

    error.innerHTML = `
      <i class="fa-solid fa-circle-exclamation"></i>
      ${escapeHTML(message)}
    `;
  }

  // =========================================================
  // GET NAME FROM EMAIL
  // =========================================================

  function getNameFromEmail(email) {
    const username = email.split("@")[0];

    const cleaned = username
      .replace(/[._-]+/g, " ")
      .trim();

    if (!cleaned) {
      return "Traveler";
    }

    return cleaned
      .split(" ")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1)
      )
      .join(" ");
  }

  // =========================================================
  // CURRENCY
  // =========================================================

  function setupCurrencySelector() {
    const currencyLink = [
      ...document.querySelectorAll(".top-links span"),
    ].find((item) =>
      item.textContent.includes("USD")
    );

    if (!currencyLink) return;

    currencyLink.style.cursor = "pointer";

    currencyLink.addEventListener("click", () => {
      removeExistingPopup();

      const popup = document.createElement("div");

      popup.className =
        "travel-popup currency-popup";

      popup.innerHTML = `
        <div class="popup-header">
          <strong>Select currency</strong>

          <button
            class="close-popup"
            type="button"
          >
            &times;
          </button>
        </div>

        <button type="button" data-currency="USD">
          USD — US Dollar
        </button>

        <button type="button" data-currency="EUR">
          EUR — Euro
        </button>

        <button type="button" data-currency="GBP">
          GBP — British Pound
        </button>

        <button type="button" data-currency="NGN">
          NGN — Nigerian Naira
        </button>

        <button type="button" data-currency="AED">
          AED — UAE Dirham
        </button>
      `;

      document.body.appendChild(popup);

      positionPopup(popup, currencyLink);

      popup
        .querySelectorAll("[data-currency]")
        .forEach((button) => {

          button.addEventListener("click", () => {

            state.currency =
              button.dataset.currency;

            currencyLink.innerHTML = `
              <i class="fa-solid fa-globe"></i>
              ${state.currency}
            `;

            localStorage.setItem(
              "travelEaseCurrency",
              state.currency
            );

            removeExistingPopup();
          });

        });

      popup
        .querySelector(".close-popup")
        .addEventListener(
          "click",
          removeExistingPopup
        );
    });

    // Display saved currency
    currencyLink.innerHTML = `
      <i class="fa-solid fa-globe"></i>
      ${state.currency}
    `;
  }

  function restoreCurrency() {
    const savedCurrency =
      localStorage.getItem("travelEaseCurrency");

    if (savedCurrency) {
      state.currency = savedCurrency;
    }
  }

  // =========================================================
  // TOP SEARCH
  // =========================================================

  function setupTopSearch() {
    if (!topSearchInput || !topSearchButton) {
      return;
    }

    topSearchButton.addEventListener(
      "click",
      performTopSearch
    );

    topSearchInput.addEventListener(
      "keydown",
      (event) => {

        if (event.key === "Enter") {
          event.preventDefault();
          performTopSearch();
        }

      }
    );

    topSearchInput.addEventListener(
      "input",
      () => {
        showTopSearchSuggestions(
          topSearchInput.value.trim()
        );
      }
    );
  }

  function performTopSearch() {
    const searchTerm =
      topSearchInput.value.trim();

    if (!searchTerm) {
      showNotification(
        "Please enter a destination, hotel or attraction."
      );

      topSearchInput.focus();

      return;
    }

    removeTopSearchSuggestions();

    navigateToSearch("Hotels & Homes", searchTerm);
  }

  function showTopSearchSuggestions(searchTerm) {
    removeTopSearchSuggestions();

    if (!searchTerm) return;

    const searchBox =
      document.querySelector(".search-small");

    if (!searchBox) return;

    const suggestions = [
      {
        destination: searchTerm,
        label: searchTerm,
        type: "Hotels & Homes",
        icon: "fa-location-dot",
      },
      {
        destination: searchTerm,
        label: `${searchTerm} hotels`,
        type: "Hotels & Homes",
        icon: "fa-bed",
      },
      {
        destination: searchTerm,
        label: `${searchTerm} attractions`,
        type: "Attractions & Tours",
        icon: "fa-ticket",
      },
    ];

    const container =
      document.createElement("div");

    container.className =
      "top-search-results";

    suggestions.forEach((item) => {

      const button =
        document.createElement("button");

      button.type = "button";

      button.className =
        "top-search-result";

      button.innerHTML = `
        <i class="fa-solid ${item.icon}"></i>

        <span>
          <strong>
            ${escapeHTML(item.label)}
          </strong>

          <small>
            ${escapeHTML(item.type)}
          </small>
        </span>
      `;

      button.addEventListener("click", () => {

        topSearchInput.value =
          item.label;

        removeTopSearchSuggestions();

        navigateToSearch(
          item.type,
          item.destination
        );

      });

      container.appendChild(button);

    });

    searchBox.appendChild(container);
  }

  function removeTopSearchSuggestions() {
    document
      .querySelectorAll(".top-search-results")
      .forEach((item) => item.remove());
  }

  // =========================================================
  // OUTSIDE CLICK
  // =========================================================

  function setupOutsideClick() {
    document.addEventListener("click", (event) => {

      const popup =
        document.querySelector(".travel-popup");

      if (!popup) return;

      const clickedInsidePopup =
        popup.contains(event.target);

      const clickedDestination =
        destinationBox?.contains(event.target);

      const clickedDate =
        dateBox?.contains(event.target);

      const clickedGuest =
        guestBox?.contains(event.target);

      const clickedSignIn =
        signInButton?.contains(event.target);

      const clickedFlight =
        flightSearch?.contains(event.target);

      if (
        !clickedInsidePopup &&
        !clickedDestination &&
        !clickedDate &&
        !clickedGuest &&
        !clickedSignIn &&
        !clickedFlight
      ) {
        popup.remove();
      }

    });
  }

  // =========================================================
  // POPUP HELPERS
  // =========================================================

  function removeExistingPopup() {
    document
      .querySelectorAll(".travel-popup")
      .forEach((popup) => popup.remove());
  }

  function positionPopup(popup, element) {
    if (!popup || !element) return;

    const rect =
      element.getBoundingClientRect();

    popup.style.position = "absolute";

    popup.style.top =
      `${rect.bottom + window.scrollY + 10}px`;

    popup.style.left =
      `${rect.left + window.scrollX}px`;

    popup.style.zIndex = "9999";
  }

  // =========================================================
  // SAVED SEARCH
  // =========================================================

  function restoreSavedSearch() {
    const savedSearch =
      localStorage.getItem(
        "travelEaseLastSearch"
      );

    if (!savedSearch) return;

    try {
      const previous =
        JSON.parse(savedSearch);

      state.destination =
        previous.destination || "";

      state.rooms =
        Number(previous.rooms) || 1;

      state.adults =
        Number(previous.adults) || 2;

      state.children =
        Number(previous.children) || 0;

      if (previous.checkIn) {
        state.checkIn =
          new Date(`${previous.checkIn}T00:00:00`);
      }

      if (previous.checkOut) {
        state.checkOut =
          new Date(`${previous.checkOut}T00:00:00`);
      }

      if (previous.type) {
        state.category = previous.type;
      }

      if (previous.flight) {
        const saved = previous.flight;
        const flight = state.flight;

        flight.trip = ["roundTrip", "oneWay", "multiCity"].includes(saved.trip)
          ? saved.trip
          : "roundTrip";
        flight.from = saved.from || "";
        flight.to = saved.to || "";
        flight.adults = Number(saved.adults) || 1;
        flight.children = Number(saved.children) || 0;
        flight.cabin = FLIGHT_CABINS[saved.cabin] ? saved.cabin : "Economy";
        flight.nonstop = Boolean(saved.nonstop);

        if (saved.depart) {
          flight.depart = new Date(`${saved.depart}T00:00:00`);
        }

        if (saved.ret) {
          flight.ret = new Date(`${saved.ret}T00:00:00`);
        }
      } else if (previous.type === "Flights") {
        state.flight.to = previous.destination || "";
      }

      if (previous.currency) {
        state.currency =
          previous.currency;
      }

    } catch (error) {
      console.error(
        "Could not restore previous search:",
        error
      );
    }
  }

  // =========================================================
  // DATE HELPERS
  // =========================================================

  function addDays(date, days) {
    const result = new Date(date);

    result.setDate(
      result.getDate() + days
    );

    return result;
  }

  function toInputDate(date) {
    const year =
      date.getFullYear();

    const month =
      String(date.getMonth() + 1)
        .padStart(2, "0");

    const day =
      String(date.getDate())
        .padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat(
      "en-US",
      {
        weekday: "short",
        month: "short",
        day: "numeric",
      }
    ).format(date);
  }

  // =========================================================
  // VALIDATION
  // =========================================================

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email
    );
  }

  function escapeHTML(value) {
    const div =
      document.createElement("div");

    div.textContent =
      String(value ?? "");

    return div.innerHTML;
  }

  // =========================================================
  // NOTIFICATION
  // =========================================================

  function showNotification(message) {
    document
      .querySelectorAll(".travel-notification")
      .forEach((item) => item.remove());

    const notification =
      document.createElement("div");

    notification.className =
      "travel-notification";

    notification.innerHTML = `
      <i class="fa-solid fa-circle-info"></i>

      <span>
        ${escapeHTML(message)}
      </span>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 20);

    setTimeout(() => {

      notification.classList.remove("show");

      setTimeout(() => {
        notification.remove();
      }, 300);

    }, 3000);
  }
});


document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CAROUSEL ARROWS
    ===================================================== */

    const carouselButtons =
        document.querySelectorAll(".te-arrow");


    carouselButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const carouselId =
                button.getAttribute("data-carousel");

            const carousel =
                document.getElementById(carouselId);

            if (!carousel) return;


            const direction =
                button.classList.contains("te-next")
                    ? 1
                    : -1;


            const amount =
                carousel.clientWidth * 0.8;


            carousel.scrollBy({
                left: amount * direction,
                behavior: "smooth"
            });

        });

    });



    /* =====================================================
       HEART BUTTONS
    ===================================================== */

    const hearts =
        document.querySelectorAll(".te-heart");


    hearts.forEach(function (heart) {

        heart.addEventListener("click", function (event) {

            event.stopPropagation();


            const icon =
                heart.querySelector("i");


            const isLiked =
                icon.classList.contains("fa-solid");


            if (isLiked) {

                icon.classList.remove("fa-solid");

                icon.classList.add("fa-regular");

                heart.style.color = "#17233f";

            } else {

                icon.classList.remove("fa-regular");

                icon.classList.add("fa-solid");

                heart.style.color = "#e63946";

            }

        });

    });



    /* =====================================================
       CARD CLICK
    ===================================================== */

    const cards =
        document.querySelectorAll(
            ".te-small-card, .te-large-card"
        );


    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            const titleElement =
                card.querySelector("h3");


            if (!titleElement) return;


            const destination =
                titleElement.textContent.trim();


            console.log(
                "TravelEase destination:",
                destination
            );

        });

    });

});
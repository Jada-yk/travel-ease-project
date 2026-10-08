/* =========================================================
   ELEMENTS
   ========================================================= */

const menuButton = document.getElementById("menu-button");
const openMenuIcon = document.getElementById("open-menu");
const closeMenuIcon = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-menu");
const backdrop = document.getElementById("backdrop");
const navLinks = document.querySelectorAll(".nav-link");
const signInButton = document.getElementById("sign-in-button");


/* =========================================================
   OPEN / CLOSE MENU
   ========================================================= */

function openMenu() {
    navMenu.classList.add("active");
    backdrop.classList.add("active");

    openMenuIcon.style.display = "none";
    closeMenuIcon.style.display = "block";

    document.body.style.overflow = "hidden";
}

function closeMenu() {
    navMenu.classList.remove("active");
    backdrop.classList.remove("active");

    openMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";

    document.body.style.overflow = "";
}

function toggleMenu() {
    const isOpen = navMenu.classList.contains("active");
    isOpen ? closeMenu() : openMenu();
}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

menuButton.addEventListener("click", toggleMenu);

backdrop.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
            closeMenu();
        }
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
        closeMenu();
    }
});


/* =========================================================
   RESET ON RESIZE (avoid mobile menu state stuck on desktop)
   ========================================================= */

window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
        closeMenu();
    }
});


/* =========================================================
   AUTH HELPERS
   ========================================================= */

function removeExistingPopup() {
    const existing = document.querySelector(".modal-overlay");
    if (existing) existing.remove();
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getNameFromEmail(email) {
    const localPart = email.split("@")[0] || "Traveler";

    const cleaned = localPart
        .replace(/[._-]+/g, " ")
        .trim();

    const name = cleaned
        .split(" ")
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return name || "Traveler";
}

function showLoginError(modal, message) {
    let errorEl = modal.querySelector(".login-error");

    if (!errorEl) {
        errorEl = document.createElement("div");
        errorEl.className = "login-error";
        errorEl.innerHTML =
            `<i class="fa-solid fa-circle-exclamation"></i><span></span>`;

        const form = modal.querySelector("form");
        form.parentNode.insertBefore(errorEl, form);
    }

    errorEl.querySelector("span").textContent = message;
}

function showNotification(message) {
    const existingNotif = document.querySelector(".travel-notification");
    if (existingNotif) existingNotif.remove();

    const notif = document.createElement("div");
    notif.className = "travel-notification";
    notif.textContent = message;

    document.body.appendChild(notif);

    setTimeout(() => notif.remove(), 2500);
}


/* =========================================================
   LOGIN MODAL
   ========================================================= */

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


/* =========================================================
   REGISTER MODAL
   ========================================================= */

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


/* =========================================================
   UPDATE LOGIN BUTTON
   ========================================================= */

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


/* =========================================================
   RESTORE LOGIN BUTTON
   ========================================================= */

function restoreLoginButton() {
    if (!signInButton) return;

    signInButton.textContent = "Sign in/register";

    signInButton.classList.remove("user-avatar");

    signInButton.removeAttribute("title");
    signInButton.removeAttribute("aria-label");
}


/* =========================================================
   RESTORE LOGGED-IN USER
   ========================================================= */

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


/* =========================================================
   SIGN-IN BUTTON WIRING
   ========================================================= */

/* =========================================================
   BOOKINGS BADGE
   ========================================================= */

function updateBookingsBadge() {
    const badge = document.getElementById("bookings-badge");
    if (!badge) return;

    let bookings = [];

    try {
        bookings = JSON.parse(localStorage.getItem("travelEaseBookings") || "[]");
    } catch (error) {
        bookings = [];
    }

    if (bookings.length > 0) {
        badge.textContent = String(bookings.length);
        badge.hidden = false;
    } else {
        badge.hidden = true;
    }
}

if (signInButton) {
    signInButton.addEventListener("click", () => {
        const isLoggedIn = signInButton.classList.contains("user-avatar");

        if (isLoggedIn) {
            localStorage.removeItem("travelEaseUser");
            sessionStorage.removeItem("travelEaseUser");

            restoreLoginButton();

            showNotification("You have been logged out.");
        } else {
            showLoginModal();
        }
    });
}

restoreLoggedInUser();
updateBookingsBadge();


/* =========================================================
   HOTEL SEARCH — location, dates, guests
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const NIGERIA_STATES = [
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
        "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
        "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna",
        "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
        "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
        "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
        "FCT — Abuja"
    ];

    const MONTH_NAMES = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];


    /* ---------- generic dropdown helpers ---------- */

    const allDropdowns = () =>
        document.querySelectorAll(".location-dropdown.open, .date-dropdown.open, .pax-dropdown.open");

    function closeAllDropdowns(except) {
        allDropdowns().forEach((el) => {
            if (el !== except) el.classList.remove("open");
        });
    }

    function positionDropdown(field, dropdown) {
        dropdown.classList.remove("align-right");
        const rect = field.getBoundingClientRect();
        const overflowsRight = rect.left + dropdown.offsetWidth > window.innerWidth - 12;
        if (overflowsRight) dropdown.classList.add("align-right");
    }

    document.addEventListener("click", (e) => {
        const insideField = e.target.closest(".hotel-field");
        if (!insideField) closeAllDropdowns();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeAllDropdowns();
    });


    /* =====================================================
       LOCATION FIELD
       ===================================================== */

    const locationField = document.getElementById("hotel-location-field");
    const locationBtn = document.getElementById("hotel-location-btn");
    const locationValue = document.getElementById("hotel-location-value");
    const locationClearBtn = document.getElementById("hotel-location-clear");
    const locationDropdown = document.getElementById("hotel-location-dropdown");

    if (locationField && locationDropdown) {

        NIGERIA_STATES.forEach((state) => {
            const optBtn = document.createElement("button");
            optBtn.type = "button";
            optBtn.className = "location-option";
            optBtn.textContent = state;
            if (state === locationValue.textContent.trim()) {
                optBtn.classList.add("selected");
            }

            optBtn.addEventListener("click", () => {
                locationValue.textContent = state;
                locationDropdown
                    .querySelectorAll(".location-option")
                    .forEach((o) => o.classList.remove("selected"));
                optBtn.classList.add("selected");
                locationDropdown.classList.remove("open");
            });

            locationDropdown.appendChild(optBtn);
        });

        locationBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const willOpen = !locationDropdown.classList.contains("open");
            closeAllDropdowns(locationDropdown);
            locationDropdown.classList.toggle("open", willOpen);
            if (willOpen) positionDropdown(locationField, locationDropdown);
        });

        locationClearBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            locationValue.textContent = "Search destinations";
            locationDropdown
                .querySelectorAll(".location-option")
                .forEach((o) => o.classList.remove("selected"));
        });
    }


    /* =====================================================
       DATE RANGE FIELD
       ===================================================== */

    const datesField = document.getElementById("hotel-dates-field");
    const datesBtn = document.getElementById("hotel-dates-btn");
    const checkinValueEl = document.getElementById("hotel-checkin-value");
    const checkoutValueEl = document.getElementById("hotel-checkout-value");
    const nightBadge = document.getElementById("hotel-night-badge");
    const dateDropdown = document.getElementById("hotel-date-dropdown");

    if (datesField && dateDropdown) {

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // default range mirrors the field's starting text: today -> tomorrow
        let checkIn = new Date(today);
        let checkOut = new Date(today);
        checkOut.setDate(checkOut.getDate() + 1);

        let viewYear = checkIn.getFullYear();
        let viewMonth = checkIn.getMonth();

        function formatShort(date) {
            return date.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric"
            });
        }

        function sameDay(a, b) {
            return a && b &&
                a.getFullYear() === b.getFullYear() &&
                a.getMonth() === b.getMonth() &&
                a.getDate() === b.getDate();
        }

        function updateDisplay() {
            checkinValueEl.textContent = formatShort(checkIn);

            if (checkOut) {
                checkoutValueEl.textContent = formatShort(checkOut);
                const nights = Math.round((checkOut - checkIn) / 86400000);
                nightBadge.textContent = nights === 1 ? "1 night" : `${nights} nights`;
                nightBadge.classList.remove("hidden");
            } else {
                checkoutValueEl.textContent = "Check-out";
                nightBadge.classList.add("hidden");
            }
        }

        function renderCalendar() {
            dateDropdown.innerHTML = "";

            const header = document.createElement("div");
            header.className = "cal-header";

            const prevBtn = document.createElement("button");
            prevBtn.type = "button";
            prevBtn.className = "cal-nav-btn";
            prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
            const isCurrentMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth();
            prevBtn.disabled = isCurrentMonth;
            prevBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                viewMonth -= 1;
                if (viewMonth < 0) { viewMonth = 11; viewYear -= 1; }
                renderCalendar();
            });

            const nextBtn = document.createElement("button");
            nextBtn.type = "button";
            nextBtn.className = "cal-nav-btn";
            nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
            nextBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                viewMonth += 1;
                if (viewMonth > 11) { viewMonth = 0; viewYear += 1; }
                renderCalendar();
            });

            const label = document.createElement("span");
            label.className = "cal-month-label";
            label.textContent = `${MONTH_NAMES[viewMonth]} ${viewYear}`;

            header.appendChild(prevBtn);
            header.appendChild(label);
            header.appendChild(nextBtn);
            dateDropdown.appendChild(header);

            const weekdaysRow = document.createElement("div");
            weekdaysRow.className = "cal-weekdays";
            WEEKDAY_LABELS.forEach((w) => {
                const span = document.createElement("span");
                span.textContent = w;
                weekdaysRow.appendChild(span);
            });
            dateDropdown.appendChild(weekdaysRow);

            const daysGrid = document.createElement("div");
            daysGrid.className = "cal-days";

            const firstOfMonth = new Date(viewYear, viewMonth, 1);
            const startOffset = firstOfMonth.getDay();
            const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

            for (let i = 0; i < startOffset; i++) {
                const empty = document.createElement("button");
                empty.type = "button";
                empty.className = "cal-day empty";
                empty.disabled = true;
                daysGrid.appendChild(empty);
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const cellDate = new Date(viewYear, viewMonth, day);
                const dayBtn = document.createElement("button");
                dayBtn.type = "button";
                dayBtn.className = "cal-day";
                dayBtn.textContent = String(day);

                if (cellDate < today) {
                    dayBtn.disabled = true;
                } else {
                    if (sameDay(cellDate, checkIn)) dayBtn.classList.add("range-start");
                    if (checkOut && sameDay(cellDate, checkOut)) dayBtn.classList.add("range-end");
                    if (checkOut && cellDate > checkIn && cellDate < checkOut) {
                        dayBtn.classList.add("in-range");
                    }

                    dayBtn.addEventListener("click", (e) => {
                        e.stopPropagation();

                        if (!checkOut || cellDate <= checkIn) {
                            checkIn = cellDate;
                            checkOut = null;
                        } else {
                            checkOut = cellDate;
                        }

                        updateDisplay();
                        renderCalendar();
                    });
                }

                daysGrid.appendChild(dayBtn);
            }

            dateDropdown.appendChild(daysGrid);

            const footer = document.createElement("div");
            footer.className = "cal-footer";

            const nightsLabel = document.createElement("span");
            nightsLabel.className = "cal-nights-label";
            nightsLabel.textContent = checkOut
                ? `${Math.round((checkOut - checkIn) / 86400000)} night(s) selected`
                : "Select a check-out date";
            footer.appendChild(nightsLabel);

            const doneBtn = document.createElement("button");
            doneBtn.type = "button";
            doneBtn.className = "cal-done";
            doneBtn.textContent = "Done";
            doneBtn.disabled = !checkOut;
            doneBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                dateDropdown.classList.remove("open");
            });
            footer.appendChild(doneBtn);

            dateDropdown.appendChild(footer);
        }

        updateDisplay();
        renderCalendar();

        datesBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const willOpen = !dateDropdown.classList.contains("open");
            closeAllDropdowns(dateDropdown);
            if (willOpen) {
                viewYear = checkIn.getFullYear();
                viewMonth = checkIn.getMonth();
                renderCalendar();
            }
            dateDropdown.classList.toggle("open", willOpen);
            if (willOpen) positionDropdown(datesField, dateDropdown);
        });

        dateDropdown.addEventListener("click", (e) => e.stopPropagation());

        // expose for the search button below
        datesField._getRange = () => ({ checkIn, checkOut });
    }


    /* =====================================================
       GUESTS FIELD
       ===================================================== */

    const guestsField = document.getElementById("hotel-guests-field");
    const guestsBtn = document.getElementById("hotel-guests-btn");
    const guestsDropdown = document.getElementById("hotel-guests-dropdown");
    const doneBtn = document.getElementById("hotel-guests-done");

    if (guestsField && guestsDropdown) {

        const limits = {
            rooms: { min: 1, max: 8 },
            adults: { min: 1, max: 16 },
            children: { min: 0, max: 10 }
        };

        const counts = { rooms: 1, adults: 2, children: 0 };

        const countEls = {
            rooms: document.getElementById("hotel-rooms-count"),
            adults: document.getElementById("hotel-adults-count"),
            children: document.getElementById("hotel-children-count")
        };

        function pluralize(n, word) {
            return `${n} ${word}${n === 1 ? "" : "s"}`;
        }

        function updateGuestsDisplay() {
            guestsBtn.textContent =
                `${pluralize(counts.rooms, "room")}, ${pluralize(counts.adults, "adult")}, ${pluralize(counts.children, "child").replace("childs", "children")}`;
        }

        function updateStepperButtons() {
            guestsDropdown.querySelectorAll(".pax-step-btn").forEach((btn) => {
                const field = btn.dataset.field;
                const action = btn.dataset.action;
                const { min, max } = limits[field];
                if (action === "dec") btn.disabled = counts[field] <= min;
                if (action === "inc") btn.disabled = counts[field] >= max;
            });
        }

        guestsDropdown.querySelectorAll(".pax-step-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const field = btn.dataset.field;
                const action = btn.dataset.action;
                const { min, max } = limits[field];

                if (action === "inc" && counts[field] < max) counts[field] += 1;
                if (action === "dec" && counts[field] > min) counts[field] -= 1;

                countEls[field].textContent = counts[field];
                updateGuestsDisplay();
                updateStepperButtons();
            });
        });

        guestsBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const willOpen = !guestsDropdown.classList.contains("open");
            closeAllDropdowns(guestsDropdown);
            guestsDropdown.classList.toggle("open", willOpen);
            if (willOpen) {
                updateStepperButtons();
                positionDropdown(guestsField, guestsDropdown);
            }
        });

        guestsDropdown.addEventListener("click", (e) => e.stopPropagation());

        if (doneBtn) {
            doneBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                guestsDropdown.classList.remove("open");
            });
        }

        updateGuestsDisplay();
        updateStepperButtons();

        guestsField._getCounts = () => ({ ...counts });
    }


    /* =====================================================
       SCROLLABLE HOTEL CARD ROWS
       ===================================================== */

    document.querySelectorAll(".hotel-scroll-wrap").forEach((wrap) => {

        const track = wrap.querySelector(".hotel-cards");
        const leftBtn = wrap.querySelector(".scroll-left");
        const rightBtn = wrap.querySelector(".scroll-right");

        if (!track) return;

        function scrollByCards(direction) {
            const card = track.querySelector(".hotel-card");
            const cardWidth = card
                ? card.getBoundingClientRect().width + 16
                : 300;
            track.scrollBy({ left: direction * cardWidth * 2, behavior: "smooth" });
        }

        function updateButtons() {
            const maxScroll = track.scrollWidth - track.clientWidth - 2;
            if (leftBtn) leftBtn.disabled = track.scrollLeft <= 0;
            if (rightBtn) rightBtn.disabled = track.scrollLeft >= maxScroll;
        }

        if (leftBtn) {
            leftBtn.addEventListener("click", () => scrollByCards(-1));
        }

        if (rightBtn) {
            rightBtn.addEventListener("click", () => scrollByCards(1));
        }

        track.addEventListener("scroll", updateButtons);
        window.addEventListener("resize", updateButtons);
        updateButtons();

    });


    /* =====================================================
       HOTEL CARD → DETAILS PAGE
       ===================================================== */

    document.querySelectorAll(".hotel-card[data-hotel]").forEach((card) => {

        function goToDetails() {
            const slug = card.dataset.hotel;
            window.location.href = `hotel-details.html?hotel=${encodeURIComponent(slug)}`;
        }

        card.addEventListener("click", goToDetails);

        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                goToDetails();
            }
        });

    });


    /* =====================================================
       SEARCH RESULTS — filter HOTELS by state
       ===================================================== */

    const searchResultsSection = document.getElementById("search-results-section");
    const searchResultsGrid = document.getElementById("search-results-grid");
    const searchResultsTitle = document.getElementById("search-results-title");
    const browseSections = document.getElementById("hotel-browse-sections");
    const clearSearchBtn = document.getElementById("clear-search-btn");

    function buildHotelCard(slug, hotel) {
        const article = document.createElement("article");
        article.className = "hotel-card";
        article.dataset.hotel = slug;
        article.tabIndex = 0;
        article.setAttribute("role", "button");
        article.setAttribute("aria-label", `View ${hotel.name}`);

        const starIcons = '<i class="fa-solid fa-star"></i>'.repeat(hotel.stars);

        article.innerHTML = `
            <div class="hotel-card-image">
                <img class="hotel-card-img" src="${hotel.image}" alt="${hotel.name}">
                <div class="hotel-card-rating">
                    <span class="rating-score">${hotel.score}/10</span>
                    <span class="rating-reviews">${hotel.reviews} reviews</span>
                </div>
            </div>
            <div class="hotel-card-body">
                <h3 class="hotel-card-name">
                    ${hotel.name}
                    <span class="hotel-stars">${starIcons}</span>
                </h3>
                <p class="hotel-card-address">${hotel.address}</p>
                <p class="hotel-card-price"><span>From</span> <strong>₦${hotel.pricePerNight.toLocaleString()}</strong></p>
            </div>
        `;

        function goToDetails() {
            window.location.href = `hotel-details.html?hotel=${encodeURIComponent(slug)}`;
        }

        article.addEventListener("click", goToDetails);

        article.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                goToDetails();
            }
        });

        return article;
    }


    /* =====================================================
       HOMEPAGE BROWSE SECTIONS — populated from HOTELS
       (so the "Top luxury", "Budget-friendly" and "Trending
       guest houses" rows reflect the full dataset, not just
       a fixed set of hardcoded cards)
       ===================================================== */

    function renderHotelTrack(containerId, hotelList) {
        const track = document.getElementById(containerId);
        if (!track) return;

        track.innerHTML = "";
        hotelList.forEach(([slug, hotel]) => {
            track.appendChild(buildHotelCard(slug, hotel));
        });
    }

    function reviewsToNumber(reviews) {
        return parseInt(String(reviews).replace(/,/g, ""), 10) || 0;
    }

    function renderBrowseSections() {
        if (typeof HOTELS === "undefined") return;

        const all = Object.entries(HOTELS);
        const MAX_CARDS = 20;

        const luxury = all
            .filter(([, hotel]) => hotel.stars === 5)
            .sort((a, b) => parseFloat(b[1].score) - parseFloat(a[1].score))
            .slice(0, MAX_CARDS);

        const budget = all
            .filter(([, hotel]) => hotel.stars <= 2)
            .sort((a, b) => a[1].pricePerNight - b[1].pricePerNight)
            .slice(0, MAX_CARDS);

        const guestHouseRegex = /guest house|lodge|hostel|inn\b/i;
        const trending = all
            .filter(([, hotel]) => guestHouseRegex.test(hotel.name))
            .sort((a, b) => reviewsToNumber(b[1].reviews) - reviewsToNumber(a[1].reviews))
            .slice(0, MAX_CARDS);

        renderHotelTrack("luxury-hotels-track", luxury);
        renderHotelTrack("budget-hotels-track", budget);
        renderHotelTrack("trending-hotels-track", trending);

        // Cards just changed size/count — refresh the scroll-arrow state
        // for every row (the resize listener already wired up above
        // calls updateButtons() for each .hotel-scroll-wrap).
        window.dispatchEvent(new Event("resize"));
    }

    renderBrowseSections();


    function runHotelSearch(destination) {
        if (typeof HOTELS === "undefined" || !searchResultsGrid) return;

        const matches = Object.entries(HOTELS).filter(
            ([, hotel]) => hotel.state === destination
        );

        if (searchResultsTitle) {
            searchResultsTitle.textContent = matches.length
                ? `${matches.length} hotel${matches.length === 1 ? "" : "s"} found in ${destination}`
                : `No hotels found in ${destination} yet`;
        }

        searchResultsGrid.innerHTML = "";

        if (matches.length === 0) {
            const empty = document.createElement("p");
            empty.className = "search-results-empty";
            empty.textContent =
                `We don't have listings in ${destination} yet — try Lagos, FCT — Abuja, Rivers, Oyo, Kano, Kaduna, Delta, Enugu, Ogun, Cross River, or Akwa Ibom.`;
            searchResultsGrid.appendChild(empty);
        } else {
            matches.forEach(([slug, hotel]) => {
                searchResultsGrid.appendChild(buildHotelCard(slug, hotel));
            });
        }

        if (browseSections) browseSections.style.display = "none";
        if (searchResultsSection) {
            searchResultsSection.classList.add("open");
            searchResultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", () => {
            if (searchResultsSection) searchResultsSection.classList.remove("open");
            if (browseSections) browseSections.style.display = "";
        });
    }


    /* =====================================================
       SEARCH BUTTON
       ===================================================== */

    const searchBtn = document.getElementById("hotel-search-btn");

    if (searchBtn) {
        searchBtn.addEventListener("click", () => {
             const destination = locationValue ? locationValue.textContent.trim() : "";
            const range = datesField && datesField._getRange ? datesField._getRange() : null;
            const guests = guestsField && guestsField._getCounts ? guestsField._getCounts() : null;

            // Wire this up to your real search/navigation logic.
            console.log("Hotel search:", { destination, range, guests });

            if (!destination || destination === "Search destinations") {
                showNotification("Choose a destination to search hotels.");
                return;
            }

            runHotelSearch(destination);
        });
    }

    /* =========================================================
       PREFILL FROM TRIPCO SEARCH
       (e.g. hotel.html?city=Lagos, sent by the TravelEase hub)
       ========================================================= */

    function prefillCityFromQuery() {
        const params = new URLSearchParams(window.location.search);
        const cityParam = params.get("city");

        if (!cityParam || !locationDropdown) return;

        const target = cityParam.toLowerCase();

        const option = Array.from(
            locationDropdown.querySelectorAll(".location-option")
        ).find((button) => {
            const label = button.textContent.trim().toLowerCase();
            return (
                label === target ||
                label.includes(target) ||
                target.includes(label)
            );
        });

        if (window.TELoader) {
            window.TELoader.show(`Finding hotels in ${cityParam}...`);
        }

        if (option) {
            option.click();
        }

        setTimeout(() => {
            searchBtn?.click();

            if (window.TELoader) {
                window.setTimeout(() => window.TELoader.hide(), 300);
            }
        }, 150);
    }

    prefillCityFromQuery();

});
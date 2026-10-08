/* =========================================================
   HOTEL DETAILS PAGE — content fill + booking panel
   Depends on: hotel-data.js (HOTELS), hotel.js (removeExistingPopup,
   showNotification) — load in that order.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const MONTH_NAMES = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    const AMENITY_ICONS = {
        "Free Wi-Fi": "fa-wifi",
        "Outdoor Pool": "fa-person-swimming",
        "Private Beach Access": "fa-umbrella-beach",
        "Spa & Wellness Center": "fa-spa",
        "Airport Shuttle": "fa-shuttle-van",
        "Fitness Center": "fa-dumbbell",
        "Fine Dining Restaurant": "fa-utensils",
        "Room Service": "fa-bell-concierge",
        "Valet Parking": "fa-square-parking",
        "Business Center": "fa-briefcase",
        "Concierge Service": "fa-concierge-bell",
        "Shared Kitchen": "fa-kitchen-set",
        "Common Lounge": "fa-couch",
        "Luggage Storage": "fa-suitcase",
        "24-Hour Front Desk": "fa-clock",
        "Air Conditioning": "fa-snowflake",
        "Laundry Service": "fa-shirt",
        "Bicycle Rental": "fa-bicycle",
        "Rooftop Terrace": "fa-umbrella-beach",
        "Bar": "fa-martini-glass",
        "Non-smoking Rooms": "fa-ban-smoking",
        "Family Rooms": "fa-people-roof",
        "Daily Housekeeping": "fa-broom",
        "Airport Transfer (fee)": "fa-plane-departure"
    };


    /* =====================================================
       LOAD HOTEL FROM URL
       ===================================================== */

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("hotel");
    const hotel = (typeof HOTELS !== "undefined" && slug) ? HOTELS[slug] : null;

    const heroImg = document.getElementById("details-hero-img");
    const nameEl = document.getElementById("details-name");
    const scoreEl = document.getElementById("details-score");
    const reviewsEl = document.getElementById("details-reviews");
    const starsEl = document.getElementById("details-stars");
    const addressTextEl = document.getElementById("details-address-text");
    const descriptionEl = document.getElementById("details-description");
    const amenitiesEl = document.getElementById("details-amenities");
    const pricePerNightEl = document.getElementById("booking-price-per-night");
    const reserveBtn = document.getElementById("booking-reserve-btn");

    if (!hotel) {

        if (nameEl) nameEl.textContent = "Hotel not found";

        if (descriptionEl) {
            descriptionEl.textContent =
                "We couldn't find details for this hotel. Please go back and choose another one.";
        }

        if (reserveBtn) reserveBtn.disabled = true;

    } else {

        document.title = `${hotel.name} — Travel Ease`;

        if (heroImg) {
            heroImg.src = hotel.image;
            heroImg.alt = hotel.name;
        }

        if (nameEl) nameEl.textContent = hotel.name;
        if (scoreEl) scoreEl.textContent = `${hotel.score}/10`;
        if (reviewsEl) reviewsEl.textContent = `${hotel.reviews} reviews`;

        if (starsEl) {
            starsEl.innerHTML = '<i class="fa-solid fa-star"></i>'.repeat(hotel.stars);
        }

        if (addressTextEl) addressTextEl.textContent = hotel.address;
        if (descriptionEl) descriptionEl.textContent = hotel.description;

        if (amenitiesEl) {
            amenitiesEl.innerHTML = "";

            hotel.amenities.forEach((amenity) => {
                const icon = AMENITY_ICONS[amenity] || "fa-circle-check";

                const item = document.createElement("div");
                item.className = "amenity-item";
                item.innerHTML =
                    `<i class="fa-solid ${icon}"></i><span>${amenity}</span>`;

                amenitiesEl.appendChild(item);
            });
        }

        if (pricePerNightEl) {
            pricePerNightEl.textContent = `₦${hotel.pricePerNight.toLocaleString()}`;
        }
    }


    /* =====================================================
       GENERIC DROPDOWN HELPERS (booking panel)
       ===================================================== */

    function closeAllBookingDropdowns(except) {
        document
            .querySelectorAll(".date-dropdown.open, .pax-dropdown.open")
            .forEach((el) => {
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
        const insideField = e.target.closest(".booking-field");
        if (!insideField) closeAllBookingDropdowns();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeAllBookingDropdowns();
    });


    /* =====================================================
       DATE RANGE FIELD (booking panel)
       ===================================================== */

    const datesField = document.getElementById("booking-dates-field");
    const datesBtn = document.getElementById("booking-dates-btn");
    const checkinValueEl = document.getElementById("booking-checkin-value");
    const checkoutValueEl = document.getElementById("booking-checkout-value");
    const dateDropdown = document.getElementById("booking-date-dropdown");

    let checkIn = null;
    let checkOut = null;

    if (datesField && dateDropdown) {

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let viewYear = today.getFullYear();
        let viewMonth = today.getMonth();

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
            checkinValueEl.textContent = checkIn ? formatShort(checkIn) : "Select date";
            checkoutValueEl.textContent = checkOut ? formatShort(checkOut) : "Select date";
            updateBookingSummary();
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
                    if (checkIn && checkOut && cellDate > checkIn && cellDate < checkOut) {
                        dayBtn.classList.add("in-range");
                    }

                    dayBtn.addEventListener("click", (e) => {
                        e.stopPropagation();

                        if (!checkIn || (checkIn && checkOut) || cellDate <= checkIn) {
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
            nightsLabel.textContent = (checkIn && checkOut)
                ? `${Math.round((checkOut - checkIn) / 86400000)} night(s) selected`
                : "Select a check-out date";
            footer.appendChild(nightsLabel);

            const doneBtn = document.createElement("button");
            doneBtn.type = "button";
            doneBtn.className = "cal-done";
            doneBtn.textContent = "Done";
            doneBtn.disabled = !(checkIn && checkOut);
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
            closeAllBookingDropdowns(dateDropdown);
            if (willOpen) {
                viewYear = (checkIn || today).getFullYear();
                viewMonth = (checkIn || today).getMonth();
                renderCalendar();
            }
            dateDropdown.classList.toggle("open", willOpen);
            if (willOpen) positionDropdown(datesField, dateDropdown);
        });

        dateDropdown.addEventListener("click", (e) => e.stopPropagation());
    }


    /* =====================================================
       GUESTS FIELD (booking panel)
       ===================================================== */

    const guestsField = document.getElementById("booking-guests-field");
    const guestsBtn = document.getElementById("booking-guests-btn");
    const guestsDropdown = document.getElementById("booking-guests-dropdown");
    const guestsDoneBtn = document.getElementById("booking-guests-done");

    const guestCounts = { rooms: 1, adults: 2, children: 0 };

    if (guestsField && guestsDropdown) {

        const limits = {
            rooms: { min: 1, max: 8 },
            adults: { min: 1, max: 16 },
            children: { min: 0, max: 10 }
        };

        const countEls = {
            rooms: document.getElementById("booking-rooms-count"),
            adults: document.getElementById("booking-adults-count"),
            children: document.getElementById("booking-children-count")
        };

        function pluralize(n, word) {
            return `${n} ${word}${n === 1 ? "" : "s"}`;
        }

        function updateGuestsDisplay() {
            guestsBtn.textContent =
                `${pluralize(guestCounts.rooms, "room")}, ${pluralize(guestCounts.adults, "adult")}, ${pluralize(guestCounts.children, "child").replace("childs", "children")}`;

            updateBookingSummary();
        }

        function updateStepperButtons() {
            guestsDropdown.querySelectorAll(".pax-step-btn").forEach((btn) => {
                const field = btn.dataset.field;
                const action = btn.dataset.action;
                const { min, max } = limits[field];
                if (action === "dec") btn.disabled = guestCounts[field] <= min;
                if (action === "inc") btn.disabled = guestCounts[field] >= max;
            });
        }

        guestsDropdown.querySelectorAll(".pax-step-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const field = btn.dataset.field;
                const action = btn.dataset.action;
                const { min, max } = limits[field];

                if (action === "inc" && guestCounts[field] < max) guestCounts[field] += 1;
                if (action === "dec" && guestCounts[field] > min) guestCounts[field] -= 1;

                countEls[field].textContent = guestCounts[field];
                updateGuestsDisplay();
                updateStepperButtons();
            });
        });

        guestsBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const willOpen = !guestsDropdown.classList.contains("open");
            closeAllBookingDropdowns(guestsDropdown);
            guestsDropdown.classList.toggle("open", willOpen);
            if (willOpen) {
                updateStepperButtons();
                positionDropdown(guestsField, guestsDropdown);
            }
        });

        guestsDropdown.addEventListener("click", (e) => e.stopPropagation());

        if (guestsDoneBtn) {
            guestsDoneBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                guestsDropdown.classList.remove("open");
            });
        }

        updateGuestsDisplay();
        updateStepperButtons();
    }


    /* =====================================================
       PRICE SUMMARY
       ===================================================== */

    function updateBookingSummary() {
        const nightsLabelEl = document.getElementById("booking-nights-label");
        const subtotalEl = document.getElementById("booking-subtotal");
        const totalEl = document.getElementById("booking-total");

        if (!hotel || !nightsLabelEl) return;

        if (checkIn && checkOut) {
            const nights = Math.round((checkOut - checkIn) / 86400000);
            const rooms = guestCounts.rooms;
            const total = hotel.pricePerNight * nights * rooms;

            nightsLabelEl.textContent =
                `₦${hotel.pricePerNight.toLocaleString()} x ${nights} night${nights === 1 ? "" : "s"} x ${rooms} room${rooms === 1 ? "" : "s"}`;
            subtotalEl.textContent = `₦${total.toLocaleString()}`;
            totalEl.textContent = `₦${total.toLocaleString()}`;
        } else {
            nightsLabelEl.textContent = "Select dates to see total";
            subtotalEl.textContent = "";
            totalEl.textContent = `₦${hotel.pricePerNight.toLocaleString()}`;
        }
    }

    updateBookingSummary();


    /* =====================================================
       RESERVE → PAYMENT PAGE
       ===================================================== */

    if (reserveBtn) {
        reserveBtn.addEventListener("click", () => {

            if (!hotel) return;

            if (!checkIn || !checkOut) {
                showNotification("Please select your check-in and check-out dates.");
                return;
            }

            const toISODate = (date) => date.toISOString().split("T")[0];

            const paymentParams = new URLSearchParams({
                hotel: slug,
                checkin: toISODate(checkIn),
                checkout: toISODate(checkOut),
                rooms: String(guestCounts.rooms),
                adults: String(guestCounts.adults),
                children: String(guestCounts.children)
            });

            window.location.href = `payment.html?${paymentParams.toString()}`;
        });
    }

}); 
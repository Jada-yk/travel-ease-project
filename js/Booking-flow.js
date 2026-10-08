/* =========================================================
   BOOKING FLOW — shared across passenger-info, review-confirm,
   payment-options, card-payment, and receipt pages.

   Handles: nav menu toggle, signed-in avatar display, toast
   notifications, the sessionStorage "draft" booking object,
   and the step-progress / flight-summary renderers reused on
   every step.
   ========================================================= */

const BookingFlow = (function () {

    const DRAFT_KEY = "flightBookingDraft";
    const BOOKINGS_KEY = "travelEaseFlightBookings";


    /* ---------- nav menu (hamburger) ---------- */

    function initNavMenu() {
        const menuButton = document.getElementById("menu-button");
        const navMenu = document.getElementById("nav-menu");
        const openMenuIcon = document.getElementById("open-menu");
        const closeMenuIcon = document.getElementById("close-menu");
        const backdrop = document.getElementById("backdrop");

        if (!menuButton || !navMenu) return;

        function openMenu() {
            navMenu.classList.add("active");
            if (backdrop) backdrop.classList.add("active");
            if (openMenuIcon) openMenuIcon.style.display = "none";
            if (closeMenuIcon) closeMenuIcon.style.display = "block";
            document.body.style.overflow = "hidden";
        }

        function closeMenu() {
            navMenu.classList.remove("active");
            if (backdrop) backdrop.classList.remove("active");
            if (openMenuIcon) openMenuIcon.style.display = "block";
            if (closeMenuIcon) closeMenuIcon.style.display = "none";
            document.body.style.overflow = "";
        }

        menuButton.addEventListener("click", () => {
            navMenu.classList.contains("active") ? closeMenu() : openMenu();
        });

        if (backdrop) backdrop.addEventListener("click", closeMenu);

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeMenu();
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) closeMenu();
        });
    }


    /* ---------- signed-in avatar display (read-only) ---------- */

    function initSignedInDisplay() {
        const signInButton = document.getElementById("sign-in-button");
        if (!signInButton) return;

        const userData =
            localStorage.getItem("travelEaseUser") ||
            sessionStorage.getItem("travelEaseUser");

        if (!userData) return;

        try {
            const user = JSON.parse(userData);
            if (!user || !user.loggedIn) return;

            const firstLetter = user.name.trim().charAt(0).toUpperCase() || "U";
            signInButton.textContent = firstLetter;
            signInButton.classList.add("user-avatar");
            signInButton.title = `Logged in as ${user.name}`;
        } catch (error) {
            /* ignore malformed stored user */
        }
    }


    /* ---------- toast notification ---------- */

    function showNotification(message) {
        const existing = document.querySelector(".travel-notification");
        if (existing) existing.remove();

        const notif = document.createElement("div");
        notif.className = "travel-notification";
        notif.textContent = message;

        document.body.appendChild(notif);

        setTimeout(() => notif.remove(), 2500);
    }


    /* ---------- draft booking (sessionStorage) ---------- */

    function getDraft() {
        try {
            return JSON.parse(sessionStorage.getItem(DRAFT_KEY) || "null");
        } catch (error) {
            return null;
        }
    }

    function saveDraft(draft) {
        sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    }

    function clearDraft() {
        sessionStorage.removeItem(DRAFT_KEY);
    }


    /* ---------- saved / paid bookings (localStorage) ---------- */

    function getBookings() {
        try {
            return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]");
        } catch (error) {
            return [];
        }
    }

    function saveBooking(booking) {
        const bookings = getBookings();
        bookings.push(booking);
        localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    }

    function getBookingByRef(ref) {
        return getBookings().find((b) => b.reference === ref) || null;
    }

    function generateReference() {
        const digits = Math.floor(1000000 + Math.random() * 9000000);
        return `TE${digits}`;
    }


    /* ---------- step progress renderer ---------- */

    const STEPS = ["Passenger Info", "Review & Confirm", "Payment", "Receipt"];

    function renderStepProgress(container, activeIndex) {
        if (!container) return;

        container.innerHTML = "";

        STEPS.forEach((label, index) => {
            const item = document.createElement("div");
            item.className = "step-progress-item";

            if (index < activeIndex) item.classList.add("done");
            if (index === activeIndex) item.classList.add("active");

            const circle = document.createElement("div");
            circle.className = "step-progress-circle";
            circle.innerHTML = index < activeIndex
                ? '<i class="fa-solid fa-check"></i>'
                : String(index + 1);

            const labelEl = document.createElement("div");
            labelEl.className = "step-progress-label";
            labelEl.textContent = label;

            item.appendChild(circle);
            item.appendChild(labelEl);
            container.appendChild(item);
        });
    }


    /* ---------- flight summary renderer ---------- */

    function renderFlightSummary(container, flight) {
        if (!container || !flight) return;

        container.innerHTML = `
            <div class="flight-summary-route">
                <span>${flight.fromState} (${flight.fromCode})</span>
                <i class="fa-solid fa-arrow-right"></i>
                <span>${flight.toState} (${flight.toCode})</span>
            </div>
            <div class="flight-summary-meta">
                <span><strong>${flight.airline}</strong></span>
                <span>${formatDate(flight.travelDate)}</span>
                <span>${flight.departureTime} – ${flight.arrivalTime}</span>
                <span>${flight.duration} · ${flight.stops}</span>
                <span>${flight.cabinClass}</span>
            </div>
            <div class="flight-summary-price">
                1 Passenger · <strong>₦${flight.price.toLocaleString()}</strong>
            </div>
        `;
    }

    function formatDate(isoDate) {
        if (!isoDate) return "";
        const date = new Date(`${isoDate}T00:00:00`);
        if (isNaN(date)) return isoDate;
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    }


    /* ---------- PDF receipt generation (jsPDF) ---------- */

    function money(amount) {
        // jsPDF's built-in fonts can't render the ₦ glyph, so the PDF
        // uses "NGN" — the on-screen HTML receipt still shows ₦ as normal.
        return `NGN ${amount.toLocaleString()}`;
    }

    // jsPDF only draws what it's told to draw — it can't copy the barcode
    // from the page. So we render a Code 128 barcode to an offscreen canvas
    // with JsBarcode and hand jsPDF the resulting PNG.
    function barcodeDataURL(text) {
        if (typeof JsBarcode === "undefined") return null;

        try {
            const canvas = document.createElement("canvas");
            JsBarcode(canvas, text, {
                format: "CODE128",
                displayValue: false,
                width: 3,
                height: 80,
                margin: 0,
                background: "#ffffff",
                lineColor: "#000000"
            });
            return canvas.toDataURL("image/png");
        } catch (error) {
            return null;
        }
    }

    function generateReceiptPDF(booking) {
        if (typeof window.jspdf === "undefined") {
            showNotification("The PDF library didn't load — check your connection and try again.");
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ unit: "pt", format: "a4" });

        const pageWidth = doc.internal.pageSize.getWidth();
        const marginX = 50;
        let y = 56;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.setTextColor(22, 105, 237);
        doc.text("Travel Ease", marginX, y);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(120, 120, 120);
        doc.text("Booking Receipt", pageWidth - marginX, y, { align: "right" });

        y += 12;
        doc.setDrawColor(225, 225, 225);
        doc.line(marginX, y, pageWidth - marginX, y);

        y += 26;
        doc.setFontSize(10);
        doc.setTextColor(90, 90, 90);
        doc.text(`Booking Reference: ${booking.reference}`, marginX, y);
        doc.text(
            `Booking Date: ${new Date(booking.bookedAt).toLocaleString("en-US")}`,
            pageWidth - marginX,
            y,
            { align: "right" }
        );

        y += 34;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(20, 20, 20);
        doc.text("Passenger", marginX, y);

        y += 18;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        doc.text(`Name: ${booking.passenger.fullName}`, marginX, y);
        y += 14;
        doc.text(`Passport: ${booking.passenger.passportNumber}`, marginX, y);
        y += 14;
        doc.text(`Email: ${booking.passenger.email}`, marginX, y);
        y += 14;
        doc.text(`Phone: ${booking.passenger.phoneCode} ${booking.passenger.phone}`, marginX, y);

        y += 34;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(20, 20, 20);
        doc.text("Flight Details", marginX, y);

        y += 18;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        doc.text(
            `${booking.flight.fromState} (${booking.flight.fromCode}) -> ${booking.flight.toState} (${booking.flight.toCode})`,
            marginX,
            y
        );
        y += 14;
        doc.text(`${booking.flight.airline} | ${formatDate(booking.flight.travelDate)}`, marginX, y);
        y += 14;
        doc.text(
            `${booking.flight.departureTime} - ${booking.flight.arrivalTime} (${booking.flight.duration})`,
            marginX,
            y
        );
        y += 14;
        doc.text(`${booking.flight.cabinClass} | ${booking.flight.stops}`, marginX, y);

        y += 30;
        doc.setDrawColor(225, 225, 225);
        doc.line(marginX, y, pageWidth - marginX, y);

        y += 26;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        doc.text("Base Fare", marginX, y);
        doc.text(money(booking.total), pageWidth - marginX, y, { align: "right" });

        y += 24;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(13);
        doc.setTextColor(20, 20, 20);
        doc.text("Total Paid", marginX, y);
        doc.text(money(booking.total), pageWidth - marginX, y, { align: "right" });

        /* ---- barcode ---- */
        y += 40;
        const barcode = barcodeDataURL(booking.reference);
        if (barcode) {
            doc.addImage(barcode, "PNG", marginX, y, 220, 50);
            y += 64;
            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            doc.setTextColor(90, 90, 90);
            doc.text(booking.reference, marginX, y);
            y += 30;
        } else {
            y += 10;
        }

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(160, 160, 160);
        doc.text("Thank you for choosing Travel Ease! Safe travels.", marginX, y);

        doc.save(`TravelEase-Receipt-${booking.reference}.pdf`);
    }


    /* ---------- init on every page ---------- */

    document.addEventListener("DOMContentLoaded", () => {
        initNavMenu();
        initSignedInDisplay();
    });


    return {
        getDraft,
        saveDraft,
        clearDraft,
        getBookings,
        saveBooking,
        getBookingByRef,
        generateReference,
        renderStepProgress,
        renderFlightSummary,
        formatDate,
        showNotification,
        generateReceiptPDF
    };

})();
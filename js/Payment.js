/* =========================================================
   PAYMENT PAGE
   Depends on: hotel-data.js (HOTELS), hotel.js (showNotification,
   updateBookingsBadge).

   Travel Ease doesn't take card payments here — it connects the
   guest with the hotel. This page shows the amount due and who
   the payment goes to, collects the guest's name and contact,
   then on confirmation saves the booking (so it shows up under
   My Bookings) and hands back a downloadable receipt the guest
   can present at check-in.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       READ BOOKING FROM URL
       ===================================================== */

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("hotel");
    const hotel = (typeof HOTELS !== "undefined" && slug) ? HOTELS[slug] : null;

    const backLink = document.getElementById("payment-back-link");

    if (!hotel) {
        showNotification("We couldn't find that booking. Please start again.");
        window.location.href = "hotel.html";
        return;
    }

    if (backLink) backLink.href = `hotel-details.html?hotel=${encodeURIComponent(slug)}`;

    const checkIn = params.get("checkin") ? new Date(`${params.get("checkin")}T00:00:00`) : null;
    const checkOut = params.get("checkout") ? new Date(`${params.get("checkout")}T00:00:00`) : null;
    const rooms = parseInt(params.get("rooms"), 10) || 1;
    const adults = parseInt(params.get("adults"), 10) || 1;
    const children = parseInt(params.get("children"), 10) || 0;

    const nights = (checkIn && checkOut)
        ? Math.max(1, Math.round((checkOut - checkIn) / 86400000))
        : 1;

    const total = hotel.pricePerNight * nights * rooms;

    function formatLong(date) {
        if (!date) return "—";
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    }

    function formatShort(date) {
        if (!date) return "—";
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    }

    function naira(amount) {
        return `₦${amount.toLocaleString()}`;
    }

    function pluralize(n, word) {
        return `${n} ${word}${n === 1 ? "" : "s"}`;
    }

    const guestsSummary =
        `${pluralize(rooms, "room")}, ${pluralize(adults, "adult")}, ${pluralize(children, "child").replace("childs", "children")}`;


    /* =====================================================
       BOOKING REFERENCE (stable across a page refresh)
       ===================================================== */

    function makeReference() {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        let code = "";
        for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
        return `TE-${code}`;
    }

    const refStorageKey = `te-booking-ref:${window.location.search}`;
    let bookingRef = sessionStorage.getItem(refStorageKey);
    if (!bookingRef) {
        bookingRef = makeReference();
        sessionStorage.setItem(refStorageKey, bookingRef);
    }


    /* =====================================================
       FILL SUMMARY CARD
       ===================================================== */

    const payToName = hotel.agentName || hotel.name;
    const payToPhone = (hotel.agentPhone || "").replace(/[^\d]/g, "");
    const payToBank = hotel.bankName || "";
    const payToAccountNumber = hotel.accountNumber || "";
    const payToAccountName = hotel.accountName || payToName;

    const summaryCard = document.getElementById("payment-summary-card");
    summaryCard.innerHTML = `
        <div class="payment-hotel-row">
            <img class="payment-hotel-img" src="${hotel.image}" alt="${hotel.name}">
            <div>
                <div class="payment-hotel-name">${hotel.name}</div>
                <div class="payment-hotel-address">${hotel.address}</div>
            </div>
        </div>

        <div class="payment-summary-meta">
            <div class="payment-summary-meta-item">
                Check-in
                <strong>${formatShort(checkIn)}</strong>
            </div>
            <div class="payment-summary-meta-item">
                Check-out
                <strong>${formatShort(checkOut)}</strong>
            </div>
            <div class="payment-summary-meta-item">
                Guests
                <strong>${guestsSummary}</strong>
            </div>
        </div>

        <div class="payment-summary-total-row">
            <span>Total (${pluralize(nights, "night")})</span>
            <span>${naira(total)}</span>
        </div>

        <div class="payment-pay-to">
            <i class="fa-solid fa-building-columns"></i>
            <div>
                <div class="payment-pay-to-label">Pay by bank transfer to</div>
                <div class="payment-pay-to-name">${payToBank ? `${payToBank} — ${payToAccountNumber}` : payToName}</div>
                <div class="payment-pay-to-phone">${payToAccountName}${payToPhone ? ` · +${payToPhone}` : ""}</div>
            </div>
        </div>

        <div class="payment-reference-row">
            <span>Booking reference</span>
            <strong>${bookingRef}</strong>
        </div>
    `;

    document.getElementById("pay-now-amount").textContent = naira(total);


    /* =====================================================
       FORM VALIDATION + ERROR DISPLAY
       ===================================================== */

    const errorContainer = document.getElementById("payment-error-container");

    function showFormError(message) {
        errorContainer.innerHTML =
            `<div class="login-error"><i class="fa-solid fa-circle-exclamation"></i><span>${message}</span></div>`;
    }

    function clearFormError() {
        errorContainer.innerHTML = "";
    }

    const guestNameInput = document.getElementById("guestName");
    const guestContactInput = document.getElementById("guestContact");
    const paymentForm = document.getElementById("paymentForm");


    /* =====================================================
       SUBMIT — SAVE BOOKING + SHOW SUCCESS
       ===================================================== */

    paymentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        clearFormError();

        const guestName = guestNameInput.value.trim();
        const guestContact = guestContactInput.value.trim();

        if (!guestName) {
            showFormError("Please enter the name for this booking.");
            guestNameInput.focus();
            return;
        }

        if (!guestContact) {
            showFormError("Please add a phone number or email so the hotel can reach you.");
            guestContactInput.focus();
            return;
        }

        const booking = {
            bookingRef,
            hotelSlug: slug,
            hotelImage: hotel.image,
            hotelName: hotel.name,
            hotelAddress: hotel.address,
            checkIn: params.get("checkin"),
            checkOut: params.get("checkout"),
            rooms,
            adults,
            children,
            total,
            guestName,
            guestContact,
            bookedAt: new Date().toISOString()
        };

        let bookings = [];
        try {
            bookings = JSON.parse(localStorage.getItem("travelEaseBookings") || "[]");
        } catch (error) {
            bookings = [];
        }
        bookings.push(booking);
        localStorage.setItem("travelEaseBookings", JSON.stringify(bookings));

        if (typeof updateBookingsBadge === "function") updateBookingsBadge();

        showSuccess(booking);
    });


    /* =====================================================
       SUCCESS VIEW
       ===================================================== */

    function showSuccess(booking) {
        const checkoutView = document.getElementById("payment-checkout-view");
        checkoutView.hidden = true;
        checkoutView.style.display = "none";

        const successView = document.getElementById("payment-success-view");
        successView.hidden = false;
        successView.style.display = "block";

        document.getElementById("payment-success-message").textContent =
            `Thanks, ${booking.guestName.split(" ")[0]}. Your stay at ${hotel.name} is confirmed.`;

        drawReceipt(booking);
    }


    /* =====================================================
       RECEIPT CANVAS
       ===================================================== */

    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        const words = text.split(" ");
        let line = "";
        let lines = 0;

        for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i] + " ";
            if (ctx.measureText(testLine).width > maxWidth && line !== "") {
                ctx.fillText(line, x, y + lines * lineHeight);
                line = words[i] + " ";
                lines++;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, x, y + lines * lineHeight);
        return lines + 1;
    }

    function fitText(ctx, text, maxWidth) {
        if (ctx.measureText(text).width <= maxWidth) return text;
        let clipped = text;
        while (clipped.length > 1 && ctx.measureText(clipped + "…").width > maxWidth) {
            clipped = clipped.slice(0, -1);
        }
        return clipped + "…";
    }

    function drawReceipt(booking) {
        const canvas = document.getElementById("receipt-canvas");
        const ctx = canvas.getContext("2d");
        const W = canvas.width;
        const H = canvas.height;
        const stubX = W - 250;

        ctx.clearRect(0, 0, W, H);

        // Main panel
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, W, H);

        // Header band
        ctx.fillStyle = "#12233b";
        ctx.fillRect(0, 0, W, 70);
        ctx.fillStyle = "#ffffff";
        ctx.font = "700 22px Poppins, Arial, sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillText("Travel Ease", 30, 35);
        ctx.font = "600 13px Poppins, Arial, sans-serif";
        ctx.fillStyle = "#c8d3e0";
        ctx.fillText("Booking Receipt", 30, 55);

        // Hotel name + address
        ctx.textBaseline = "alphabetic";
        ctx.fillStyle = "#12233b";
        ctx.font = "700 24px Poppins, Arial, sans-serif";
        ctx.fillText(hotel.name, 30, 115);

        ctx.fillStyle = "#666666";
        ctx.font = "400 13px Poppins, Arial, sans-serif";
        wrapText(ctx, hotel.address, 30, 138, stubX - 60, 17);

        // Divider
        ctx.strokeStyle = "#e7e0d1";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(30, 175);
        ctx.lineTo(stubX - 30, 175);
        ctx.stroke();

        // Detail grid
        const compactGuests = `${rooms} rm, ${adults} ad, ${children} ch`;

        const rows = [
            ["GUEST", booking.guestName || "—"],
            ["CHECK-IN", formatShort(checkIn)],
            ["CHECK-OUT", formatShort(checkOut)],
            ["GUESTS", compactGuests],
            ["CONTACT", booking.guestContact || "—"],
            ["TOTAL PAID", naira(booking.total)]
        ];

        const colWidth = (stubX - 60) / 3;
        rows.forEach((row, i) => {
            const col = i % 3;
            const line = Math.floor(i / 3);
            const x = 30 + col * colWidth;
            const y = 210 + line * 62;

            ctx.fillStyle = "#9aa1ab";
            ctx.font = "700 10px Poppins, Arial, sans-serif";
            ctx.fillText(row[0], x, y);

            ctx.fillStyle = "#12233b";
            ctx.font = "600 15px Poppins, Arial, sans-serif";
            ctx.fillText(fitText(ctx, row[1], colWidth - 14), x, y + 22);
        });

        // Footer note
        ctx.fillStyle = "#999999";
        ctx.font = "italic 11px Poppins, Arial, sans-serif";
        ctx.fillText(
            "Show this receipt at check-in as proof of your Travel Ease booking.",
            30, H - 24
        );

        // Perforation notch line
        ctx.strokeStyle = "#d8d2c2";
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(stubX, 20);
        ctx.lineTo(stubX, H - 20);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "#f6f2e8";
        ctx.beginPath();
        ctx.arc(stubX, 0, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(stubX, H, 14, 0, Math.PI * 2);
        ctx.fill();

        // Stub panel
        ctx.fillStyle = "#12233b";
        ctx.fillRect(stubX, 0, W - stubX, H);

        ctx.fillStyle = "#c8d3e0";
        ctx.font = "700 10px Poppins, Arial, sans-serif";
        ctx.fillText("BOOKING REFERENCE", stubX + 26, 40);

        ctx.fillStyle = "#ffffff";
        ctx.font = "700 26px Poppins, Arial, sans-serif";
        ctx.fillText(booking.bookingRef, stubX + 26, 72);

        ctx.strokeStyle = "#2c4568";
        ctx.beginPath();
        ctx.moveTo(stubX + 26, 92);
        ctx.lineTo(W - 26, 92);
        ctx.stroke();

        ctx.fillStyle = "#c8d3e0";
        ctx.font = "700 10px Poppins, Arial, sans-serif";
        ctx.fillText("PAY BY TRANSFER TO", stubX + 26, 120);

        ctx.fillStyle = "#ffffff";
        ctx.font = "600 14px Poppins, Arial, sans-serif";
        const bankLine = payToBank ? `${payToBank}` : payToName;
        const payToLines = wrapText(ctx, bankLine, stubX + 26, 142, W - stubX - 52, 18);

        ctx.fillStyle = "#c8d3e0";
        ctx.font = "400 13px Poppins, Arial, sans-serif";
        ctx.fillText(payToAccountNumber || (payToPhone ? `+${payToPhone}` : "—"), stubX + 26, 142 + payToLines * 18 + 6);

        ctx.fillStyle = "#c8d3e0";
        ctx.font = "400 12px Poppins, Arial, sans-serif";
        ctx.fillText(fitText(ctx, payToAccountName, W - stubX - 52), stubX + 26, 142 + payToLines * 18 + 26);

        ctx.fillStyle = "#25d366";
        ctx.font = "700 11px Poppins, Arial, sans-serif";
        ctx.fillText("● BOOKING CONFIRMED", stubX + 26, H - 30);
    }


    /* =====================================================
       DOWNLOAD RECEIPT
       ===================================================== */

    document.getElementById("download-receipt-btn").addEventListener("click", () => {
        const canvas = document.getElementById("receipt-canvas");
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `travelease-receipt-${bookingRef}.png`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(url);
        }, "image/png");
    });

});
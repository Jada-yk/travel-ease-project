/* =========================================================
   MY BOOKINGS PAGE
   Reads bookings saved by payment.js from localStorage.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const bookingsList = document.getElementById("bookings-list");
    if (!bookingsList) return;

    function formatFull(dateStr) {
        const date = new Date(`${dateStr}T00:00:00`);
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    }

    let bookings = [];

    try {
        bookings = JSON.parse(localStorage.getItem("travelEaseBookings") || "[]");
    } catch (error) {
        bookings = [];
    }

    // Most recent booking first
    bookings.sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt));

    if (bookings.length === 0) {
        bookingsList.innerHTML = `
            <div class="bookings-empty">
                <i class="fa-solid fa-suitcase-rolling"></i>
                <p>You haven't booked any hotels yet.</p>
                <a href="hotel.html" class="continue-login bookings-empty-link">
                    Browse hotels
                </a>
            </div>
        `;
        return;
    }

    bookingsList.innerHTML = "";

    bookings.forEach((booking) => {
        const item = document.createElement("article");
        item.className = "booking-item";

        item.innerHTML = `
            <img src="${booking.hotelImage}" alt="${booking.hotelName}" class="booking-item-img">

            <div class="booking-item-body">
                <h3 class="booking-item-name">${booking.hotelName}</h3>
                <p class="booking-item-address">${booking.hotelAddress || ""}</p>

                <div class="booking-item-meta">
                    <span><i class="fa-solid fa-calendar-days"></i> ${formatFull(booking.checkIn)} – ${formatFull(booking.checkOut)}</span>
                    <span><i class="fa-solid fa-user"></i> ${booking.rooms} room${booking.rooms === 1 ? "" : "s"}, ${booking.adults} adult${booking.adults === 1 ? "" : "s"}, ${booking.children} ${booking.children === 1 ? "child" : "children"}</span>
                    ${booking.bookingRef ? `<span><i class="fa-solid fa-hashtag"></i> Ref: ${booking.bookingRef}</span>` : ""}
                </div>
            </div>

            <div class="booking-item-price">
                <span class="booking-item-paid-badge">
                    <i class="fa-solid fa-circle-check"></i> Paid
                </span>
                <strong>₦${booking.total.toLocaleString()}</strong>
            </div>
        `;

        bookingsList.appendChild(item);
    });

});
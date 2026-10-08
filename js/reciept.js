document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");

    const booking = ref ? BookingFlow.getBookingByRef(ref) : null;

    const receiptCard = document.getElementById("receipt-card");

    if (!booking) {
        receiptCard.innerHTML = `
            <p class="form-subtitle" style="margin: 0;">
                We couldn't find a booking with that reference. Please check
                <a href="index.html" style="color: var(--blue); font-weight: 600;">My Bookings</a>
                or start a new search.
            </p>
        `;

        document.getElementById("print-receipt-btn").disabled = true;
        document.getElementById("download-receipt-btn").disabled = true;
        return;
    }

    const dob = booking.passenger.dobDay && booking.passenger.dobMonth && booking.passenger.dobYear
        ? `${booking.passenger.dobDay}/${booking.passenger.dobMonth}/${booking.passenger.dobYear}`
        : "";

    receiptCard.innerHTML = `
        <div class="receipt-meta-row">
            <div>
                <div class="receipt-title">Booking Receipt</div>
            </div>
        </div>

        <div class="receipt-meta-row">
            <span>Booking Reference<br><strong>${booking.reference}</strong></span>
            <span>Booking Date<br><strong>${new Date(booking.bookedAt).toLocaleString("en-US", {
                month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit"
            })}</strong></span>
        </div>

        <div class="receipt-block">
            <div class="receipt-section-title">Passenger</div>
            <div class="receipt-passenger-row">
                <span>Name</span>
                <strong>${booking.passenger.fullName}</strong>
            </div>
            <div class="receipt-passenger-row">
                <span>Date of birth</span>
                <strong>${dob}</strong>
            </div>
            <div class="receipt-passenger-row">
                <span>Email</span>
                <strong>${booking.passenger.email}</strong>
            </div>
            <div class="receipt-passenger-row">
                <span>Phone</span>
                <strong>${booking.passenger.phoneCode} ${booking.passenger.phone}</strong>
            </div>
        </div>

        <div class="receipt-block">
            <div class="receipt-section-title">Flight</div>
            <div class="receipt-flight-row">
                <div class="receipt-flight-icon"><i class="fa-solid fa-plane"></i></div>
                <div>
                    <div class="receipt-flight-route">
                        ${booking.flight.fromState} (${booking.flight.fromCode}) &rarr; ${booking.flight.toState} (${booking.flight.toCode})
                    </div>
                    <div class="receipt-flight-details">
                        ${booking.flight.airline} &middot; ${BookingFlow.formatDate(booking.flight.travelDate)}
                    </div>
                    <div class="receipt-flight-details">
                        ${booking.flight.departureTime} &ndash; ${booking.flight.arrivalTime} (${booking.flight.duration}) &middot; ${booking.flight.cabinClass} &middot; ${booking.flight.stops}
                    </div>
                </div>
            </div>
        </div>

        <div class="receipt-block" style="margin-bottom: 0;">
            <div class="receipt-price-row">
                <span>Base Fare</span>
                <span>₦${booking.total.toLocaleString()}</span>
            </div>
            <div class="receipt-price-row">
                <span>Taxes &amp; Fees</span>
                <span>Included</span>
            </div>
            <div class="receipt-total-row">
                <span>Total Paid</span>
                <strong>₦${booking.total.toLocaleString()}</strong>
            </div>
        </div>

        <div class="receipt-footer">
            <div class="receipt-barcode" aria-hidden="true"></div>
            <div class="receipt-thanks">
                Thank you for choosing Travel Ease!<br>Safe travels.
            </div>
        </div>
    `;

    document.getElementById("print-receipt-btn").addEventListener("click", () => {
        window.print();
    });

    document.getElementById("download-receipt-btn").addEventListener("click", () => {
        BookingFlow.generateReceiptPDF(booking);
    });

});
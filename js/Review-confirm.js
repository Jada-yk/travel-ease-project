document.addEventListener("DOMContentLoaded", () => {

    const draft = BookingFlow.getDraft();

    if (!draft || !draft.flight) {
        BookingFlow.showNotification("Please select a flight first.");
        window.location.href = "index.html";
        return;
    }

    if (!draft.passenger) {
        BookingFlow.showNotification("Please enter passenger information first.");
        window.location.href = "passenger-info.html";
        return;
    }

    const flight = draft.flight;
    const passenger = draft.passenger;

    const dobText = `${passenger.dobDay}/${passenger.dobMonth}/${passenger.dobYear}`;

    document.getElementById("review-flight-body").innerHTML = `
        <div class="review-row">
            <span>Route</span>
            <strong>${flight.fromState} (${flight.fromCode}) &rarr; ${flight.toState} (${flight.toCode})</strong>
        </div>
        <div class="review-row">
            <span>Date</span>
            <strong>${BookingFlow.formatDate(flight.travelDate)}</strong>
        </div>
        <div class="review-row">
            <span>Airline</span>
            <strong>${flight.airline}</strong>
        </div>
        <div class="review-row">
            <span>Time</span>
            <strong>${flight.departureTime} &ndash; ${flight.arrivalTime} (${flight.duration})</strong>
        </div>
        <div class="review-row">
            <span>Passengers</span>
            <strong>1 · ${flight.cabinClass} · ${flight.stops}</strong>
        </div>
    `;

    document.getElementById("review-passenger-body").innerHTML = `
        <div class="review-row">
            <span>Name</span>
            <strong>${passenger.fullName}</strong>
        </div>
        <div class="review-row">
            <span>Date of birth</span>
            <strong>${dobText}</strong>
        </div>
        <div class="review-row">
            <span>Gender</span>
            <strong>${passenger.gender}</strong>
        </div>
        <div class="review-row">
            <span>Passport number</span>
            <strong>${passenger.passportNumber}</strong>
        </div>
        <div class="review-row">
            <span>Nationality</span>
            <strong>${passenger.nationality}</strong>
        </div>
    `;

    document.getElementById("review-contact-body").innerHTML = `
        <div class="review-row">
            <span>Email</span>
            <strong>${passenger.email}</strong>
        </div>
        <div class="review-row">
            <span>Phone</span>
            <strong>${passenger.phoneCode} ${passenger.phone}</strong>
        </div>
    `;

    document.getElementById("review-total-price").textContent =
        `₦${flight.price.toLocaleString()}`;

    document.getElementById("edit-flight-link").addEventListener("click", () => {
        window.location.href = "index.html";
    });

    document.getElementById("edit-passenger-link").addEventListener("click", () => {
        window.location.href = "passenger-info.html";
    });

    document.getElementById("edit-contact-link").addEventListener("click", () => {
        window.location.href = "passenger-info.html";
    });

    document.getElementById("proceed-payment-btn").addEventListener("click", () => {
        window.location.href = "payment-options.html";
    });

});
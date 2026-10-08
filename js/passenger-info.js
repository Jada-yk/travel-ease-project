document.addEventListener("DOMContentLoaded", () => {

    const draft = BookingFlow.getDraft();

    if (!draft || !draft.flight) {
        BookingFlow.showNotification("Please select a flight first.");
        window.location.href = "index.html";
        return;
    }

    BookingFlow.renderFlightSummary(document.getElementById("flight-summary"), draft.flight);


    /* ---------- populate day / year selects ---------- */

    const dobDay = document.getElementById("dobDay");
    const dobYear = document.getElementById("dobYear");

    for (let day = 1; day <= 31; day++) {
        const option = document.createElement("option");
        option.value = String(day).padStart(2, "0");
        option.textContent = String(day);
        dobDay.appendChild(option);
    }

    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 12; year >= currentYear - 90; year--) {
        const option = document.createElement("option");
        option.value = String(year);
        option.textContent = String(year);
        dobYear.appendChild(option);
    }


    /* ---------- restore any previously entered passenger info ---------- */

    if (draft.passenger) {
        const p = draft.passenger;

        document.getElementById("passengerName").value = p.fullName || "";
        if (p.dobDay) dobDay.value = p.dobDay;
        if (p.dobMonth) document.getElementById("dobMonth").value = p.dobMonth;
        if (p.dobYear) dobYear.value = p.dobYear;
        if (p.gender) document.getElementById("passengerGender").value = p.gender;
        document.getElementById("passportNumber").value = p.passportNumber || "";
        if (p.nationality) document.getElementById("nationality").value = p.nationality;
        document.getElementById("contactEmail").value = p.email || "";
        if (p.phoneCode) document.getElementById("phoneCode").value = p.phoneCode;
        document.getElementById("contactPhone").value = p.phone || "";
    }


    /* ---------- submit ---------- */

    document.getElementById("passengerForm").addEventListener("submit", (event) => {
        event.preventDefault();

        const fullName = document.getElementById("passengerName").value.trim();
        const dobDayVal = dobDay.value;
        const dobMonthVal = document.getElementById("dobMonth").value;
        const dobYearVal = dobYear.value;
        const gender = document.getElementById("passengerGender").value;
        const passportNumber = document.getElementById("passportNumber").value.trim();
        const nationality = document.getElementById("nationality").value;
        const email = document.getElementById("contactEmail").value.trim();
        const phoneCode = document.getElementById("phoneCode").value;
        const phone = document.getElementById("contactPhone").value.trim();

        if (fullName.length < 2) {
            BookingFlow.showNotification("Please enter the passenger's full name.");
            return;
        }

        if (!dobDayVal || !dobMonthVal || !dobYearVal) {
            BookingFlow.showNotification("Please select a complete date of birth.");
            return;
        }

        if (!gender) {
            BookingFlow.showNotification("Please select a gender.");
            return;
        }

        if (passportNumber.length < 5) {
            BookingFlow.showNotification("Please enter a valid passport number.");
            return;
        }

        if (!nationality) {
            BookingFlow.showNotification("Please select a nationality.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            BookingFlow.showNotification("Please enter a valid email address.");
            return;
        }

        if (phone.replace(/\D/g, "").length < 7) {
            BookingFlow.showNotification("Please enter a valid phone number.");
            return;
        }

        draft.passenger = {
            fullName,
            dobDay: dobDayVal,
            dobMonth: dobMonthVal,
            dobYear: dobYearVal,
            gender,
            passportNumber,
            nationality,
            email,
            phoneCode,
            phone
        };

        BookingFlow.saveDraft(draft);

        window.location.href = "review-confirm.html";
    });

});
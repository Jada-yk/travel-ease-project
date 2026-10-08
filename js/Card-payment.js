document.addEventListener("DOMContentLoaded", () => {

    const draft = BookingFlow.getDraft();

    if (!draft || !draft.flight || !draft.passenger || !draft.paymentMethod) {
        BookingFlow.showNotification("Please complete the earlier steps first.");
        window.location.href = draft && draft.flight ? "passenger-info.html" : "index.html";
        return;
    }

    document.getElementById("pay-amount").textContent =
        `₦${draft.flight.price.toLocaleString()}`;


    /* ---------- light input formatting ---------- */

    const cardNumberInput = document.getElementById("cardNumber");
    cardNumberInput.addEventListener("input", () => {
        const digits = cardNumberInput.value.replace(/\D/g, "").slice(0, 16);
        cardNumberInput.value = digits.replace(/(.{4})/g, "$1 ").trim();
    });

    const cardExpiryInput = document.getElementById("cardExpiry");
    cardExpiryInput.addEventListener("input", () => {
        let digits = cardExpiryInput.value.replace(/\D/g, "").slice(0, 4);
        if (digits.length >= 3) {
            digits = `${digits.slice(0, 2)} / ${digits.slice(2)}`;
        }
        cardExpiryInput.value = digits;
    });


    /* ---------- validation + "payment" ---------- */

    function showCardError(message) {
        document.getElementById("card-error-container").innerHTML = `
            <div class="login-error">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span>${message}</span>
            </div>
        `;
    }

    function clearCardError() {
        document.getElementById("card-error-container").innerHTML = "";
    }

    document.getElementById("cardPaymentForm").addEventListener("submit", (event) => {
        event.preventDefault();
        clearCardError();

        const cardName = document.getElementById("cardName").value.trim();
        const cardNumberRaw = cardNumberInput.value.replace(/\s+/g, "");
        const cardExpiry = cardExpiryInput.value.replace(/\s+/g, "");
        const cardCvv = document.getElementById("cardCvv").value.trim();

        if (cardName.length < 2) {
            showCardError("Please enter the name on your card.");
            return;
        }

        if (!/^\d{13,19}$/.test(cardNumberRaw)) {
            showCardError("Please enter a valid card number.");
            return;
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiry)) {
            showCardError("Please enter the expiry as MM/YY.");
            return;
        }

        if (!/^\d{3,4}$/.test(cardCvv)) {
            showCardError("Please enter a valid CVV.");
            return;
        }

        completeBooking();
    });

    function completeBooking() {
        const reference = BookingFlow.generateReference();

        const booking = {
            reference,
            flight: draft.flight,
            passenger: draft.passenger,
            paymentMethod: draft.paymentMethod,
            total: draft.flight.price,
            bookedAt: new Date().toISOString()
        };

        BookingFlow.saveBooking(booking);
        BookingFlow.clearDraft();

        showSuccessView(booking);
    }

    function showSuccessView(booking) {
        document.getElementById("card-checkout-view").hidden = true;

        const successView = document.getElementById("payment-success-view");
        successView.hidden = false;

        document.getElementById("booking-reference-text").textContent = booking.reference;

        document.getElementById("confirmation-email-text").textContent =
            `A confirmation email has been sent to ${booking.passenger.email}`;

        document.getElementById("view-booking-btn").addEventListener("click", () => {
            window.location.href = `receipt.html?ref=${encodeURIComponent(booking.reference)}`;
        });

        document.getElementById("download-receipt-btn").addEventListener("click", () => {
            BookingFlow.generateReceiptPDF(booking);
        });

        successView.scrollIntoView({ behavior: "smooth", block: "start" });
    }

});
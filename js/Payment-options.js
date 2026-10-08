document.addEventListener("DOMContentLoaded", () => {

    const draft = BookingFlow.getDraft();

    if (!draft || !draft.flight || !draft.passenger) {
        BookingFlow.showNotification("Please complete the earlier steps first.");
        window.location.href = draft && draft.flight ? "passenger-info.html" : "index.html";
        return;
    }

    let selectedMethod = "card";

    document.querySelectorAll(".payment-method-card").forEach((card) => {
        card.addEventListener("click", () => {
            document.querySelectorAll(".payment-method-card").forEach((c) => {
                c.classList.remove("selected");
            });
            card.classList.add("selected");
            selectedMethod = card.dataset.method;
        });
    });

    document.getElementById("continue-payment-btn").addEventListener("click", () => {

        if (selectedMethod !== "card") {
            BookingFlow.showNotification(
                "This payment method is coming soon in this demo — please use Credit / Debit Card."
            );
            return;
        }

        draft.paymentMethod = selectedMethod;
        BookingFlow.saveDraft(draft);

        window.location.href = "card-payment.html";
    });

});
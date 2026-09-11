/* ========================================
   HOME PAGE JS
   ======================================== */

function initializeHomePage() {

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        if (!question) {
            return;
        }

        if (question.dataset.initialized === "true") {
            return;
        }

        question.dataset.initialized = "true";

        question.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    });
}
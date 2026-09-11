/* ========================================
   PORTFOLIO PAGE JS
   ======================================== */

function initializePortfolioPage() {

    const filterButtons =
        document.querySelectorAll(
            "[data-filter]"
        );

    const portfolioItems =
        document.querySelectorAll(
            "[data-category]"
        );

    filterButtons.forEach(button => {

        if (button.dataset.initialized === "true") {
            return;
        }

        button.dataset.initialized = "true";

        button.addEventListener("click", () => {

            const filter =
                button.getAttribute("data-filter");


            /* Filter tombol */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            /* Filter portfolio */

            portfolioItems.forEach(item => {

                const category =
                    item.getAttribute(
                        "data-category"
                    );

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });
}
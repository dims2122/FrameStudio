/* ========================================
   DROPDOWN JS
   ======================================== */

function initializeDropdown() {

    const dropdowns =
        document.querySelectorAll("[data-dropdown]");

    dropdowns.forEach(dropdown => {

        if (dropdown.dataset.initialized === "true") {
            return;
        }

        dropdown.dataset.initialized = "true";

        const button =
            dropdown.querySelector(
                "[data-dropdown-button]"
            );

        const menu =
            dropdown.querySelector(
                "[data-dropdown-menu]"
            );

        if (!button || !menu) {
            return;
        }

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            dropdown.classList.toggle("active");

        });

    });


    document.addEventListener("click", () => {

        document
            .querySelectorAll("[data-dropdown].active")
            .forEach(dropdown => {

                dropdown.classList.remove("active");

            });

    });
}
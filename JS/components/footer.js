/* ========================================
   FOOTER JS
   ======================================== */

function initializeFooter() {

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach(element => {

        element.textContent =
            currentYear;

    });

}
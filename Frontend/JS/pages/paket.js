/* ========================================
   PAKET PAGE JS
   ======================================== */

function initializePaketPage() {

    const packageButtons =
        document.querySelectorAll(
            "[data-package]"
        );

    packageButtons.forEach(button => {

        if (button.dataset.initialized === "true") {
            return;
        }

        button.dataset.initialized = "true";

        button.addEventListener("click", () => {

            const packageName =
                button.getAttribute(
                    "data-package"
                );

            localStorage.setItem(
                "selectedPackage",
                packageName
            );

            window.location.href =
                "kontak.html";

        });

    });
}
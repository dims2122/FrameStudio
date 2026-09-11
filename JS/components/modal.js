/* ========================================
   MODAL JS
   ======================================== */

function initializeModal() {

    const openButtons =
        document.querySelectorAll("[data-modal-open]");

    const closeButtons =
        document.querySelectorAll("[data-modal-close]");

    openButtons.forEach(button => {

        if (button.dataset.initialized === "true") {
            return;
        }

        button.dataset.initialized = "true";

        button.addEventListener("click", () => {

            const modalId =
                button.getAttribute("data-modal-open");

            const modal =
                document.getElementById(modalId);

            if (modal) {
                modal.classList.add("active");
                document.body.style.overflow = "hidden";
            }

        });
    });


    closeButtons.forEach(button => {

        if (button.dataset.initialized === "true") {
            return;
        }

        button.dataset.initialized = "true";

        button.addEventListener("click", () => {

            const modal =
                button.closest(".modal");

            closeModal(modal);

        });

    });


    /* Klik area luar modal */

    document.querySelectorAll(".modal")
        .forEach(modal => {

            if (modal.dataset.initialized === "true") {
                return;
            }

            modal.dataset.initialized = "true";

            modal.addEventListener("click", (event) => {

                if (event.target === modal) {
                    closeModal(modal);
                }

            });

        });


    /* Tombol ESC */

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") {
            return;
        }

        document
            .querySelectorAll(".modal.active")
            .forEach(modal => {
                closeModal(modal);
            });

    });
}


function closeModal(modal) {

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.style.overflow = "";
}
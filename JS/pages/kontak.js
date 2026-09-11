/* ========================================
   KONTAK PAGE JS
   ======================================== */

function initializeKontakPage() {

    const form =
        document.querySelector(
            "[data-contact-form]"
        );

    if (!form) {
        return;
    }

    if (form.dataset.initialized === "true") {
        return;
    }

    form.dataset.initialized = "true";


    /* Ambil paket yang sebelumnya dipilih */

    const selectedPackage =
        localStorage.getItem(
            "selectedPackage"
        );

    const packageInput =
        form.querySelector(
            "[name='package']"
        );

    if (
        selectedPackage &&
        packageInput
    ) {

        packageInput.value =
            selectedPackage;

    }


    /* Submit */

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const formData =
            new FormData(form);

        const contactData = {

            name:
                formData.get("name"),

            email:
                formData.get("email"),

            package:
                formData.get("package"),

            message:
                formData.get("message")

        };

        console.log(
            "Data kontak:",
            contactData
        );


        const successMessage =
            form.querySelector(
                "[data-form-success]"
            );

        if (successMessage) {

            successMessage.textContent =
                "Pesan berhasil disiapkan.";

            successMessage.style.display =
                "block";

        }

    });
}
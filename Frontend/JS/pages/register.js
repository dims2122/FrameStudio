/* ========================================
   REGISTER PAGE JS
   ======================================== */

function initializeRegisterPage() {

    const form =
        document.querySelector(
            "[data-register-form]"
        );

    if (!form) {
        return;
    }

    if (form.dataset.initialized === "true") {
        return;
    }

    form.dataset.initialized = "true";


    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            form.querySelector(
                "[name='name']"
            )?.value.trim();

        const email =
            form.querySelector(
                "[name='email']"
            )?.value.trim();

        const password =
            form.querySelector(
                "[name='password']"
            )?.value;

        const confirmPassword =
            form.querySelector(
                "[name='confirm_password']"
            )?.value;


        if (
            !name ||
            !email ||
            !password ||
            !confirmPassword
        ) {

            showRegisterMessage(
                "Semua field wajib diisi."
            );

            return;
        }


        if (password !== confirmPassword) {

            showRegisterMessage(
                "Password tidak sama."
            );

            return;
        }


        console.log(
            "Register frontend:",
            {
                name,
                email
            }
        );

        showRegisterMessage(
            "Registrasi frontend berhasil diproses."
        );

    });
}


function showRegisterMessage(message) {

    const messageElement =
        document.querySelector(
            "[data-register-message]"
        );

    if (messageElement) {
        messageElement.textContent =
            message;
    }
}
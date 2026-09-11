/* ========================================
   LOGIN PAGE JS
   ======================================== */

function initializeLoginPage() {

    const form =
        document.querySelector(
            "[data-login-form]"
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

        const email =
            form.querySelector(
                "[name='email']"
            )?.value.trim();

        const password =
            form.querySelector(
                "[name='password']"
            )?.value;


        if (!email || !password) {

            showLoginMessage(
                "Email dan password wajib diisi."
            );

            return;
        }


        console.log(
            "Login frontend:",
            {
                email,
                password
            }
        );

        showLoginMessage(
            "Login frontend berhasil diproses."
        );

    });
}


function showLoginMessage(message) {

    const messageElement =
        document.querySelector(
            "[data-login-message]"
        );

    if (messageElement) {
        messageElement.textContent =
            message;
    }
}
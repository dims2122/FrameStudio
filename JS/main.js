/* ========================================
   MAIN JS
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadComponents();

});


/* ========================================
   LOAD COMPONENTS
   ======================================== */

async function loadComponents() {

    const components = {

        navbar: "navbar.html",
        hero: "hero.html",
        produk: "services.html",
        paket: "paket.html",
        tentang: "tentang.html",
        keunggulan: "features.html",
        portfolio: "portfolio.html",
        kontak: "kontak.html",
        footer: "footer.html",
        whatsapp: "whatsapp-button.html"

    };


    const isSubPage =
        window.location.pathname.includes("/pages/");


    const componentPath =
        isSubPage
            ? "../components/"
            : "components/";


    for (const [id, file] of Object.entries(components)) {

        const element =
            document.getElementById(id);


        if (!element) {
            continue;
        }


        try {

            const response =
                await fetch(
                    `${componentPath}${file}`
                );


            if (!response.ok) {

                throw new Error(
                    `HTTP ${response.status}`
                );

            }


            const html =
                await response.text();


            element.innerHTML =
                html;


            element.dispatchEvent(
                new CustomEvent(
                    "componentLoaded",
                    {
                        detail: {
                            name: id
                        }
                    }
                )
            );


        } catch (error) {

            console.error(
                `Gagal memuat component: ${file}`,
                error
            );

        }

    }


    /* Setelah semua component selesai */

    initializePage();

}


/* ========================================
   INITIALIZE PAGE
   ======================================== */

function initializePage() {

    if (typeof initializeNavbar === "function") {
        initializeNavbar();
    }


    if (typeof initializeFooter === "function") {
        initializeFooter();
    }


    if (typeof initializeModal === "function") {
        initializeModal();
    }


    if (typeof initializeDropdown === "function") {
        initializeDropdown();
    }


    if (typeof initializeHomePage === "function") {
        initializeHomePage();
    }


    if (typeof initializePaketPage === "function") {
        initializePaketPage();
    }


    if (typeof initializePortfolioPage === "function") {
        initializePortfolioPage();
    }


    if (typeof initializeKontakPage === "function") {
        initializeKontakPage();
    }


    if (typeof initializeLoginPage === "function") {
        initializeLoginPage();
    }


    if (typeof initializeRegisterPage === "function") {
        initializeRegisterPage();
    }

}
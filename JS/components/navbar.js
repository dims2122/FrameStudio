/* ========================================
   NAVBAR
   ======================================== */

function initializeNavbar() {

    const isSubPage =
        window.location.pathname.includes("/pages/");


    const basePath =
        isSubPage ? "../" : "";


    const links = {

        home: `${basePath}index.html`,

        tentang: `${basePath}pages/tentang.html`,

        layanan: `${basePath}pages/layanan.html`,

        paket: `${basePath}pages/paket.html`,

        porto: `${basePath}pages/porto.html`,

        faq: `${basePath}pages/faq.html`,

        kontak: `${basePath}pages/kontak.html`

    };


    document
        .querySelectorAll("[data-link]")
        .forEach(link => {

            const target =
                link.dataset.link;


            if (links[target]) {

                link.href =
                    links[target];

            }

        });


    /* ==============================
       MOBILE MENU
       ============================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");


    if (!menuToggle || !navLinks) {
        return;
    }


    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle("active");


            const isOpen =
                navLinks.classList.contains("active");


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );

}
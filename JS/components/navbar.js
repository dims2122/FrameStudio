/* ========================================
   NAVBAR
   ======================================== */

function initializeNavbar() {

    console.log("NAVBAR JS BERJALAN");

    const path = window.location.pathname;

    // Ambil root project GitHub Pages
    const projectRoot =
        path.includes("/pages/")
            ? path.substring(0, path.indexOf("/pages/"))
            : path.replace(/\/$/, "");


    const links = {

        home:
            `${projectRoot}/index.html`,

        tentang:
            `${projectRoot}/pages/tentang.html`,

        layanan:
            `${projectRoot}/pages/layanan.html`,

        paket:
            `${projectRoot}/pages/paket.html`,

        porto:
            `${projectRoot}/pages/porto.html`,

        faq:
            `${projectRoot}/pages/faq.html`,

        kontak:
            `${projectRoot}/pages/kontak.html`

    };


    /* ==============================
       NAVBAR LINKS
       ============================== */

    document
        .querySelectorAll("[data-link]")
        .forEach(link => {

            const target =
                link.getAttribute("data-link");


            if (links[target]) {

                link.setAttribute(
                    "href",
                    links[target]
                );

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
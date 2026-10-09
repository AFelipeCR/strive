document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const heroSection = document.querySelector("#hero");

    function checkScroll() {
        const heroHeight = heroSection ? heroSection.offsetHeight : 0;
        if (window.scrollY >= heroHeight - 50) {
            header.classList.remove("header-transparent");
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
            header.classList.add("header-transparent");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
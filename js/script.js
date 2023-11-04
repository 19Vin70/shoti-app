document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            showPage(targetId);

            navLinks.forEach((navLink) => {
                navLink.classList.remove("active");
            });
            link.classList.add("active");
        });
    });

    function showPage(targetId) {
        pages.forEach((page) => {
            if (page.id === targetId) {
                page.style.display = "block";
            } else {
                page.style.display = "none";
            }
        });

        if (targetId === "home") {
            document.querySelector(".header").style.display = "flex";
        } else {
            document.querySelector(".header").style.display = "none";
        }
    }

    navLinks[0].classList.add("active");
    showPage("home");
});

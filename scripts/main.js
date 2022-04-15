var isMenuOpen = false;
var navMenu = document.querySelector("nav");

function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    if(isMenuOpen) {
        navMenu.className = "active";
    } else {
        navMenu.className = "";
    }
};

document.querySelector(".mobile-menu").addEventListener("click", toggleMenu);
document.querySelector(".mobile-close").addEventListener("click", toggleMenu);


function openMenu() {
    document.body.classList.add("menu--open");
    document.querySelector(".btn__menu[aria-controls='mobile-menu']").setAttribute("aria-expanded", "true");
    document.querySelector(".btn__menu--close").focus();
}

function closeMenu() {
    document.body.classList.remove("menu--open");
    const menuButton = document.querySelector(".btn__menu[aria-controls='mobile-menu']");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});
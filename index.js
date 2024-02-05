// burger menu

let burgerBar = document.querySelector(".btn");
let burgerX = document.querySelector(".burger_btn");
let burgerMenu = document.querySelector(".burger_menu")

let isOpen = true;

burgerBar.addEventListener("click", () => {
    if (isOpen) {
        burgerMenu.style.setProperty("--show", "block")
    }
});

burgerX.addEventListener("click", () => {
    if (isOpen) {
        burgerMenu.style.setProperty("--show", "none")
    }
})

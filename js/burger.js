const menuBurger = document.querySelector(".burger");
const menu = document.querySelector(".navigation");
const body = document.querySelector('body');

menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("active");
    menu.classList.toggle("menu-active");
    body.classList.toggle('hidden');
});
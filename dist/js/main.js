const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuLeft = document.querySelector(".menu-left");
const menuRight = document.querySelector(".menu-right");
const listItem = document.querySelectorAll(".list-item");

//menu boolean 
let showMenu = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuButton.classList.add("close");
        menu.classList.add("show");
        menuLeft.classList.add("show");
        menuRight.classList.add("show");
        listItem.forEach(item => item.classList.add("show"));

        showMenu = true;
    } else {
        menuButton.classList.remove("close");
        menu.classList.remove("show");
        menuLeft.classList.remove("show");
        menuRight.classList.remove("show");
        listItem.forEach(item => item.classList.remove("show"));

        showMenu = false;

    }
}
const openMenuButton = document.querySelector(".main-nav__menu-icon--open");
const closeMenuButton = document.querySelector(".main-nav__menu-icon--close");
const toggle = document.querySelector(".main-nav__toggle");
const showMenu = document.querySelector(".main-nav__list");
const nojs = document.querySelector(".no-js");

// Включение работы скриптов

nojs.classList.remove("no-js");

// Работа кнопки меню в mobile и tablet режимах

toggle.addEventListener("click", function () {
  showMenu.classList.toggle("main-nav__display-on");
  openMenuButton.classList.toggle("main-nav__display-on");
  closeMenuButton.classList.toggle("main-nav__display-on");
});

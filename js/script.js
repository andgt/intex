'use strict'

// Меню

let mainNav = document.querySelector('.main-nav');
let buttonToggle = document.querySelector('.main-nav__button-toggle');

mainNav.classList.remove('main-nav--no-js');

buttonToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});

// Подменю

let menuItems = document.querySelectorAll(".main-nav__link");
let submenus = document.querySelectorAll(".main-nav__submenu");

for (let menuItem of menuItems) {
  menuItem.addEventListener("click", function (evt) {
    evt.preventDefault();
    for (let submenu of submenus) {
      submenu.classList.toggle("main-nav__menu-item-open");
    }
  });
}

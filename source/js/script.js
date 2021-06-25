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
};

// Табы

let tab = function() {
  let tabBtn = document.querySelectorAll(".catalog__tab-button");
  let cardsBlock = document.querySelectorAll(".catalog__cards");
  let tabName;

  tabBtn.forEach(element => {
    element.addEventListener("click", selectTab)
  });

  function selectTab(evt) {
    evt.preventDefault();
    tabBtn.forEach(element => {
      element.classList.remove("catalog__tab-button--active");
    });
    this.classList.add("catalog__tab-button--active");
    tabName = this.getAttribute("data-tab");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    cardsBlock.forEach(element => {
      if (element.classList.contains(tabName)) {
        element.classList.add("catalog__cards--active");
      } else {
        element.classList.remove("catalog__cards--active");
      }
    });
  };
};

tab();

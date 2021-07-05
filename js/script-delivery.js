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

let menuItemsAccesories = document.querySelector(".main-nav__link--accessories");
let submenu = document.querySelector(".main-nav__submenu");

menuItemsAccesories.onclick = function(evt) {
  evt.preventDefault();
  submenu.classList.toggle("main-nav__menu-item-open");
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

// Фиксированное меню

/*let menuFixed = function() {
  let logo = document.querySelector(".header__logo");
  let promo = document.querySelector(".header");

  if (window.pageYOffset > 10) {
    mainNav.classList.add("main-nav__sticky");
  } else {
    mainNav.classList.remove("main-nav__sticky");
  }

  if (window.innerWidth < 768) {
    if (window.pageYOffset > 10) {
      mainNav.classList.add("main-nav__sticky");
      logo.classList.add("header__logo-sticky");
    } else {
      mainNav.classList.remove("main-nav__sticky");
      logo.classList.remove("header__logo-sticky");
    };
  }
};*/

// Кнопка наверх

let scrollUpButton = function () {
  let scrollUp = document.querySelector(".button__scroll-up");

  if (window.pageYOffset > 100) {
    scrollUp.classList.add("button__scroll-up--showed");
  } else {
    scrollUp.classList.remove("button__scroll-up--showed");
  }

  scrollUp.onclick = function (evt) {
    window.scrollTo(0, 0);
  };
};

window.onscroll = function() {
  /*menuFixed();*/
  scrollUpButton();
};

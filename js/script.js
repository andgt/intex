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

// Слайдер на мобильной версии

let sliderItem = document.querySelectorAll(".slider__item");
let btnLeft = document.querySelector(".slider__toggle--left");
let btnRight = document.querySelector(".slider__toggle--right");
let index = 0;

const activeSlide = function (n) {
  for (let slide of sliderItem) {
    slide.classList.remove("slider__item--show");
  }

  sliderItem[index].classList.add("slider__item--show");
}

const nextSlide = function () {
  if (index == sliderItem.length - 1)  {
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  }
}

const prevSlide = function () {
  if (index == 0)  {
    index = sliderItem.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
}

btnLeft.onclick = function() {
  prevSlide(index);
}

btnRight.onclick = function() {
  nextSlide(index);
}

// Кнопка наверх

let scrollUp = document.querySelector(".button__scroll-up");

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    scrollUp.classList.add("button__scroll-up--showed");
  } else {
    scrollUp.classList.remove("button__scroll-up--showed");
  }
};

scrollUp.onclick = function (evt) {
  window.scrollTo(0, 0);
};

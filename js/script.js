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

// Слайдер

let sliderItems = document.querySelectorAll(".slider__item");
let btnLeft = document.querySelector(".slider__toggle--left");
let btnRight = document.querySelector(".slider__toggle--right");
let sliderList = document.querySelector(".slider__list");
let offset = 0;
let offsetPlus = 0;

function slider() {
  let sliderWidthDesktop;
  let sliderItemMax;
  for (let sliderItem of sliderItems) {
    sliderWidthDesktop = sliderItem.offsetWidth + parseInt(getComputedStyle(sliderItem).marginRight);
    sliderItemMax = sliderWidthDesktop * (sliderItems.length-3);
  }

  btnRight.onclick = function () {
    offset += sliderWidthDesktop;

    if (offset > sliderItemMax) {
      offset = 0;
    }

    sliderList.style.left = -offset + "px";
  };

  btnLeft.onclick = function () {
    offset = offset - sliderWidthDesktop;

    if (offset < 0) {
      offset = 0;
    }

    sliderList.style.left = -offset + "px";
  };
}

function mobileSlider() {
  let sliderWidth;
  let sliderItemMaxMobile;
  for (let sliderItem of sliderItems) {
    sliderWidth = sliderItem.offsetWidth + (parseInt(getComputedStyle(sliderItem).marginRight) + parseInt(getComputedStyle(sliderItem).marginLeft));
    sliderItemMaxMobile = sliderWidth * (sliderItems.length-1);
  }

  btnRight.onclick = function () {
    offset += sliderWidth;

    if (offset > sliderItemMaxMobile) {
      offset = 0;
    }

    sliderList.style.left = -offset + "px";
  };

  btnLeft.onclick = function () {
    offset = offset - sliderWidth;

    if (offset < 0) {
      offset = 0;
    }

    sliderList.style.left = -offset + "px";
  };
}

if (window.innerWidth < 1400) {
  window.onload = mobileSlider();
} else {
  window.onload = slider();
}

window.addEventListener("resize", function() {
  if (window.innerWidth > 1399) {
    slider();
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth < 1400) {
    mobileSlider();
  }
});


// Фиксированное меню

let menuFixed = function() {
  let logo = document.querySelector(".header__logo");

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
};

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
  menuFixed();
  scrollUpButton();
};

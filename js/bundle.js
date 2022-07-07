/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/scripts/colored-item.js":
/*!****************************************!*\
  !*** ./source/scripts/colored-item.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coloredItem": function() { return /* binding */ coloredItem; }
/* harmony export */ });
const coloredItem = (itemName, dataAttribute, activeClass) => {
  const isScrolledIntoView = elem => {
    const rect = elem.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const isVisible = elemTop < window.innerHeight / 2 && Math.sign(elemTop) != -1 || elemBottom > window.innerHeight / 2 && elemBottom < window.innerHeight;
    return isVisible;
  };

  const allPersonItems = document.querySelectorAll(itemName);
  const itemArr = [...allPersonItems];

  const addActiveClassForVisibleElem = () => {
    let coloredItems = [];
    itemArr.forEach(item => {
      if (isScrolledIntoView(item)) {
        coloredItems.push(item);
      }

      item.classList.remove(activeClass);
    });
    coloredItems.forEach(item => {
      item.classList.add(activeClass);
    });
    coloredItems = [];
  };

  addActiveClassForVisibleElem();
  window.addEventListener('scroll', addActiveClassForVisibleElem);
};



/***/ }),

/***/ "./source/scripts/mobile-menu.js":
/*!***************************************!*\
  !*** ./source/scripts/mobile-menu.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileMenu": function() { return /* binding */ mobileMenu; }
/* harmony export */ });
const mobileMenu = () => {
  const mobileButton = document.querySelector('.header__menu-button');
  const mobileBtnIcon = document.querySelector('.ham');
  const navigation = document.querySelector('.nav');
  const headerTitle = document.querySelector('.header__title');
  const body = document.querySelector('.body');
  let menuStatus;

  const toogleMobileMenu = () => {
    menuStatus ? closeMobileMenu() : openMobileMenu();
  };

  const onBackgroundClick = evt => {
    if (evt.target.parentElement.tagName === 'HTML') {
      closeMobileMenu();
    }
  };

  function openMobileMenu() {
    navigation.classList.add('nav--open');
    body.classList.add('body--menu-open');
    mobileBtnIcon.classList.add('active');
    headerTitle.classList.add('header__title--menu-open');
    menuStatus = true;
    body.addEventListener('click', onBackgroundClick);
  }

  function closeMobileMenu() {
    navigation.classList.remove('nav--open');
    body.classList.remove('body--menu-open');
    mobileBtnIcon.classList.remove('active');
    headerTitle.classList.remove('header__title--menu-open');
    menuStatus = false;
    body.removeEventListener('click', onBackgroundClick);
  }

  mobileButton.addEventListener('click', toogleMobileMenu);
};



/***/ }),

/***/ "./source/scripts/project-slider.js":
/*!******************************************!*\
  !*** ./source/scripts/project-slider.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectSlider": function() { return /* binding */ projectSlider; }
/* harmony export */ });
let projectSlider = function () {
  const thumbnails = document.querySelectorAll('.project-slider__thumbnails-button');
  const allSlides = document.querySelectorAll('.project-slider__slide');
  let slideName; // for firs launch

  selectSlideContent(thumbnails[0].getAttribute('data-slide-name'));
  thumbnails[0].classList.add('project-slider__thumbnails-button--active');
  thumbnails.forEach(item => {
    item.addEventListener('click', selectSlide);
  });

  function selectSlide() {
    thumbnails.forEach(item => {
      item.classList.remove('project-slider__thumbnails-button--active');
    });
    this.classList.add('project-slider__thumbnails-button--active');
    slideName = this.getAttribute('data-slide-name');
    selectSlideContent(slideName);
  }

  function selectSlideContent(slideName) {
    allSlides.forEach(item => {
      item.getAttribute('data-slide-name') === slideName ? item.classList.add('project-slider__slide--active') : item.classList.remove('project-slider__slide--active');
    });
  }
};



/***/ }),

/***/ "./source/scripts/slider-full.js":
/*!***************************************!*\
  !*** ./source/scripts/slider-full.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderFull": function() { return /* binding */ sliderFull; }
/* harmony export */ });
const sliderFull = () => {
  const sliderBlok = document.querySelector('.sliderfull'); //btns

  const sliderBtnPrev = document.querySelector('.sliderfull-items__button--prev');
  const sliderBtnNext = document.querySelector('.sliderfull-items__button--next'); //slides counter

  const sliderCounterCurrent = document.querySelector('.slederfull-controls__total--current');
  const sliderCounterTotal = document.querySelector('.slederfull-controls__total--total'); //slides wrpper

  const slidesWrapper = document.querySelector('.sliderfull-items');
  const slidesField = document.querySelector('.sliderfull-items__inner'); //all sledes

  const slides = document.querySelectorAll('.sliderfull-items__item');
  let slideIndex = 1;
  let offset = 0;
  const width = window.getComputedStyle(slidesWrapper).width;
  slides.forEach(slide => {
    slide.style.width = width;
  });
  slidesField.style.width = 100 * slides.length + '%';

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  ;
  const sliderIndicatorBlock = document.querySelector('.sliderfull-indicators');

  function createIndicatorBtn() {
    let element = '';

    for (let i = 0; i < slides.length; i++) {
      element += `
        <li class="sliderfull-indicators__item">
          <button class="sliderfull-indicators__button" aria-label = "slide number ${i + 1}" data-slide-index = "${i + 1}"></button>
        </li>
      `;
      sliderIndicatorBlock.innerHTML = element;
    }
  }

  ;
  createIndicatorBtn();
  const indicatorsBtn = document.querySelectorAll('.sliderfull-indicators__button');
  indicatorsBtn.forEach(btn => {
    btn.addEventListener('click', selectbtn);
  });

  function selectbtn() {
    let atribute = this.getAttribute('data-slide-index');
    slideIndex = atribute;
    offset = +width.slice(0, width.length - 2) * (atribute - 1);
    slidesField.style.transform = `translate(-${offset}px)`;
    showCurrentNumber();
  }

  ;

  function showCurrentNumber() {
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;
    sliderCounterCurrent.innerHTML = getZero(slideIndex);
    indicatorsBtn.forEach(btn => {
      btn.classList.remove('sliderfull-indicators__button--active');
    });
    indicatorsBtn[slideIndex - 1].classList.add('sliderfull-indicators__button--active');
  }

  ;
  showCurrentNumber();
  sliderBtnNext.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    slideIndex++;
    slidesField.style.transform = `translate(-${offset}px)`;
    showCurrentNumber();
  });
  sliderBtnPrev.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slideIndex--;
    slidesField.style.transform = `translate(-${offset}px)`;
    showCurrentNumber();
  }); //swips

  let touchStart = null; //Точка начала касания

  let touchPosition = null; //Текущая позиция
  //Чувствительность — количество пикселей, после которого жест будет считаться свайпом

  const sensitivity = 20;
  sliderBlok.addEventListener("touchstart", function (e) {
    TouchStart(e);
  }); //Начало касания

  sliderBlok.addEventListener("touchmove", function (e) {
    TouchMove(e);
  }); //Движение пальцем по экрану
  //Пользователь отпустил экран

  sliderBlok.addEventListener("touchend", function (e) {
    TouchEnd(e, "green");
  }); //Отмена касания

  sliderBlok.addEventListener("touchcancel", function (e) {
    TouchEnd(e, "red");
  });

  function TouchStart(e) {
    //Получаем текущую позицию касания
    touchStart = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    };
    touchPosition = {
      x: touchStart.x,
      y: touchStart.y
    };
  }

  function TouchMove(e) {
    //Получаем новую позицию
    touchPosition = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    };
  }

  function TouchEnd(e, color) {
    CheckAction(); //Определяем, какой жест совершил пользователь
    //Очищаем позиции

    touchStart = null;
    touchPosition = null;
  }

  function CheckAction() {
    let d = //Получаем расстояния от начальной до конечной точек по обеим осям
    {
      x: touchStart.x - touchPosition.x,
      y: touchStart.y - touchPosition.y
    };

    if (Math.abs(d.x) > Math.abs(d.y)) {
      //Проверяем, движение по какой оси было длиннее
      if (Math.abs(d.x) > sensitivity) {
        //Проверяем, было ли движение достаточно длинным
        if (d.x > 0) {
          //Если значение больше нуля, значит пользователь двигал пальцем справа налево
          if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
          } else {
            offset += +width.slice(0, width.length - 2);
          }

          slideIndex++;
          slidesField.style.transform = `translate(-${offset}px)`;
          showCurrentNumber();
        } else {
          //Иначе он двигал им слева направо
          if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
          } else {
            offset -= +width.slice(0, width.length - 2);
          }

          slideIndex--;
          slidesField.style.transform = `translate(-${offset}px)`;
          showCurrentNumber();
        }
      }
    }
  }
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./source/scripts/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider-full */ "./source/scripts/slider-full.js");
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-menu */ "./source/scripts/mobile-menu.js");
/* harmony import */ var _colored_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colored-item */ "./source/scripts/colored-item.js");
/* harmony import */ var _project_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-slider */ "./source/scripts/project-slider.js");

 // import { showBigPicture } from './show-big-piture';



window.addEventListener('DOMContentLoaded', () => {
  if (document.location.pathname === '/index.html' || document.location.pathname === '/unicorn__arhitekte/index.html') {
    (0,_slider_full__WEBPACK_IMPORTED_MODULE_0__.sliderFull)();
  }

  if (document.location.pathname === '/projects.html' || document.location.pathname === '/unicorn__arhitekte/projects.html') {
    if (window.innerWidth <= 900) {
      (0,_colored_item__WEBPACK_IMPORTED_MODULE_2__.coloredItem)('.projects__card', 'data-item-id', 'projects__card--scrolled'); // itemName, dataAttribute , activeClass
    }
  }

  if (document.location.pathname === '/our-office.html' || document.location.pathname === '/unicorn__arhitekte/our-office.html') {
    if (window.innerWidth <= 900) {
      (0,_colored_item__WEBPACK_IMPORTED_MODULE_2__.coloredItem)('.our-team__item', 'data-item-id', 'our-team__item--colored'); // itemName, dataAttribute , activeClass
    }
  }

  (0,_project_slider__WEBPACK_IMPORTED_MODULE_3__.projectSlider)();
  (0,_mobile_menu__WEBPACK_IMPORTED_MODULE_1__.mobileMenu)();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map
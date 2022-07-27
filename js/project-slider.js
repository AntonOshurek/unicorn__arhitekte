/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/scripts/consts.js":
/*!**********************************!*\
  !*** ./source/scripts/consts.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROJECTS_COLORED_ITEM_CLASS": function() { return /* binding */ PROJECTS_COLORED_ITEM_CLASS; },
/* harmony export */   "PROJECTS_ITEM_CLASS": function() { return /* binding */ PROJECTS_ITEM_CLASS; },
/* harmony export */   "SLIDER_ACTIVE_BUTTON_CLASS": function() { return /* binding */ SLIDER_ACTIVE_BUTTON_CLASS; },
/* harmony export */   "SLIDER_ACTIVE_SLIDE_LEFT": function() { return /* binding */ SLIDER_ACTIVE_SLIDE_LEFT; },
/* harmony export */   "SLIDER_ACTIVE_SLIDE_RIGHT": function() { return /* binding */ SLIDER_ACTIVE_SLIDE_RIGHT; },
/* harmony export */   "SLIDER_DATA_ATTRIBUTE": function() { return /* binding */ SLIDER_DATA_ATTRIBUTE; },
/* harmony export */   "SLIDER_HIDDEN_SLIDE_LEFT": function() { return /* binding */ SLIDER_HIDDEN_SLIDE_LEFT; },
/* harmony export */   "SLIDER_HIDDEN_SLIDE_RIGHT": function() { return /* binding */ SLIDER_HIDDEN_SLIDE_RIGHT; },
/* harmony export */   "SWIP_DIRRECTION": function() { return /* binding */ SWIP_DIRRECTION; },
/* harmony export */   "TABLET_WIDHT": function() { return /* binding */ TABLET_WIDHT; },
/* harmony export */   "TEAM_COLORED_ITEM_CLASS": function() { return /* binding */ TEAM_COLORED_ITEM_CLASS; },
/* harmony export */   "TEAM_ITEM_CLASS": function() { return /* binding */ TEAM_ITEM_CLASS; }
/* harmony export */ });
const TABLET_WIDHT = 900; //variables for slider inside project page (current project) project-slider.js

const SWIP_DIRRECTION = {
  RIGHT: 'right',
  LEFT: 'left'
};
const SLIDER_DATA_ATTRIBUTE = 'data-slide-name';
const SLIDER_ACTIVE_BUTTON_CLASS = 'project-slider__thumbnails-button--active';
const SLIDER_ACTIVE_SLIDE_LEFT = 'project-slider__slide--active--left';
const SLIDER_ACTIVE_SLIDE_RIGHT = 'project-slider__slide--active--right';
const SLIDER_HIDDEN_SLIDE_LEFT = 'project-slider__slide--hidden--left';
const SLIDER_HIDDEN_SLIDE_RIGHT = 'project-slider__slide--hidden--right'; //variables for coloredItem function

const PROJECTS_ITEM_CLASS = '.projects__card';
const PROJECTS_COLORED_ITEM_CLASS = 'projects__card--colored';
const TEAM_ITEM_CLASS = '.our-team__item';
const TEAM_COLORED_ITEM_CLASS = 'our-team__item--colored';

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
/*!******************************************!*\
  !*** ./source/scripts/project-slider.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./source/scripts/consts.js");


let projectSlider = function () {
  const sliderBlock = document.querySelector('.project-slider__slides');
  const thumbnails = document.querySelectorAll('.project-slider__thumbnails-button');
  const allSlides = document.querySelectorAll('.project-slider__slide');
  let currentSlide = Number(thumbnails[0].getAttribute(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_DATA_ATTRIBUTE)); // default value for first launch

  let prevSlide = +thumbnails[thumbnails.length - 1].getAttribute(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_DATA_ATTRIBUTE);
  let slideDirection = _consts__WEBPACK_IMPORTED_MODULE_0__.SWIP_DIRRECTION.RIGHT; // for firs launch

  setActiveSlide();
  setActivetButton();
  thumbnails.forEach(item => {
    item.addEventListener('click', selectSlide);
  });

  function selectSlide() {
    if (+this.getAttribute(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_DATA_ATTRIBUTE) > currentSlide) {
      slideDirection = _consts__WEBPACK_IMPORTED_MODULE_0__.SWIP_DIRRECTION.RIGHT;
    }

    if (+this.getAttribute(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_DATA_ATTRIBUTE) < currentSlide) {
      slideDirection = _consts__WEBPACK_IMPORTED_MODULE_0__.SWIP_DIRRECTION.LEFT;
    }

    prevSlide = Number(currentSlide);
    currentSlide = Number(this.getAttribute(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_DATA_ATTRIBUTE));
    hiddenPrevSlide();
    setActivetButton();
    setActiveSlide();
  }

  ;

  function hiddenPrevSlide() {
    allSlides.forEach(item => {
      item.classList.remove(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_HIDDEN_SLIDE_LEFT);
      item.classList.remove(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_HIDDEN_SLIDE_RIGHT);

      if (+item.getAttribute(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_DATA_ATTRIBUTE) === +prevSlide) {
        item.classList.add(`project-slider__slide--hidden--${slideDirection}`);
      }
    });
  }

  function setActivetButton() {
    thumbnails.forEach(button => {
      if (Number(button.getAttribute(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_DATA_ATTRIBUTE)) === Number(currentSlide)) {
        button.classList.add(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_ACTIVE_BUTTON_CLASS);
      } else {
        button.classList.remove(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_ACTIVE_BUTTON_CLASS);
      }
    });
  }

  ;

  function setActiveSlide() {
    allSlides.forEach(item => {
      item.classList.remove(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_ACTIVE_SLIDE_LEFT);
      item.classList.remove(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_ACTIVE_SLIDE_RIGHT);

      if (Number(item.getAttribute(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_DATA_ATTRIBUTE)) === Number(currentSlide)) {
        item.classList.add(`project-slider__slide--active--${slideDirection}`);
      }
    });
  }

  ;

  function setPrevSlide() {
    if (slideDirection === _consts__WEBPACK_IMPORTED_MODULE_0__.SWIP_DIRRECTION.RIGHT) {
      if (Number(currentSlide) === 1) {
        prevSlide = thumbnails.length;
      } else {
        prevSlide = Number(currentSlide) - 1;
      }
    }

    if (slideDirection === _consts__WEBPACK_IMPORTED_MODULE_0__.SWIP_DIRRECTION.LEFT) {
      if (Number(currentSlide) === thumbnails.length) {
        prevSlide = 1;
      } else {
        prevSlide = Number(currentSlide) + 1;
      }
    }

    hiddenPrevSlide();
  }

  ; //swips

  let touchStart = null; //Точка начала касания

  let touchPosition = null; //Текущая позиция
  //Чувствительность — количество пикселей, после которого жест будет считаться свайпом

  const sensitivity = 20;
  sliderBlock.addEventListener("touchstart", function (e) {
    TouchStart(e);
  }); //Начало касания

  sliderBlock.addEventListener("touchmove", function (e) {
    TouchMove(e);
  }); //Движение пальцем по экрану
  //Пользователь отпустил экран

  sliderBlock.addEventListener("touchend", function (e) {
    TouchEnd(e, "green");
  }); //Отмена касания

  sliderBlock.addEventListener("touchcancel", function (e) {
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
          slideDirection = _consts__WEBPACK_IMPORTED_MODULE_0__.SWIP_DIRRECTION.RIGHT;

          if (Number(currentSlide) === allSlides.length) {
            currentSlide = Number(thumbnails[0].getAttribute(_consts__WEBPACK_IMPORTED_MODULE_0__.SLIDER_DATA_ATTRIBUTE));
          } else {
            currentSlide++;
          }
        } else {
          //Иначе он двигал им слева направо
          slideDirection = _consts__WEBPACK_IMPORTED_MODULE_0__.SWIP_DIRRECTION.LEFT;

          if (Number(currentSlide) === 1) {
            currentSlide = allSlides.length;
          } else {
            currentSlide--;
          }
        }

        setPrevSlide();
        setActivetButton();
        setActiveSlide();
      }
    }
  }
};

projectSlider();
}();
/******/ })()
;
//# sourceMappingURL=project-slider.js.map
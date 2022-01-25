/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/scripts/main-slider.js":
/*!***************************************!*\
  !*** ./source/scripts/main-slider.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainSlider": function() { return /* binding */ mainSlider; }
/* harmony export */ });
const mainSlider = () => {
  //btns
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
  });
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
/* harmony import */ var _main_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-slider */ "./source/scripts/main-slider.js");

window.addEventListener('DOMContentLoaded', () => {
  (0,_main_slider__WEBPACK_IMPORTED_MODULE_0__.mainSlider)();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map
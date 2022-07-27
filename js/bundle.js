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
const coloredItem = (itemName, activeClass) => {
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
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-menu */ "./source/scripts/mobile-menu.js");
/* harmony import */ var _colored_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colored-item */ "./source/scripts/colored-item.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consts */ "./source/scripts/consts.js");



window.addEventListener('DOMContentLoaded', () => {
  (0,_mobile_menu__WEBPACK_IMPORTED_MODULE_0__.mobileMenu)(); // launch in all pages

  if (document.location.pathname === '/projects.html' || document.location.pathname === '/unicorn__arhitekte/projects.html') {
    if (window.innerWidth <= _consts__WEBPACK_IMPORTED_MODULE_2__.TABLET_WIDHT) {
      (0,_colored_item__WEBPACK_IMPORTED_MODULE_1__.coloredItem)(_consts__WEBPACK_IMPORTED_MODULE_2__.PROJECTS_ITEM_CLASS, _consts__WEBPACK_IMPORTED_MODULE_2__.PROJECTS_COLORED_ITEM_CLASS); // itemName, activeClass
    }
  }

  if (document.location.pathname === '/our-office.html' || document.location.pathname === '/unicorn__arhitekte/our-office.html') {
    if (window.innerWidth <= _consts__WEBPACK_IMPORTED_MODULE_2__.TABLET_WIDHT) {
      (0,_colored_item__WEBPACK_IMPORTED_MODULE_1__.coloredItem)(_consts__WEBPACK_IMPORTED_MODULE_2__.TEAM_ITEM_CLASS, _consts__WEBPACK_IMPORTED_MODULE_2__.TEAM_COLORED_ITEM_CLASS); // itemName, activeClass
    }
  }
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map
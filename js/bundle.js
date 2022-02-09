/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/scripts/api.js":
/*!*******************************!*\
  !*** ./source/scripts/api.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllProjects": function() { return /* binding */ getAllProjects; }
/* harmony export */ });
const getAllProjects = () => fetch('data.json').then(response => {
  if (response.ok) {
    return response.json();
  }
});



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
    headerTitle.classList.add('header__title--menu');
    menuStatus = true;
    body.addEventListener('click', onBackgroundClick);
  }

  function closeMobileMenu() {
    navigation.classList.remove('nav--open');
    body.classList.remove('body--menu-open');
    mobileBtnIcon.classList.remove('active');
    headerTitle.classList.remove('header__title--menu');
    menuStatus = false;
    body.removeEventListener('click', onBackgroundClick);
  }

  mobileButton.addEventListener('click', toogleMobileMenu);
};



/***/ }),

/***/ "./source/scripts/project-foused-item.js":
/*!***********************************************!*\
  !*** ./source/scripts/project-foused-item.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFocusedItem": function() { return /* binding */ projectFocusedItem; }
/* harmony export */ });
const projectFocusedItem = () => {
  const isScrolledIntoView = elem => {
    const rect = elem.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const isVisible = elemTop < window.innerHeight / 2 && Math.sign(elemTop) != -1 || elemBottom > window.innerHeight / 2 && elemBottom < window.innerHeight;
    return isVisible;
  };

  const allProjetItems = document.querySelectorAll('.projects__card');
  const itemArr = [...allProjetItems];

  const markCurrentMenuItem = () => {
    itemArr.forEach(item => {
      let itemNumber;

      if (isScrolledIntoView(item)) {
        itemNumber = item.getAttribute('data-item-id');
        allProjetItems.forEach(item => {
          item.classList.remove('projects__card--scrolled');

          if (item.getAttribute('data-item-id') === itemNumber) {
            item.classList.add('projects__card--scrolled');
          }
        });
      }
    });
  };

  markCurrentMenuItem();
  window.addEventListener('scroll', markCurrentMenuItem);
};



/***/ }),

/***/ "./source/scripts/save-project-id.js":
/*!*******************************************!*\
  !*** ./source/scripts/save-project-id.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveProjectId": function() { return /* binding */ saveProjectId; }
/* harmony export */ });
const saveProjectId = () => {
  const projects = document.querySelector('.projects');
  let dataID;
  projects.addEventListener('click', evt => {
    dataID = evt.target.parentElement.parentElement.getAttribute('data-item-id');
    localStorage.setItem('dataID', dataID - 1);
  });
};



/***/ }),

/***/ "./source/scripts/scroll-indicator.js":
/*!********************************************!*\
  !*** ./source/scripts/scroll-indicator.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "srollIndicator": function() { return /* binding */ srollIndicator; }
/* harmony export */ });
const srollIndicator = () => {
  const srollIndicator = document.querySelector('.scroll-indicator');
  const bar = document.querySelector('.sroll-indicator__bar');
  srollIndicator.classList.add('scroll-indicator--active');

  const myFunction = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = winScroll / height * 100;
    bar.style.height = scrolled + "%";
  };

  window.onscroll = function () {
    myFunction();
  };
};



/***/ }),

/***/ "./source/scripts/show-big-piture.js":
/*!*******************************************!*\
  !*** ./source/scripts/show-big-piture.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showBigPicture": function() { return /* binding */ showBigPicture; }
/* harmony export */ });
const showBigPicture = () => {
  const modal = document.querySelector('.modal');
  const modalImage = document.querySelector('.modal__picture');
  const gallery = document.querySelector('.project__gallery');
  const body = document.querySelector('.body');
  gallery.addEventListener('click', evt => {
    if (evt.target.classList.contains('project__image')) {
      let imageSourcce = evt.target.src;
      openModal(imageSourcce);
    }
  });

  function openModal(imageSourcce) {
    modal.classList.add('modal--open');
    modalImage.src = imageSourcce;
    body.classList.add('body--modal-open');
    body.addEventListener('click', closeModal);
  }

  ;

  function closeModal(evt) {
    if (evt.target.parentElement.tagName === 'HTML') {
      modal.classList.remove('modal--open');
      modalImage.src = '';
      body.classList.remove('body--modal-open');
      body.removeEventListener('click', closeModal);
    }
  }

  ;
};



/***/ }),

/***/ "./source/scripts/show-current-project.js":
/*!************************************************!*\
  !*** ./source/scripts/show-current-project.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showCurrentProjects": function() { return /* binding */ showCurrentProjects; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./source/scripts/api.js");

const projectGallery = document.querySelector('.project__gallery');
const pitureTemplate = document.querySelector('#project__image');
const dataList = document.querySelector('.data-list');
const dataListItemTemplate = document.querySelector('#data-list__item');
const infoText = document.querySelector('.project__info-text');
const headerTitle = document.querySelector('.header__title');

const showCurrentProjects = () => {
  let projectData;
  const dataID = localStorage.getItem('dataID');
  (0,_api__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)().then(data => {
    projectData = data.data[dataID];
    showImages(projectData);
    showInfo(projectData);
  });

  function showImages(projectData) {
    const fragment = new DocumentFragment();
    projectData.images.forEach(image => {
      const templateItem = pitureTemplate.content.cloneNode(true);
      templateItem.querySelector('.project__image').src = image;
      fragment.append(templateItem);
    });
    projectGallery.append(fragment);
  }

  function showInfo(data) {
    infoText.textContent = data.description;
    headerTitle.textContent = data.name;
    document.title = `Projekt ${data.name}`;
    const fragment = new DocumentFragment();
    data.dataList.forEach(item => {
      const templateItem = dataListItemTemplate.content.cloneNode(true);
      templateItem.querySelector('.data-list__item').textContent = item;
      fragment.append(templateItem);
    });
    dataList.append(fragment);
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
/* harmony import */ var _project_foused_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-foused-item */ "./source/scripts/project-foused-item.js");
/* harmony import */ var _show_big_piture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-big-piture */ "./source/scripts/show-big-piture.js");
/* harmony import */ var _save_project_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save-project-id */ "./source/scripts/save-project-id.js");
/* harmony import */ var _show_current_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-current-project */ "./source/scripts/show-current-project.js");
/* harmony import */ var _scroll_indicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scroll-indicator */ "./source/scripts/scroll-indicator.js");







window.addEventListener('DOMContentLoaded', () => {
  if (document.location.pathname === '/index.html' || document.location.pathname === '/unicorn__arhitekte/index.html') {
    (0,_slider_full__WEBPACK_IMPORTED_MODULE_0__.sliderFull)();
  }

  if (document.location.pathname === '/projects.html' || document.location.pathname === '/unicorn__arhitekte/projects.html') {
    (0,_save_project_id__WEBPACK_IMPORTED_MODULE_4__.saveProjectId)();

    if (window.innerWidth <= 900) {
      (0,_project_foused_item__WEBPACK_IMPORTED_MODULE_2__.projectFocusedItem)();
      (0,_scroll_indicator__WEBPACK_IMPORTED_MODULE_6__.srollIndicator)();
    }
  }

  if (document.location.pathname === '/current-project.html' || document.location.pathname === '/unicorn__arhitekte/current-project.html') {
    (0,_show_current_project__WEBPACK_IMPORTED_MODULE_5__.showCurrentProjects)();
    (0,_show_big_piture__WEBPACK_IMPORTED_MODULE_3__.showBigPicture)();
  }

  (0,_mobile_menu__WEBPACK_IMPORTED_MODULE_1__.mobileMenu)();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map
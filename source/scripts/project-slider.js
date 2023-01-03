import {
  SWIP_DIRRECTION,
  SLIDER_DATA_ATTRIBUTE,
  SLIDER_ACTIVE_BUTTON_CLASS,
  SLIDER_ACTIVE_SLIDE_LEFT,
  SLIDER_ACTIVE_SLIDE_RIGHT,
  SLIDER_HIDDEN_SLIDE_LEFT,
  SLIDER_HIDDEN_SLIDE_RIGHT,
} from './consts.js';

let projectSlider = function () {
  const sliderBlock = document.querySelector('.project-slider__slides');
  const thumbnails = document.querySelectorAll('.project-slider__thumbnails-button');
  const allSlides = document.querySelectorAll('.project-slider__slide');

  let currentSlide = Number(thumbnails[0].getAttribute(SLIDER_DATA_ATTRIBUTE)); // default value for first launch
  let prevSlide = +thumbnails[thumbnails.length - 1].getAttribute(SLIDER_DATA_ATTRIBUTE);
  let slideDirection = SWIP_DIRRECTION.RIGHT;

  // for firs launch
  setActiveSlide();
  setActivetButton();

  thumbnails.forEach(item => {
    item.addEventListener('click', selectSlide, {passive: true});
  });

  function selectSlide() {
    if(+this.getAttribute(SLIDER_DATA_ATTRIBUTE) > currentSlide) {
      slideDirection = SWIP_DIRRECTION.RIGHT;
    }
    if(+this.getAttribute(SLIDER_DATA_ATTRIBUTE) < currentSlide) {
      slideDirection = SWIP_DIRRECTION.LEFT;
    }

    prevSlide = Number(currentSlide);
    currentSlide = Number(this.getAttribute(SLIDER_DATA_ATTRIBUTE));

    hiddenPrevSlide();
    setActivetButton();
    setActiveSlide();
  };

  function hiddenPrevSlide() {
    allSlides.forEach((item) => {
      item.classList.remove(SLIDER_HIDDEN_SLIDE_LEFT);
      item.classList.remove(SLIDER_HIDDEN_SLIDE_RIGHT);

      if(+item.getAttribute(SLIDER_DATA_ATTRIBUTE) === +prevSlide) {
        item.classList.add(`project-slider__slide--hidden--${slideDirection}`);
      }
    });
  }

  function setActivetButton() {
    thumbnails.forEach((button) => {
      if(Number(button.getAttribute(SLIDER_DATA_ATTRIBUTE)) === Number(currentSlide)) {
        button.classList.add(SLIDER_ACTIVE_BUTTON_CLASS);
      } else {
        button.classList.remove(SLIDER_ACTIVE_BUTTON_CLASS);
      }
    });
  };

  function setActiveSlide() {
    allSlides.forEach((item) => {
      item.classList.remove(SLIDER_ACTIVE_SLIDE_LEFT);
      item.classList.remove(SLIDER_ACTIVE_SLIDE_RIGHT);

      if(Number(item.getAttribute(SLIDER_DATA_ATTRIBUTE)) === Number(currentSlide)) {
        item.classList.add(`project-slider__slide--active--${slideDirection}`);
      }
    });
  };

  function setPrevSlide() {
    if(slideDirection === SWIP_DIRRECTION.RIGHT) {
      if(Number(currentSlide) === 1) {
        prevSlide = thumbnails.length;
      } else {
        prevSlide = Number(currentSlide) - 1;
      }
    }

    if(slideDirection === SWIP_DIRRECTION.LEFT) {
      if(Number(currentSlide) === thumbnails.length) {
        prevSlide = 1;
      } else {
        prevSlide = Number(currentSlide) + 1;
      }
    }
    hiddenPrevSlide();
  };

  //swips
  let touchStart = null; //Точка начала касания
  let touchPosition = null; //Текущая позиция
  //Чувствительность — количество пикселей, после которого жест будет считаться свайпом
  const sensitivity = 20;

  sliderBlock.addEventListener("touchstart", function (e) { TouchStart(e); }, {passive: true}); //Начало касания
  sliderBlock.addEventListener("touchmove", function (e) { TouchMove(e); }, {passive: true}); //Движение пальцем по экрану
  //Пользователь отпустил экран
  sliderBlock.addEventListener("touchend", function (e) { TouchEnd(e, "green")}, {passive: true});
  //Отмена касания
  sliderBlock.addEventListener("touchcancel", function (e) { TouchEnd(e, "red")}, {passive: true});

  function TouchStart(e)  {
    //Получаем текущую позицию касания
    touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    touchPosition = { x: touchStart.x, y: touchStart.y };
  }

  function TouchMove(e) {
    //Получаем новую позицию
    touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
  }

  function TouchEnd(e, color) {

    CheckAction(); //Определяем, какой жест совершил пользователь
    //Очищаем позиции
    touchStart = null;
    touchPosition = null;
  }

  function CheckAction()  {
    let d = //Получаем расстояния от начальной до конечной точек по обеим осям
    {
    x: touchStart.x - touchPosition.x,
    y: touchStart.y - touchPosition.y
    };

    if(Math.abs(d.x) > Math.abs(d.y)) { //Проверяем, движение по какой оси было длиннее
      if(Math.abs(d.x) > sensitivity) { //Проверяем, было ли движение достаточно длинным
        if(d.x > 0) { //Если значение больше нуля, значит пользователь двигал пальцем справа налево
          slideDirection = SWIP_DIRRECTION.RIGHT;

          if(Number(currentSlide) === allSlides.length) {
            currentSlide = Number(thumbnails[0].getAttribute(SLIDER_DATA_ATTRIBUTE));

          } else {
            currentSlide++;
          }
        }

        else { //Иначе он двигал им слева направо
          slideDirection = SWIP_DIRRECTION.LEFT;

          if(Number(currentSlide) === 1) {
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

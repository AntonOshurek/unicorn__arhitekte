
let projectSlider = function () {
  const sliderBlock = document.querySelector('.project-slider__slides');
  const thumbnails = document.querySelectorAll('.project-slider__thumbnails-button');
  const allSlides = document.querySelectorAll('.project-slider__slide');

  let currentSlide = +thumbnails[0].getAttribute('data-slide-name'); // default value for first launch
  let prevSlide = +thumbnails[thumbnails.length - 1].getAttribute('data-slide-name');


  let slideDirection = 'right';

  // for firs launch
  setActiveSlide();
  setActivetButton();

  thumbnails.forEach(item => {
    item.addEventListener('click', selectSlide);
  });

  function setPrevSlide() {
    console.log(currentSlide + " - current slide")
    if(slideDirection === 'right') {
      if(+currentSlide === 1) {
        prevSlide = thumbnails.length;
      } else {
        prevSlide = currentSlide - 1;
      }
    }

    if(slideDirection === 'left') {
      if(+currentSlide === thumbnails.length) {
        prevSlide = 1;
      } else {
        prevSlide = currentSlide + 1;
      }
    }
    console.log(prevSlide)

    // prevSlide.classList.add('project-slider__slide--hidden-left');

    allSlides.forEach((item) => {
      item.classList.remove('project-slider__slide--hidden--left');
      item.classList.remove('project-slider__slide--hidden--right');

      if(+item.getAttribute('data-slide-name') === +prevSlide) {
        item.classList.add(`project-slider__slide--hidden--${slideDirection}`);
      }
    });
    // item.classList.remove('project-slider__slide--active--left');
    // item.classList.remove('project-slider__slide--active--right');
  }

  function selectSlide() {
    // slideDirection = "right";

    currentSlide = +this.getAttribute('data-slide-name');

    setPrevSlide();

    setActivetButton();
    setActiveSlide();
  };

  function setActivetButton() {
    thumbnails.forEach((button) => {
      if(+button.getAttribute('data-slide-name') === +currentSlide) {
        button.classList.add('project-slider__thumbnails-button--active');
      } else {
        button.classList.remove('project-slider__thumbnails-button--active');
      }
    });
  };

  function setActiveSlide() {
    allSlides.forEach((item) => {
      item.classList.remove('project-slider__slide--active--left');
      item.classList.remove('project-slider__slide--active--right');

      if(+item.getAttribute('data-slide-name') === +currentSlide) {
        item.classList.add(`project-slider__slide--active--${slideDirection}`);
      }
    });
  };


  //swips

  let touchStart = null; //Точка начала касания
  let touchPosition = null; //Текущая позиция
  //Чувствительность — количество пикселей, после которого жест будет считаться свайпом
  const sensitivity = 20;

  sliderBlock.addEventListener("touchstart", function (e) { TouchStart(e); }); //Начало касания
  sliderBlock.addEventListener("touchmove", function (e) { TouchMove(e); }); //Движение пальцем по экрану
  //Пользователь отпустил экран
  sliderBlock.addEventListener("touchend", function (e) { TouchEnd(e, "green"); });
  //Отмена касания
  sliderBlock.addEventListener("touchcancel", function (e) { TouchEnd(e, "red"); });

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
          slideDirection = "right";
          sliderBlock.classList.remove("left");
          sliderBlock.classList.add("right");
          if(currentSlide === allSlides.length) {
            currentSlide = thumbnails[0].getAttribute('data-slide-name');

          } else {
            currentSlide++;
          }

          setPrevSlide();

          setActivetButton();
          setActiveSlide();
        }

        else { //Иначе он двигал им слева направо
          slideDirection = "left";
          sliderBlock.classList.remove("right");
          sliderBlock.classList.add("left");
          if(currentSlide === 1) {
            currentSlide = allSlides.length;

          } else {
            currentSlide--;
          }

          setPrevSlide();

          setActivetButton();
          setActiveSlide();
        }

      }
    }
  }

};

projectSlider();


let projectSlider = function () {
  const thumbnails = document.querySelectorAll('.project-slider__thumbnails-button');
  const allSlides = document.querySelectorAll('.project-slider__slide');

  let currentSlide = +thumbnails[0].getAttribute('data-slide-name'); // default value for first launch

  // for firs launch
  setActiveSlide();
  setActivetButton();

  thumbnails.forEach(item => {
    item.addEventListener('click', selectSlide);
  });

  function selectSlide() {
    currentSlide = +this.getAttribute('data-slide-name');
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
    allSlides.forEach(item => {
      if(+item.getAttribute('data-slide-name') === +currentSlide) {
        item.classList.add('project-slider__slide--active');
      } else {
        item.classList.remove('project-slider__slide--active');
      }
    });
  };




  //swips
  const sliderBlock = document.querySelector('.project-slider__slides');

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

          if(currentSlide === allSlides.length) {
            currentSlide = thumbnails[0].getAttribute('data-slide-name');

          } else {
            currentSlide++;
          }

          setActivetButton();
          setActiveSlide();
        }

        else { //Иначе он двигал им слева направо

          if(currentSlide === 1) {
            currentSlide = allSlides.length;

          } else {
            currentSlide--;
          }

          setActivetButton();
          setActiveSlide();
        }

      }
    }
  }

};

projectSlider();

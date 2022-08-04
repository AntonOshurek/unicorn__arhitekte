

const sliderBlok = document.querySelector('.sliderfull');
//btns
const sliderBtnPrev = document.querySelector('.sliderfull-items__button--prev');
const sliderBtnNext = document.querySelector('.sliderfull-items__button--next');
//slides wrpper
const slidesWrapper = document.querySelector('.sliderfull-items');
const slidesField = document.querySelector('.sliderfull-items__inner');
//all sledes
const slides = document.querySelectorAll('.sliderfull-items__item');

let slideIndex = 1;
let offset = 0;
const width = window.getComputedStyle(slidesWrapper).width;

slides.forEach(slide => {
  slide.style.width = width;
});

slidesField.style.width = 100 * slides.length + '%';

function getZero (num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
};

const sliderIndicatorBlock = document.querySelector('.sliderfull-indicators');
function createIndicatorBtn() {
  let element = '';

  for(let i = 0; i < slides.length; i++) {
    element += `
      <li class="sliderfull-indicators__item">
        <button class="sliderfull-indicators__button" aria-label = "slide number ${i+1}" data-slide-index = "${i + 1}"></button>
      </li>
    `;

    sliderIndicatorBlock.innerHTML = element;
  }
};
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
};

function showCurrentNumber() {
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;

  indicatorsBtn.forEach(btn => {
    btn.classList.remove('sliderfull-indicators__button--active');
  });
  indicatorsBtn[slideIndex - 1].classList.add('sliderfull-indicators__button--active');
};
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

//swips
let touchStart = null; //Точка начала касания
let touchPosition = null; //Текущая позиция
//Чувствительность — количество пикселей, после которого жест будет считаться свайпом
const sensitivity = 20;

sliderBlok.addEventListener("touchstart", function (e) { TouchStart(e); }, {passive: true}); //Начало касания
sliderBlok.addEventListener("touchmove", function (e) { TouchMove(e); }, {passive: true}); //Движение пальцем по экрану
//Пользователь отпустил экран
sliderBlok.addEventListener("touchend", function (e) { TouchEnd(e, "green"); }, {passive: true});
//Отмена касания
sliderBlok.addEventListener("touchcancel", function (e) { TouchEnd(e, "red"); }, {passive: true});

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

        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
          offset = 0;
        } else {
          offset += +width.slice(0, width.length - 2);
        }
        slideIndex++;

        slidesField.style.transform = `translate(-${offset}px)`;
        showCurrentNumber();
      }
      else { //Иначе он двигал им слева направо

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

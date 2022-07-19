
let projectSlider = function () {
  const thumbnails = document.querySelectorAll('.project-slider__thumbnails-button');
  const allSlides = document.querySelectorAll('.project-slider__slide');

  let currentSlide = thumbnails[0].getAttribute('data-slide-name'); // default value for first launch

  // for firs launch
  setActiveSlide();
  setActivetButton();

  thumbnails.forEach(item => {
    item.addEventListener('click', selectSlide);
  });

  function selectSlide() {
    currentSlide = this.getAttribute('data-slide-name');
    setActivetButton();
    setActiveSlide();
  };

  function setActivetButton() {
    thumbnails.forEach((button) => {
      if(button.getAttribute('data-slide-name') === currentSlide) {
        button.classList.add('project-slider__thumbnails-button--active');
      } else {
        button.classList.remove('project-slider__thumbnails-button--active');
      }
    });
  };

  function setActiveSlide() {
    allSlides.forEach(item => {
      if(item.getAttribute('data-slide-name') === currentSlide) {
        item.classList.add('project-slider__slide--active');
      } else {
        item.classList.remove('project-slider__slide--active');
      }
    });
  };

};

projectSlider();

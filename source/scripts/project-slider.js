
let projectSlider = function () {
  const thumbnails = document.querySelectorAll('.project-slider__thumbnails-button');
  const allSlides = document.querySelectorAll('.project-slider__slide');
  let slideName;

  // for firs launch
  selectSlideContent(thumbnails[0].getAttribute('data-slide-name'));
  thumbnails[0].classList.add('project-slider__thumbnails-button--active');

  thumbnails.forEach(item => {
      item.addEventListener('click', selectSlide)
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
      })
  }

};

export { projectSlider }

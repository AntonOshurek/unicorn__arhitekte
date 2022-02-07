const showBigPicture = () => {

  const modal = document.querySelector('.modal');
  const modalImage = document.querySelector('.modal__picture');
  // const allImages = document.querySelectorAll('.project__image');
  const gallery = document.querySelector('.project__gallery');
  const body = document.querySelector('.body');

  gallery.addEventListener('click', (evt) => {
    console.log(evt.target);

    if(evt.target.classList.contains('project__image')) {
      console.log(evt.target.src)
      openModal()

    }
  })

  function openModal() {
    modal.classList.add('modal--open');
    body.classList.add('body--modal-open');
    body.addEventListener('click', closeModal);
  };

  function closeModal(evt) {
    if(evt.target.parentElement.tagName === 'HTML') {
      modal.classList.remove('modal--open');
      body.classList.remove('body--modal-open');
      body.removeEventListener('click', closeModal);
    }
  };

}

export { showBigPicture };

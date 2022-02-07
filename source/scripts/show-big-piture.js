const showBigPicture = () => {

  const modal = document.querySelector('.modal');
  const modalImage = document.querySelector('.modal__picture');
  const gallery = document.querySelector('.project__gallery');
  const body = document.querySelector('.body');

  gallery.addEventListener('click', (evt) => {

    if(evt.target.classList.contains('project__image')) {
      let imageSourcce = evt.target.src;
      openModal(imageSourcce)
    }

  })

  function openModal(imageSourcce) {
    modal.classList.add('modal--open');
    modalImage.src = imageSourcce;
    body.classList.add('body--modal-open');
    body.addEventListener('click', closeModal);
  };

  function closeModal(evt) {
    if(evt.target.parentElement.tagName === 'HTML') {
      modal.classList.remove('modal--open');
      modalImage.src = '';
      body.classList.remove('body--modal-open');
      body.removeEventListener('click', closeModal);
    }
  };

}

export { showBigPicture };

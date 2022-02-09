const showBigPicture = () => {

  const modal = document.querySelector('.modal');
  const closeModalButton = document.querySelector('.modal__close-btn');
  const modalImage = document.querySelector('.modal__picture');
  const gallery = document.querySelector('.project__gallery');
  const body = document.querySelector('.body');

  gallery.addEventListener('click', (evt) => {

    if(evt.target.classList.contains('project__image')) {
      let imageSourcce = evt.target.src;
      openModal(imageSourcce)
    }

  })

  const onBackgroundClick = (evt) => {
    if(evt.target.parentElement.tagName === 'HTML') {
      closeModal();
    }
  }

  const onModalEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeModal();
    }
  };

  // const windowBackBlock = () => {
  //   window.onpopstate = (evt) => {
  //     evt.preventDefault();
  //     console.log('sdf ' + evt);
  //     closeModal();
  //     history.go(0);
  //   };
  // }

  function openModal(imageSourcce) {
    modal.classList.add('modal--open');
    modalImage.src = imageSourcce;
    body.classList.add('body--modal-open');
    body.addEventListener('click', onBackgroundClick);
    closeModalButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', onModalEscKeydown);
    // windowBackBlock();
  };

  function closeModal() {
    modal.classList.remove('modal--open');
    modalImage.src = '';
    body.classList.remove('body--modal-open');
    body.removeEventListener('click', onBackgroundClick);
    closeModalButton.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', onModalEscKeydown);
  };

}

export { showBigPicture };

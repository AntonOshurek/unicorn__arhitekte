const mobileMenu = () => {

  const mobileButton = document.querySelector('.header__menu-button');
  const mobileBtnIcon = document.querySelector('.ham');
  const navigation = document.querySelector('.nav');
  const body = document.querySelector('.body');
  let menuStatus;

  const toogleMobileMenu = () => {
    menuStatus ? closeMobileMenu() : openMobileMenu();
  }

  const onBackgroundClick = (evt) => {
    if(evt.target.parentElement.tagName === 'HTML') {
      closeMobileMenu();
    }
  }

  function openMobileMenu() {
    navigation.classList.add('nav--open');
    body.classList.add('body--scrolloff');
    mobileBtnIcon.classList.add('active');
    menuStatus = true;

    body.addEventListener('click', onBackgroundClick)
  }

  function closeMobileMenu() {
    navigation.classList.remove('nav--open');
    body.classList.remove('body--scrolloff');
    mobileBtnIcon.classList.remove('active');
    body.removeEventListener('click', onBackgroundClick)
    menuStatus = false;
  }

  mobileButton.addEventListener('click', toogleMobileMenu);

}

export { mobileMenu }

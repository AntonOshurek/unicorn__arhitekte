const mobileMenu = () => {

  const mobileButton = document.querySelector('.header__menu-button');
  const mobileBtnIcon = document.querySelector('.ham');
  const navigation = document.querySelector('.nav');
  const headerTitle = document.querySelector('.header__title');
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
    body.classList.add('body--menu-open');
    mobileBtnIcon.classList.add('active');
    headerTitle.classList.add('header__title--menu-open');
    menuStatus = true;

    body.addEventListener('click', onBackgroundClick)
  }

  function closeMobileMenu() {
    navigation.classList.remove('nav--open');
    body.classList.remove('body--menu-open');
    mobileBtnIcon.classList.remove('active');
    headerTitle.classList.remove('header__title--menu-open');
    menuStatus = false;

    body.removeEventListener('click', onBackgroundClick)
  }

  mobileButton.addEventListener('click', toogleMobileMenu);

}

export { mobileMenu }

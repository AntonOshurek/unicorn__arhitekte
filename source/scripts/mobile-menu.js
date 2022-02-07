const mobileMenu = () => {

  const mobileButton = document.querySelector('.header__menu-button');
  const navigation = document.querySelector('.nav');
  let menuStatus;

  function openMobileMenu() {
    navigation.classList.add('nav--open');
    menuStatus = true;
  }

  function closeMobileMenu() {
    navigation.classList.remove('nav--open');
    menuStatus = false;
  }

  const toogleMobileMenu = () => {
    menuStatus ? closeMobileMenu() : openMobileMenu();
  }

  mobileButton.addEventListener('click', toogleMobileMenu);



}

export { mobileMenu }

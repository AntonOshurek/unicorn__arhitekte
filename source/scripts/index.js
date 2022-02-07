import { sliderFull } from './slider-full';
import { mobileMenu } from './mobile-menu';

window.addEventListener('DOMContentLoaded', () => {

  if(document.location.pathname === '/index.html') {
    sliderFull();
  }

  if(document.location.pathname === '/projects.html') {
    mobileMenu();
  }

});


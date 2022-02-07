import { sliderFull } from './slider-full';
import { mobileMenu } from './mobile-menu';
import { projectFousedItem }from './project-foused-item';

window.addEventListener('DOMContentLoaded', () => {

  if(document.location.pathname === '/index.html') {
    sliderFull();
  }

  if(document.location.pathname === '/projects.html') {
    if(window.innerWidth <= 900) {
      projectFousedItem();
    }
  }

  mobileMenu();

});


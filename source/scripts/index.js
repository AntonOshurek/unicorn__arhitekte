import { sliderFull } from './slider-full';
import { mobileMenu } from './mobile-menu';
import { projectFocusedItem }from './project-foused-item';
import { showBigPicture } from './show-big-piture';

window.addEventListener('DOMContentLoaded', () => {

  if(document.location.pathname === '/index.html' || document.location.pathname === '/unicorn__arhitekte/index.html') {
    sliderFull();
  }

  if(document.location.pathname === '/projects.html' || document.location.pathname === '/unicorn__arhitekte/projects.html') {
    if(window.innerWidth <= 900) {
      projectFocusedItem();
    }
  }

  if(document.location.pathname === '/current-project.html' || document.location.pathname === '/unicorn__arhitekte/current-project.html') {
    showBigPicture();
  }

  mobileMenu();

});


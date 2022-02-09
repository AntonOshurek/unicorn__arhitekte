import { sliderFull } from './slider-full';
import { mobileMenu } from './mobile-menu';
import { projectFocusedItem }from './project-focused-item';
import { showBigPicture } from './show-big-piture';
import { saveProjectId } from './save-project-id';
import { showCurrentProjects } from './show-current-project'
import { srollIndicator } from './scroll-indicator';
import { backToProjets } from './back-to-projects';

window.addEventListener('DOMContentLoaded', () => {

  if(document.location.pathname === '/index.html' || document.location.pathname === '/unicorn__arhitekte/index.html') {
    sliderFull();
  }

  if(document.location.pathname === '/projects.html' || document.location.pathname === '/unicorn__arhitekte/projects.html') {
    saveProjectId();
    backToProjets();

    if(window.innerWidth <= 900) {
      projectFocusedItem();
      srollIndicator();
    }
  }

  if(document.location.pathname === '/current-project.html' || document.location.pathname === '/unicorn__arhitekte/current-project.html') {
    showCurrentProjects();
    showBigPicture();
  }

  mobileMenu();

});


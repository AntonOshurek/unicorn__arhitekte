import { sliderFull } from './slider-full';
import { mobileMenu } from './mobile-menu';
import { showBigPicture } from './show-big-piture';
import { saveProjectId } from './save-project-id';
import { showCurrentProjects } from './show-current-project'
import { srollIndicator } from './scroll-indicator';
import { backToProjets } from './back-to-projects';
import { coloredItem } from './colored-item';

window.addEventListener('DOMContentLoaded', () => {

  if(document.location.pathname === '/index.html' || document.location.pathname === '/unicorn__arhitekte/index.html') {
    sliderFull();
  }

  if(document.location.pathname === '/projects.html' || document.location.pathname === '/unicorn__arhitekte/projects.html') {
    saveProjectId();
    backToProjets();

    if(window.innerWidth <= 900) {
      coloredItem('.projects__card', 'data-item-id', 'projects__card--scrolled'); // itemName, dataAttribute , activeClass
      srollIndicator();
    }
  }

  if(document.location.pathname === '/current-project.html' || document.location.pathname === '/unicorn__arhitekte/current-project.html') {
    showCurrentProjects();
    showBigPicture();
  }

  if(document.location.pathname === '/our-office.html' || document.location.pathname === '/unicorn__arhitekte/our-office.html') {

    if(window.innerWidth <= 900) {
      coloredItem( '.our-team__item', 'data-item-id', 'our-team__item--colored'); // itemName, dataAttribute , activeClass
    }
  }

  mobileMenu();

});


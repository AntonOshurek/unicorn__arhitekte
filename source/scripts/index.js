import { sliderFull } from './slider-full';
import { mobileMenu } from './mobile-menu';
import { coloredItem } from './colored-item';

window.addEventListener('DOMContentLoaded', () => {

  if(document.location.pathname === '/index.html' || document.location.pathname === '/unicorn__arhitekte/index.html') {
    sliderFull();
  }

  if(document.location.pathname === '/projects.html' || document.location.pathname === '/unicorn__arhitekte/projects.html') {

    if(window.innerWidth <= 900) {
      coloredItem('.projects__card', 'data-item-id', 'projects__card--scrolled'); // itemName, dataAttribute , activeClass
    }
  }

  if(document.location.pathname === '/our-office.html' || document.location.pathname === '/unicorn__arhitekte/our-office.html') {

    if(window.innerWidth <= 900) {
      coloredItem( '.our-team__item', 'data-item-id', 'our-team__item--colored'); // itemName, dataAttribute , activeClass
    }
  }


  mobileMenu();

});


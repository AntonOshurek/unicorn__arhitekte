

import { mobileMenu } from './mobile-menu';
import { coloredItem } from './colored-item';

import { TABLET_WIDHT, PROJECTS_ITEM_CLASS, PROJECTS_COLORED_ITEM_CLASS, TEAM_ITEM_CLASS, TEAM_COLORED_ITEM_CLASS } from './consts';

window.addEventListener('DOMContentLoaded', () => {
  mobileMenu(); // launch in all pages

  if(document.location.pathname === '/projects.html' || document.location.pathname === '/unicorn__arhitekte/projects.html') {

    if(window.innerWidth <= TABLET_WIDHT) {
      coloredItem(PROJECTS_ITEM_CLASS, PROJECTS_COLORED_ITEM_CLASS); // itemName, activeClass
    }
  }

  if(document.location.pathname === '/our-office.html' || document.location.pathname === '/unicorn__arhitekte/our-office.html') {

    if(window.innerWidth <= TABLET_WIDHT) {
      coloredItem( TEAM_ITEM_CLASS, TEAM_COLORED_ITEM_CLASS); // itemName, activeClass
    }
  }
});


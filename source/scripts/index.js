// import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { mobileMenu } from './mobile-menu';
import { coloredItem } from './colored-item';

import { TABLET_WIDHT, PROJECTS_ITEM_CLASS, PROJECTS_COLORED_ITEM_CLASS, TEAM_ITEM_CLASS, TEAM_COLORED_ITEM_CLASS } from './consts';

window.addEventListener('DOMContentLoaded', () => {
  mobileMenu(); // launch in all pages

  if(document.location.pathname === '/projekty.html' || document.location.pathname === '/unicorn__arhitekte/projekty.html') {
    if(window.innerWidth <= TABLET_WIDHT) {
      coloredItem(PROJECTS_ITEM_CLASS, PROJECTS_COLORED_ITEM_CLASS); // itemName, activeClass
    }
  }

  if(document.location.pathname === '/nasze-biuro.html' || document.location.pathname === '/unicorn__arhitekte/nasze-biuro.html') {

    if(window.innerWidth <= TABLET_WIDHT) {
      coloredItem( TEAM_ITEM_CLASS, TEAM_COLORED_ITEM_CLASS); // itemName, activeClass
    }
  }
});


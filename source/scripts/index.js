// import 'lazysizes for projekty page';
import 'lazysizes/plugins/parent-fit/ls.parent-fit.js';

import { mobileMenu } from './mobile-menu.js';
import { setVisibleNode } from './set-visible-node.js';

import { TABLET_WIDHT, PROJECTS_ITEM_CLASS, PROJECTS_VISIBLE_ITEM_CLASS, TEAM_ITEM_CLASS, TEAM_VISIBLE_ITEM_CLASS } from './consts.js';

window.addEventListener('DOMContentLoaded', () => {
  mobileMenu(); // launch in all pages

  if(document.location.pathname === '/projekty.html' || document.location.pathname === '/unicorn__arhitekte/projekty.html') {
    if(window.innerWidth <= TABLET_WIDHT) {
      setVisibleNode(PROJECTS_ITEM_CLASS, PROJECTS_VISIBLE_ITEM_CLASS); // itemName, activeClass
    }
  }

  if(document.location.pathname === '/o-nas.html' || document.location.pathname === '/unicorn__arhitekte/o-nas.html') {

    if(window.innerWidth <= TABLET_WIDHT) {
      setVisibleNode( TEAM_ITEM_CLASS, TEAM_VISIBLE_ITEM_CLASS); // itemName, activeClass
    }
  }
});


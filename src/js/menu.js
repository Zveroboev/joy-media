'use strict';
const MAIN_CONTENT = document.querySelector('.theme__wrapper');
const MAIN_MENU = document.querySelector('.main-menu');

import {MENU_TOGGLER} from "./index";
import {SERVICE} from "./index";

const toggleClasses = () => {
  MAIN_CONTENT.classList.toggle('theme__wrapper--opened');
  MAIN_MENU.classList.toggle('main-menu--opened');
  MENU_TOGGLER.classList.toggle('main-header__toggler--open');
  SERVICE.classList.toggle('video__service--disabled');
};

// Обработчик клика по области вне меню
const onContentClick = (evt) => {
  evt.preventDefault();

  if (evt.target !== MENU_TOGGLER && MAIN_CONTENT.classList.contains('theme__wrapper--opened')) {
    toggleClasses();

    MAIN_CONTENT.removeEventListener('click', onContentClick);
  }
};

// Обработчик открытия бокового меню
const onMenuClick = () => {
  toggleClasses();

  //Вешаем обработчик клика по области вне меню
  MAIN_CONTENT.addEventListener('click', onContentClick);
};

export default onMenuClick;

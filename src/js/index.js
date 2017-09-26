'use strict';

const PIN = document.querySelector('.video__progress-bar-pin');

const VIDEO_CONTAINER = document.querySelector('.video__wrapper');
const PRELOAD = VIDEO_CONTAINER.querySelector('.video__spinner');

export const SERVICE = VIDEO_CONTAINER.querySelector('.video__service');
export const MENU_TOGGLER = document.querySelector('.main-header__toggler');

import onOpenPopup from './popup';
import onMenuClick from './menu';

// Обработчик события окончания анимации загрузки видео
const onVideoLoad = () => {
  PIN.classList.remove('video__progress-bar-pin--hidden');
  PRELOAD.classList.add('video__spinner--loaded');
  SERVICE.classList.add('video__service--loaded');
};

// Следим за анимацией загрузки видео
PRELOAD.addEventListener('animationend', onVideoLoad);
// Следим за кликом по кнопке "СМОТЕРТЬ"
SERVICE.addEventListener('click', onOpenPopup);
// Следим за кнопкой открытия бокового меню
MENU_TOGGLER.addEventListener('click', onMenuClick);


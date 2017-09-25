'use strict';

const VIDEO_CONTAINER = document.querySelector('.video__wrapper');
const PRELOAD_CONTAINER = VIDEO_CONTAINER.querySelector('.video__loading');
const PRELOAD = PRELOAD_CONTAINER.querySelector('.video__spinner');
const SERVICE = PRELOAD_CONTAINER.querySelector('.video__service');

const PROGRESS_BAR = document.querySelector('.video__progress-bar-container');
const PIN = PROGRESS_BAR.querySelector('.video__progress-bar-pin');

const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = POPUP.querySelector('.popup__close');

const MENU_TOGGLER = document.querySelector('.main-header__toggler');

// Обработчик события окончания анимации загрузки видео
const onVideoLoad = () => {
  PIN.classList.remove('video__progress-bar-pin--hidden');
  PRELOAD.classList.add('video__spinner--loaded');
  SERVICE.classList.add('video__service--loaded');
};

// Обработчик закрытия попапа
const onClosePopup = () => {
  // Скрывам попап
  POPUP.classList.add('popup--hidden');
  // Убираем слежение за кнокпкой закрытия
  POPUP_CLOSE.removeEventListener('click', onClosePopup);
  // Разрешаем скролл
  document.body.style.overflow = 'auto';
  // Сбрасываем инпут к изначальному состоянию
  POPUP.querySelector('.popup__input').checked = false;
};

// Обработчик открытия попапа
const onOpenPopup = () => {
  // Показываем попап
  POPUP.classList.remove('popup--hidden');
  // Вешаем слежение за кнопкой закрытием попапа
  POPUP_CLOSE.addEventListener('click', onClosePopup);
  // Запрещаем скролл
  document.body.style.overflow = 'hidden';
};

// Обработчик открытия бокового меню
const onMenuClick = () => {
  document.querySelector('.theme__wrapper').classList.toggle('theme__wrapper--opened');
  document.querySelector('.main-menu').classList.toggle('main-menu--opened');
};

// Следим за анимацией загрузки видео
PRELOAD.addEventListener('animationend', onVideoLoad);
// Следим за кликом по кнопке "СМОТЕРТЬ"
SERVICE.addEventListener('click', onOpenPopup);
// Следим за кнопкой открытия бокового меню
MENU_TOGGLER.addEventListener('click', onMenuClick);

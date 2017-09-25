'use strict';

const VIDEO_CONTAINER = document.querySelector('.video__wrapper');
const PRELOAD_CONTAINER = VIDEO_CONTAINER.querySelector('.video__loading');
const PRELOAD = PRELOAD_CONTAINER.querySelector('.video__spinner');
const SERVICE = PRELOAD_CONTAINER.querySelector('.video__service');

const PROGRESS_BAR = document.querySelector('.video__progress-bar-container');
const PIN = PROGRESS_BAR.querySelector('.video__progress-bar-pin');

const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = POPUP.querySelector('.popup__close');

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

// Следим за анимацией загрузки видео
PRELOAD.addEventListener('animationend', onVideoLoad);
// Следим за кликом по кнопке "СМОТЕРТЬ"
SERVICE.addEventListener('click', onOpenPopup);

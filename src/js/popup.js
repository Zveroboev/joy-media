'use strict';

const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = POPUP.querySelector('.popup__close');

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

export default onOpenPopup;

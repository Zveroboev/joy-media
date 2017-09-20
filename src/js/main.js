'use strict';

(function () {
  const VIDEO_CONTAINER = document.querySelector('.video__wrapper');
  const PRELOAD_CONTAINER = VIDEO_CONTAINER.querySelector('.video__loading');
  const PRELOAD = PRELOAD_CONTAINER.querySelector('.video__spinner');
  const SERVICE = PRELOAD_CONTAINER.querySelector('.video__service');

  const PROGRESS_BAR = document.querySelector('.video__progress-bar-container');
  const PIN = PROGRESS_BAR.querySelector('.video__progress-bar-pin');

  // Обработчик события окончания анимации загрузки видео
  const onVideoLoad = () => {
    PIN.classList.remove('video__progress-bar-pin--hidden');
    PRELOAD.classList.add('video__spinner--loaded');
    SERVICE.classList.add('video__service--loaded');
  };

  // Следим за анимацией загрузки видео
  PRELOAD.addEventListener('animationend', onVideoLoad)
})();

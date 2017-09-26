/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MENU_TOGGLER = exports.SERVICE = undefined;

var _popup = __webpack_require__(1);

var _popup2 = _interopRequireDefault(_popup);

var _menu = __webpack_require__(2);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PIN = document.querySelector('.video__progress-bar-pin');

var VIDEO_CONTAINER = document.querySelector('.video__wrapper');
var PRELOAD = VIDEO_CONTAINER.querySelector('.video__spinner');

var SERVICE = exports.SERVICE = VIDEO_CONTAINER.querySelector('.video__service');
var MENU_TOGGLER = exports.MENU_TOGGLER = document.querySelector('.main-header__toggler');

// Обработчик события окончания анимации загрузки видео
var onVideoLoad = function onVideoLoad() {
  PIN.classList.remove('video__progress-bar-pin--hidden');
  PRELOAD.classList.add('video__spinner--loaded');
  SERVICE.classList.add('video__service--loaded');
};

// Следим за анимацией загрузки видео
PRELOAD.addEventListener('animationend', onVideoLoad);
// Следим за кликом по кнопке "СМОТЕРТЬ"
SERVICE.addEventListener('click', _popup2.default);
// Следим за кнопкой открытия бокового меню
MENU_TOGGLER.addEventListener('click', _menu2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var POPUP = document.querySelector('.popup');
var POPUP_CLOSE = POPUP.querySelector('.popup__close');

// Обработчик закрытия попапа
var onClosePopup = function onClosePopup() {
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
var onOpenPopup = function onOpenPopup() {
  // Показываем попап
  POPUP.classList.remove('popup--hidden');
  // Вешаем слежение за кнопкой закрытием попапа
  POPUP_CLOSE.addEventListener('click', onClosePopup);
  // Запрещаем скролл
  document.body.style.overflow = 'hidden';
};

exports.default = onOpenPopup;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(0);

var MAIN_CONTENT = document.querySelector('.theme__wrapper');
var MAIN_MENU = document.querySelector('.main-menu');

var toggleClasses = function toggleClasses() {
  MAIN_CONTENT.classList.toggle('theme__wrapper--opened');
  MAIN_MENU.classList.toggle('main-menu--opened');
  _index.MENU_TOGGLER.classList.toggle('main-header__toggler--open');
  _index.SERVICE.classList.toggle('video__service--disabled');
};

// Обработчик клика по области вне меню
var onContentClick = function onContentClick(evt) {
  evt.preventDefault();

  if (evt.target !== _index.MENU_TOGGLER && MAIN_CONTENT.classList.contains('theme__wrapper--opened')) {
    toggleClasses();

    MAIN_CONTENT.removeEventListener('click', onContentClick);
  }
};

// Обработчик открытия бокового меню
var onMenuClick = function onMenuClick() {
  toggleClasses();

  //Вешаем обработчик клика по области вне меню
  MAIN_CONTENT.addEventListener('click', onContentClick);
};

exports.default = onMenuClick;

/***/ })
/******/ ]);
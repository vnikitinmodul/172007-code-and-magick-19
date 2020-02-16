'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupList = document.querySelector('.setup-similar');

  var openSetup = function () {
    setup.classList.remove('hidden');
    setupList.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closeSetup = function () {
    setup.classList.add('hidden');
    setupList.classList.add('hidden');
    setup.style.left = '';
    setup.style.top = '';
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === window.util.Keys.ESC && evt.target && !evt.target.matches('.setup-user-name')) {
      closeSetup();
    }
  };

  var onSetupOpenClick = function () {
    openSetup();
  };

  var onSetupOpenKeydown = function (evt) {
    if (evt.key === window.util.Keys.ENTER) {
      openSetup();
    }
  };

  var onSetupCloseClick = function () {
    closeSetup();
  };

  var onSetupCloseKeydown = function (evt) {
    if (evt.key === window.util.Keys.ENTER) {
      closeSetup();
    }
  };

  setupOpen.addEventListener('click', onSetupOpenClick);

  setupOpenIcon.addEventListener('keydown', onSetupOpenKeydown);

  setupClose.addEventListener('click', onSetupCloseClick);

  setupClose.addEventListener('keydown', onSetupCloseKeydown);
}());

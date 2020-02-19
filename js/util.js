'use strict';

(function () {
  window.util = {
    Keys: {
      ESC: 'Escape',
      ENTER: 'Enter'
    },
    ErrorParam: {
      TIMEOUT: 5000,
      CLASS: 'error'
    },
    getRandomItem: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    getMaxInArray: function (array) {
      var max = array[0];

      for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i];
        }
      }

      return max;
    },
    showError: function (text) {
      var errorBlock = document.createElement('div');

      errorBlock.classList.add(this.ErrorParam.CLASS);
      errorBlock.textContent = text;
      document.querySelector('body').appendChild(errorBlock);
      setTimeout(function () {
        errorBlock.remove();
      }, this.ErrorParam.TIMEOUT);
    }
  };
}());

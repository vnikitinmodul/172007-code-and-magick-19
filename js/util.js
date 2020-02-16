'use strict';

(function () {
  window.util = {
    Keys: {
      ESC: 'Escape',
      ENTER: 'Enter'
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
    }
  };
}());

'use strict';

(function () {
  var upload = document.querySelector('.upload');
  var setup = document.querySelector('.setup');

  var startCoords = {
    x: 0,
    y: 0
  };

  var isMoved = false;

  var onUploadMousedown = function (evt) {
    evt.preventDefault();

    startCoords.x = evt.clientX;
    startCoords.y = evt.clientY;

    document.addEventListener('mousemove', onUploadMousemove);
    document.addEventListener('mouseup', onUploadMouseup);
  };

  var onUploadMousemove = function (evt) {
    var shift = {
      x: startCoords.x - evt.clientX,
      y: startCoords.y - evt.clientY
    };

    startCoords.x = evt.clientX;
    startCoords.y = evt.clientY;

    isMoved = true;

    setup.style.top = (setup.offsetTop - shift.y) + 'px';
    setup.style.left = (setup.offsetLeft - shift.x) + 'px';
  };

  var onUploadMouseup = function (evt) {
    evt.preventDefault();

    document.removeEventListener('mousemove', onUploadMousemove);
    document.removeEventListener('mouseup', onUploadMouseup);

    if (isMoved) {
      var onClickPreventDefault = function (clickEvt) {
        clickEvt.preventDefault();
        upload.removeEventListener('click', onClickPreventDefault);
      };
      upload.addEventListener('click', onClickPreventDefault);
    }
  };

  upload.addEventListener('mousedown', onUploadMousedown);
}());

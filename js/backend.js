'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  var LOAD_METHOD = '/data';
  var XHR_TIMEOUT = 10000;
  var STATUS_SUCCESS = 200;

  window.backend = {
    initXhr: function (onLoad, onError, url, type) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === STATUS_SUCCESS) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = XHR_TIMEOUT;

      xhr.open(type, url);

      return xhr;
    },
    load: function (onLoad, onError) {
      var xhr = this.initXhr(onLoad, onError, URL + LOAD_METHOD, 'GET');
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      var xhr = this.initXhr(onLoad, onError, URL, 'POST');
      xhr.send(data);
    }
  };
}());

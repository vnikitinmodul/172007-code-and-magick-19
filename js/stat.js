'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.font = '16px';
  ctx.fillText('Ура вы победили!', 130, 50);
  ctx.fillText('Список результатов: ', 130, 75);

  var max = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }

  for (var j = 0; j < names.length; j++) {
    var leftPos = 150 + (40 + 50) * j;
    var topPos = 220;
    var colHeight = times[j] / max * 100;

    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(237, ' + Math.round(Math.random() * 100) + '%, 50%)';
    }

    ctx.fillRect(leftPos, topPos - colHeight, 40, colHeight);

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(Math.round(times[i]), leftPos, (topPos - 10 - colHeight));
    ctx.fillText(names[i], leftPos, topPos + 20);
  }
};

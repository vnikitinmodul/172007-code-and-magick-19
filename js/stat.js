'use strict';

var cloud = {
  LEFT: 100,
  TOP: 10,
  WIDTH: 420,
  HEIGHT: 270,
  SHADOW_SHIFT: 10
};

var descr = {
  STR_1: 'Ура вы победили!',
  STR_2: 'Список результатов: ',
  LEFT: 130,
  STR_TOP_1: 50,
  STR_TOP_2: 75
};

var col = {
  WIDTH: 40,
  INDENT: 50,
  LEFT: 150,
  TOP: 220
};

var color = {
  RED: 'rgba(255, 0, 0, 1)',
  BLACK: 'rgb(0, 0, 0)',
  WHITE: 'rgb(255, 255, 255)',
  SHADOW: 'rgba(0, 0, 0, 0.7)',
  getBlueColor: function () {
    return 'hsl(237, ' + Math.round(Math.random() * 100) + '%, 50%)';
  }
};

var ME = 'Вы';
var FONT = '16px PT Mono';
var TIME_SHIFT = 10;
var NAME_SHIFT = 20;

var renderCloud = function (ctx) {
  ctx.fillStyle = color.SHADOW;
  ctx.fillRect(cloud.LEFT + cloud.SHADOW_SHIFT, cloud.TOP + cloud.SHADOW_SHIFT, cloud.WIDTH, cloud.HEIGHT);
  ctx.fillStyle = color.WHITE;
  ctx.fillRect(cloud.LEFT, cloud.TOP, cloud.WIDTH, cloud.HEIGHT);
};

var renderDescr = function (ctx) {
  ctx.fillStyle = color.BLACK;
  ctx.font = FONT;
  ctx.fillText(descr.STR_1, descr.LEFT, descr.STR_TOP_1);
  ctx.fillText(descr.STR_2, descr.LEFT, descr.STR_TOP_2);
};

var renderCol = function (ctx, colParam) {
  ctx.fillRect(colParam.leftPos, colParam.topPos - colParam.colHeight, col.WIDTH, colParam.colHeight);
};

var renderTime = function (ctx, colParam) {
  ctx.fillStyle = color.BLACK;
  ctx.fillText(Math.round(colParam.time), colParam.leftPos, (colParam.topPos - TIME_SHIFT - colParam.colHeight));
};

var renderName = function (ctx, colParam) {
  ctx.fillStyle = color.BLACK;
  ctx.fillText(colParam.name, colParam.leftPos, colParam.topPos + NAME_SHIFT);
};

var getMaxInArray = function (array) {
  var max = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
};

window.renderStatistics = function (ctx, names, times) {
  var maxValue = getMaxInArray(times);

  renderCloud(ctx);
  renderDescr(ctx);

  for (var j = 0; j < names.length; j++) {
    var colParam = {
      leftPos: col.LEFT + (col.WIDTH + col.INDENT) * j,
      topPos: col.TOP,
      colHeight: times[j] / maxValue * 100,
      name: names[j],
      time: times[j]
    };

    if (names[j] === ME) {
      ctx.fillStyle = color.RED;
    } else {
      ctx.fillStyle = color.getBlueColor();
    }

    renderCol(ctx, colParam);
    renderTime(ctx, colParam);
    renderName(ctx, colParam);
  }
};

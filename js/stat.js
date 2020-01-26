'use strict';

var Cloud = {
  LEFT: 100,
  TOP: 10,
  WIDTH: 420,
  HEIGHT: 270,
  SHADOW_SHIFT: 10
};

var Descr = {
  STR_1: 'Ура вы победили!',
  STR_2: 'Список результатов: ',
  LEFT: 130,
  STR_TOP_1: 50,
  STR_TOP_2: 75
};

var Col = {
  WIDTH: 40,
  INDENT: 50,
  LEFT: 150,
  TOP: 220
};

var Color = {
  RED: 'rgba(255, 0, 0, 1)',
  BLACK: 'rgb(0, 0, 0)',
  WHITE: 'rgb(255, 255, 255)',
  SHADOW: 'rgba(0, 0, 0, 0.7)'
};

var ME = 'Вы';
var FONT = '16px PT Mono';
var TIME_SHIFT = 10;
var NAME_SHIFT = 20;

var getBlueColor = function () {
  return 'hsl(237, ' + Math.round(Math.random() * 100) + '%, 50%)';
};

var renderCloud = function (ctx) {
  ctx.fillStyle = Color.SHADOW;
  ctx.fillRect(Cloud.LEFT + Cloud.SHADOW_SHIFT, Cloud.TOP + Cloud.SHADOW_SHIFT, Cloud.WIDTH, Cloud.HEIGHT);
  ctx.fillStyle = Color.WHITE;
  ctx.fillRect(Cloud.LEFT, Cloud.TOP, Cloud.WIDTH, Cloud.HEIGHT);
};

var renderDescr = function (ctx) {
  ctx.fillStyle = Color.BLACK;
  ctx.font = FONT;
  ctx.fillText(Descr.STR_1, Descr.LEFT, Descr.STR_TOP_1);
  ctx.fillText(Descr.STR_2, Descr.LEFT, Descr.STR_TOP_2);
};

var renderCol = function (ctx, colParam) {
  ctx.fillRect(colParam.leftPos, colParam.topPos - colParam.colHeight, Col.WIDTH, colParam.colHeight);
};

var renderTime = function (ctx, colParam) {
  ctx.fillStyle = Color.BLACK;
  ctx.fillText(Math.round(colParam.time), colParam.leftPos, (colParam.topPos - TIME_SHIFT - colParam.colHeight));
};

var renderName = function (ctx, colParam) {
  ctx.fillStyle = Color.BLACK;
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
      leftPos: Col.LEFT + (Col.WIDTH + Col.INDENT) * j,
      topPos: Col.TOP,
      colHeight: times[j] / maxValue * 100,
      name: names[j],
      time: times[j]
    };

    if (names[j] === ME) {
      ctx.fillStyle = Color.RED;
    } else {
      ctx.fillStyle = getBlueColor();
    }

    renderCol(ctx, colParam);
    renderTime(ctx, colParam);
    renderName(ctx, colParam);
  }
};

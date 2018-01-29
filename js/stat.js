'use strict';


var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var START_POINT_X = 100;
var START_POINT_Y = 10;
var GAP_TO_CENTER_TEXT_BEFORE_X = 105;
var GAP_TO_CENTER_TEXT_BEFORE_Y = 30;
var FONT_SIZE = 16;
var GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var GAP_BETWEEN_BARS = 50;
var THE_END_OF_THE_PART_OF_TEXT_Y = GAP_TO_CENTER_TEXT_BEFORE_Y + FONT_SIZE + GAP;
var WIDTH_OF_SECTION = BAR_WIDTH + GAP_BETWEEN_BARS;

var players = ['Вы', 'Вася', 'Андрей', 'Саша'];
var times = [1500, 2300, 1750, 2930];


var renderCloud = function (ctx, x, y) {

  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function () {
  var maxElement = times[0];

  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx) {
  var color = ctx.fillStyle;
  renderCloud(ctx, START_POINT_X + 10, START_POINT_Y + 10, color);
  renderCloud(ctx, START_POINT_X, START_POINT_Y, 'white');
  ctx.font = 'FONT_SIZEpx PT Mono';
  ctx.fillText('Ура вы победили!', GAP_TO_CENTER_TEXT_BEFORE_X, GAP_TO_CENTER_TEXT_BEFORE_Y);
  ctx.fillText('Список результатов:', GAP_TO_CENTER_TEXT_BEFORE_X, THE_END_OF_THE_PART_OF_TEXT_Y);


  if (players [i] !== 'Вы') {
    color = 'rgb(0, 0, 128, Math.random())';
  } else {
    color = 'rgba(255, 0, 0, 1)';
  }

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], players[i] * WIDTH_OF_SECTION, CLOUD_HEIGHT - GAP - FONT_SIZE);
    ctx.fillRect(GAP + players[i] * WIDTH_OF_SECTION, THE_END_OF_THE_PART_OF_TEXT_Y + GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};

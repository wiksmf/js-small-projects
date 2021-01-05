'use strict';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const windowHeight = window.innerHeight - 100;
const windowWidth = window.innerWidth - 100;

canvas.width = windowWidth;
canvas.height = windowHeight;

let x = randomNumber(1, windowWidth);
let y = randomNumber(1, windowHeight);

setInterval(function () {
  ctx.clearRect(0, 0, windowWidth, windowHeight);

  for (let i = 0; i < randomNumber(1, 20); i++) {
    drawBee(randomNumber(1, windowWidth), randomNumber(1, windowWidth));
  }

  x = update(x);
  y = update(y);
}, 350);

const circle = function (x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.fillStyle = color;
}

const drawBee = function (x, y) {
  circle(x, y, 16, 'yellow');
  circle(x, y, 16, 'white');
  circle(x - 10, y - 22, 10, 'white');
  circle(x + 10, y - 22, 10, 'black');
  circle(x - 4, y - 2, 4, 'black');
  circle(x + 4, y - 2, 4, 'black');
}

const update = function (x, y) {
  coords += randomNumber(1, 10);

  if (coords > windowWidth) coords = windowWidth;
  if (coords < 0) coords = 0;

  return coords;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let paint = false;
let x = 0;
let y = 0;

function getPosition(e) {
  x = e.clientX - canvas.offsetLeft;
  y = e.clientY - canvas.offsetTop;
}

function startDraw(e) {
  paint = true;
  getPosition(e);
}

function stopDraw() {
  paint = false;
}

function draw(e) {
  if (!paint) return;

  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(x, y);
  getPosition(e);
  ctx.lineTo(x, y);
  ctx.stroke();
}

window.addEventListener('load', () => {
  document.addEventListener('mousedown', startDraw);
  document.addEventListener('mouseup', stopDraw);
  document.addEventListener('mousemove', draw);
});
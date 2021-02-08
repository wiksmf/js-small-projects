'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const drawBtn = document.querySelector('#draw');
const eraseBtn = document.querySelector('#erase');
const color = document.querySelector('#color');
const size = document.querySelector('#size');

let paint = false;
let coords = {
  x: 0,
  y: 0,
};

// Updates the coordinates of the mouse
function getPosition(e) {
  coords.x = e.clientX - canvas.offsetLeft;
  coords.y = e.clientY - canvas.offsetTop;
}

// Start drawing on canvas
function startDraw(e) {
  paint = true;
  getPosition(e);
}

// Stop drawing on canvas
function stopDraw() {
  paint = false;
}

// Draw on canvas
function draw(e) {
  if (!paint) return;

  size.defaultValue = 5;

  if (drawBtn.checked) ctx.strokeStyle = color.value;
  else if (eraseBtn.checked) ctx.strokeStyle = 'white';

  ctx.lineCap = 'round';
  ctx.lineWidth = size.value;

  ctx.beginPath();
  ctx.moveTo(coords.x, coords.y);
  getPosition(e);
  ctx.lineTo(coords.x, coords.y);
  ctx.stroke();
}

window.addEventListener('load', () => {
  document.addEventListener('mousedown', startDraw);
  document.addEventListener('mouseup', stopDraw);
  document.addEventListener('mousemove', draw);
});

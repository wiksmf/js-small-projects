'use strict';

const figures = document.querySelectorAll('div');

let initialX = 0;
let initialY = 0;
let currentX = 0;
let currentY = 0;
let xOffset = 0;
let yOffset = 0;

let dragActive = false;

figures.forEach((figure) => {
  figure.addEventListener('mousedown', (e) => {
    figure.classList.add('selected');
    dragActive = true;
    initialX = e.offsetX;
    initialY = e.offsetY;
  });

  figure.addEventListener('mousemove', (e) => {
    if (dragActive) {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      updatePosition(figure, currentX, currentY);
    }
  });

  figure.addEventListener('mouseup', () => {
    figure.classList.remove('selected');
    dragActive = false;
  });
});

function updatePosition(figure, currentX, currentY) {
  figure.style.top = `${currentY}px`;
  figure.style.left = `${currentX}px`;
}

'use strict';

const container = document.querySelector('.container ');
const heading = document.querySelector('.heading-primary');
const paragraph = document.querySelector('.paragraph');
const width = window.innerWidth;
const height = window.innerHeight;

document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  const red = Math.trunc((x / width) * 100);
  const green = Math.trunc((y / height) * 100);
  const blue = Math.trunc((red + green) / 2);

  const color = red + green + blue;

  heading.style.color = setTextColor(color);
  paragraph.style.color = setTextColor(color);
  container.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
});

function setTextColor(color) {
  return color > 60 ? `rgb(0, 0, 0)` : `rgb(255,255, 255)`;
}

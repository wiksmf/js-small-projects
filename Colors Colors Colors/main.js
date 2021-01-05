'use strict';

const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const width = window.innerWidth;
const height = window.innerHeight;


document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const red = Math.trunc((x / width) * 100);
  const green = Math.trunc((y / height) * 100);
  const blue = Math.trunc((red + green) / 2);

  var color = red + green + blue;

  h1.style.color = setTextColor(color);
  p.style.color = setTextColor(color);

  body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
});


function setTextColor(color) {
  return (color > 60) ? `rgb(0, 0, 0)` : `rgb(255,255, 255)`;
}
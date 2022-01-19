'use strict';

const images = document.querySelector('#imgs');
const img = document.querySelectorAll('#imgs img');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');

let idx = 0;
let interval = setInterval(run, 3000);

function run() {
  idx++;

  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) idx = 0;
  else if (idx < 0) idx = img.length - 1;

  images.style.transform = `translateX(-${idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

btnRight.addEventListener('click', () => {
  idx++;

  changeImage();
  resetInterval();
});

btnLeft.addEventListener('click', () => {
  idx--;

  changeImage();
  resetInterval();
});

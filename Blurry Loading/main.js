'use strict';

const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;
let blurInterval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) clearInterval(blurInterval);

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

'use strict';

const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 4;

for (let i = 0; i < rows * 5; i++) {
  const image = document.createElement('img');
  image.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(image);
}

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}

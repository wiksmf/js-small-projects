'use strict';

const map = document.querySelector('.map');
const displayDistance = document.querySelector('.distance');

let width = 600;
let height = 600;
let clicks = 0;

let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};


map.addEventListener('click', function (event) {
  clicks++;

  let distance = getDistance(event, target);
  displayDistance.textContent = getDistanceHint(distance);

  if (distance < 8) {
    displayDistance.style.color = null;
    displayDistance.textContent = `You found the treasure in ${clicks} clicks!`;
    displayDistance.classList.add('found');
  }
});


function getDistance(event, target) {
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return Math.trunc(Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)));
}


function getDistanceHint(distance) {
  if (distance < 10) {
    displayDistance.style.color = '#ff0000';
    return "Boiling hot!";
  } else if (distance < 20) {
    displayDistance.style.color = '#ff0000';
    return "Really hot";
  } else if (distance < 40) {
    displayDistance.style.color = '#ff0000';
    return "Hot";
  } else if (distance < 80) {
    displayDistance.style.color = '#f6830f';
    return "Warm";
  } else if (distance < 160) {
    displayDistance.style.color = '#00ffff';
    return "Cold";
  } else if (distance < 320) {
    displayDistance.style.color = '#00ffff';
    return "Really cold";
  } else {
    displayDistance.style.color = '#00ffff';
    return "Freezing!";
  }
}


function getRandomNumber(size) {
  return Math.trunc(Math.random() * size);
}
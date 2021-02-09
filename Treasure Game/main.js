'use strict';

const map = document.querySelector('.map');
const playAgain = document.querySelector('.play-again');
const displayDistance = document.querySelector('.distance');

const target = {};
let clicks, game;

// Event listeners
map.addEventListener('click', startGame);
playAgain.addEventListener('click', resetGame);

// Start the game when the user clicks on the map
function startGame(e) {
  if (game) {
    clicks++;
    const distance = getDistance(e, target);
    displayDistance.textContent = getDistanceHint(distance);
    displayDistance.style.color = updateHintColor(distance);
    console.log(clicks);
  }
}

// Get distance between user's click and the target
function getDistance(e, target) {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.trunc(Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)));
}

// Get distance hint
function getDistanceHint(distance) {
  if (distance < 8) {
    game = false;
    playAgain.classList.remove('hidden');
    return `you found the treasure in ${clicks} clicks!`;
  }
  if (distance < 10) return 'Boiling hot!';
  else if (distance < 20) return 'Really hot';
  else if (distance < 40) return 'Hot';
  else if (distance < 80) return 'Warm';
  else if (distance < 160) return 'Cold';
  else if (distance < 320) return 'Really cold';
  else return 'Freezing!';
}

// Update hint color
function updateHintColor(distance) {
  if (distance < 8) return '#00ff00';
  if (distance < 40) return '#ff0000';
  if (distance < 80) return '#f6830f';
  if (distance > 80) return '#00ffff';
}

// Reset the game
function resetGame() {
  playAgain.classList.add('hidden');
  init();
}

// Get random number
function getRandomNumber(size) {
  return Math.trunc(Math.random() * size);
}

function init() {
  game = true;
  clicks = 0;
  target.x = getRandomNumber(1100);
  target.y = getRandomNumber(550);

  displayDistance.textContent = 'click on the map to find the treasure';
  displayDistance.style.color = '#ffffdd';
}

init();

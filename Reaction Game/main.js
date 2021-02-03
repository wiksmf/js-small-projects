'use strict';

const spinnerContainer = document.querySelector('.spinner');
const spinner = document.querySelector('.spinner p');
const btnStart = document.querySelector('.btn');
const result = document.querySelector('.result');

let rotateCount = 0;
let startTime = null;
let requestAF;

// Handle the start button when clicked
btnStart.addEventListener('click', startGame);

// Start the spinner and the game
function startGame() {
  result.classList.add('visible');
  btnStart.classList.add('visible');
  spinnerContainer.classList.remove('visible');
  animateSpinner();
  setTimeout(endGame, randomNumber(5000, 10000));
}

// Animates the spinner
function animateSpinner(timestamp) {
  if (!startTime) startTime = timestamp;

  rotateCount = (timestamp - startTime) / 3;

  if (rotateCount > 359) rotateCount %= 360;

  spinner.style.transform = `rotate(${rotateCount}deg)`;
  requestAF = requestAnimationFrame(animateSpinner);
}

// End the game
function endGame() {
  cancelAnimationFrame(requestAF);
  spinnerContainer.classList.add('visible');
  result.classList.remove('visible');
  result.textContent = 'PLAYERS GO!!!';
  document.addEventListener('keydown', clickHandler);
}

// Check which user win the game
function clickHandler(e) {
  if (e.key === 'a' || e.key === 'A') result.textContent = `Player 1 won!🚩`;
  if (e.key === 'l' || e.key === 'L') result.textContent = `Player 2 won!🚩`;

  document.removeEventListener('keydown', clickHandler);
  setTimeout(() => btnStart.classList.remove('visible'), 2500);
}

// Return a random number between two given values
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

'use strict';

const displayNumber = document.querySelector('.random-number');
const startBtn = document.querySelector('.start-btn');
const gameBtn = document.querySelectorAll('.game-btn');
const displayPoints = document.querySelector('.points');

let random;
let points = 0;

// Start the game
startBtn.addEventListener('click', () => {
  startBtn.classList.add('hidden');
  gameBtn.forEach(btn => (btn.disabled = false));
  updateUI();
  playFizzBuzz();
});

// Update the game section
function updateUI() {
  random = randomNumber();
  displayNumber.textContent = random;
  displayPoints.textContent = `${points}`;
}

// Check user's answers
function playFizzBuzz() {
  gameBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      checkFizzBuzz() === btn.value ? points++ : '';
      updateUI();
    });
  });
}

// Check if the random number is divisible by 3, 5, both,
// or none of the previous
function checkFizzBuzz() {
  if (random % 3 === 0 && random % 5 === 0) return 'fizzBuzz';
  else if (random % 3 === 0) return 'fizz';
  else if (random % 5 === 0) return 'buzz';
  else return 'next';
}

// Get random number
function randomNumber() {
  return Math.round(Math.random() * 1000) + 1;
}

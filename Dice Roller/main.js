'use strict';

const gameInfo = document.querySelector('.heading-primary');
const shakeItem = document.querySelectorAll('.shake-item');
const firstDice = document.querySelector('.first-dice');
const secondDice = document.querySelector('.second-dice');
const shakeBtn = document.querySelector('.btn-shake');

const imgDice = ['dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6'];

// Shake the dice when the button is pressed
shakeBtn.addEventListener('click', () => {
  shakeDice();
  setTimeout(getRandomDice, 1000);
});

// Function to shake the heading and the dice
function shakeDice() {
  gameInfo.textContent = `shake, shake, shake ...`;
  shakeItem.forEach(item => item.classList.add('shake'));
}

// Function to get a random dice and update the heading
function getRandomDice() {
  const randomN1 = randomNumber();
  const randomN2 = randomNumber();

  shakeItem.forEach(item => item.classList.remove('shake'));

  firstDice.src = `images/${imgDice[randomN1]}.png`;
  secondDice.src = `images/${imgDice[randomN2]}.png`;

  if (randomN1 > randomN2) gameInfo.textContent = `🎊 Player 1 wins!`;
  else if (randomN1 < randomN2) gameInfo.textContent = `Player 2 wins! 🎊`;
  else gameInfo.textContent = `🎊 DRAW! 🎊`;
}

// Function to get a random number between 0 and 5
function randomNumber() {
  return Math.round(Math.random() * 5);
}

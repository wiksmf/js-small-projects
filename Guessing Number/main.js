'use strict';

const secretNumber = document.querySelector('.number');

const chances = document.querySelector('.chances-left');
const guessField = document.querySelector('.user-guess');
const previousGuesses = document.querySelector('.previous-guesses');
const guesses = document.querySelector('.guesses');

const message = document.querySelector('.message');
const displayNumberRounds = document.querySelector('.rounds');
const displayNumberWins = document.querySelector('.wins');
const displayNumberLosses = document.querySelector('.losses');

const submitBtn = document.querySelector('.btn-guess');
const resetBtn = document.querySelector('.btn-again');
const overlay = document.querySelector('.overlay');

let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
let chancesLeft = 10;
let wins = 0;
let losses = 0;

submitBtn.addEventListener('click', checkGuess);

// Check whether the guess is the correct number
function checkGuess() {
  let userGuess = +guessField.value;

  if (!userGuess) {
    displayMessage('message', '⛔️ No number!');
    return;
  }

  if (userGuess === randomNumber) {
    wins++;
    message.textContent = '🎉 congratulations! you got it right! 🎉';
    displayNumberWins.textContent = wins;
    secretNumber.textContent = randomNumber;
    secretNumber.classList.add('guessed');
    setGameOver();
  } else if (chancesLeft <= 1) {
    losses++;
    message.textContent = '😢 game over 😢';
    displayNumberLosses.textContent = losses;
    setGameOver();
  } else {
    if (chancesLeft === 10) {
      previousGuesses.classList.remove('hidden');
      guesses.classList.remove('hidden');
    }

    message.textContent =
      userGuess < randomNumber
        ? `🔽 last guess was too low!`
        : `🔼 last guess was too high!`;
  }

  chancesLeft--;

  chances.textContent = chancesLeft;
  guesses.textContent += `${userGuess} `;
  displayNumberRounds.textContent = wins + losses;

  guessField.value = '';
  guessField.focus();
}

// Restart the game
function setGameOver() {
  guessField.disabled = true;
  submitBtn.disabled = true;
  resetBtn.classList.remove('hidden');
  overlay.classList.remove('hidden');
  resetBtn.addEventListener('click', resetGame);
}

// Reset the game logic and webpage
function resetGame() {
  resetBtn.classList.add('hidden');
  overlay.classList.add('hidden');

  guessField.disabled = false;
  submitBtn.disabled = false;

  previousGuesses.classList.add('hidden');
  guesses.classList.add('hidden');
  secretNumber.classList.remove('guessed');

  randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
  chancesLeft = 10;

  message.textContent = '💬 start guessing . . .';
  secretNumber.textContent = `?`;
  chances.textContent = chancesLeft;
  guesses.textContent = '';

  guessField.value = '';
}

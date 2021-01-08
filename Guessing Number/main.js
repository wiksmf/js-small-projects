'use strict';

const secretNumber = document.querySelector('.number');

const chances = document.querySelector('.chances-left');
const guessField = document.querySelector('.user-guess');
const message = document.querySelector('.message');
const previousGuesses = document.querySelector('.previous-guesses');
const guesses = document.querySelector('.guesses');

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const gameOver = document.querySelector('.game-over');

const displayNumberRounds = document.querySelector('.rounds');
const displayNumberWins = document.querySelector('.wins');
const displayNumberLosses = document.querySelector('.losses');

const playBtn = document.querySelector('.btn-guess');
const resetBtn = document.querySelector('.btn-again');

let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
let chancesLeft = 10;
let wins = 0;
let losses = 0;

playBtn.addEventListener('click', (e) => {
  e.preventDefault();
  checkGuess();
});

// Check whether the guess is the correct number
function checkGuess() {
  let userGuess = +guessField.value;

  if (!userGuess) {
    message.textContent = '⛔️ No number!';
    guessField.focus();
    return;
  }

  if (userGuess === randomNumber) {
    gameOver.textContent = '🎉 congratulations! you got it right! 🎉';
    secretNumber.textContent = randomNumber;
    secretNumber.classList.add('guessed');
    modal.classList.add('won');
    wins++;
    setGameOver();
  } else if (chancesLeft <= 1) {
    gameOver.textContent = '😢 game over 😢';
    modal.classList.add('lose');
    losses++;
    setGameOver();
  } else {
    if (chancesLeft === 10) previousGuesses.classList.remove('hidden');
    message.textContent =
      userGuess < randomNumber
        ? `🔽 last guess was too low!`
        : `🔼 last guess was too high!`;
  }

  chancesLeft--;
  updateGameInfo(chancesLeft, userGuess);
}

// Restart the game
function setGameOver() {
  updateModal();
  displayStatistics();
  resetBtn.addEventListener('click', resetGame);
}

// Reset the game logic and webpage
function resetGame() {
  randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
  chancesLeft = 10;

  message.textContent = '💬 start guessing . . .';
  secretNumber.textContent = `?`;
  updateGameInfo(chancesLeft);

  updateModal();
  modal.classList.remove('won', 'lose');
  secretNumber.classList.remove('guessed');
  previousGuesses.classList.add('hidden');
}

// Update game information
function updateGameInfo(chancesLeft, userGuess) {
  chances.textContent = chancesLeft;
  chancesLeft === 10
    ? (guesses.textContent = ``)
    : (guesses.textContent += `${userGuess} `);
  guessField.value = '';
  guessField.focus();
}

// Update game statistics
function displayStatistics() {
  displayNumberWins.textContent = wins;
  displayNumberLosses.textContent = losses;
  displayNumberRounds.textContent = wins + losses;
}

// Show and hide modal and overlay
function updateModal() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

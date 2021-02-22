'use strict';

const btnPlay = document.querySelector('.btn--play');
const btnRestart = document.querySelector('.btn--restart');

const displayGameOver = document.querySelector('.game-over');

const firstOperand = document.querySelector('.operand--1');
const secondOperand = document.querySelector('.operand--2');
const operator = document.querySelector('.operator');

const results = document.querySelectorAll('.result');

const labelScore = document.querySelectorAll('.score-label');
const labelTimer = document.querySelector('.timer-label');

const operatorTypes = ['+', '-', 'x'];
let result,
  score = 0;

// Event handlers
btnPlay.addEventListener('click', init);
btnRestart.addEventListener('click', () => {
  score = 0;
  labelScore.forEach(label => (label.textContent = score));

  init();
});

// Check each answer and continue the game
results.forEach(result =>
  result.addEventListener('click', () => {
    if (result.classList.contains('correct')) {
      score++;
      labelScore.forEach(label => (label.textContent = score));
    }

    result.classList.remove('correct');
    playGame();
  }),
);

// Start the game on user's click
function playGame() {
  const firstNumber = randomNumber(10) + 1;
  const secondNumber = randomNumber(10) + 1;
  const randomOperator = operatorTypes[randomNumber(operatorTypes.length)];

  getAnswer(firstNumber, secondNumber, randomOperator);
  updateUI(firstNumber, secondNumber, randomOperator);
}

// Get the correct answer
function getAnswer(firstNumber, secondNumber, randomOperator) {
  switch (randomOperator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case 'x':
      result = firstNumber * secondNumber;
      break;
  }

  return result;
}

// Update the UI
function updateUI(firstNumber, secondNumber, randomOperator) {
  const correctPosition = randomNumber(4);

  firstOperand.textContent = firstNumber;
  secondOperand.textContent = secondNumber;
  operator.textContent = randomOperator;

  document.querySelector(`.result--${correctPosition}`).textContent = result;
  document
    .querySelector(`.result--${correctPosition}`)
    .classList.add('correct');

  results.forEach(result => {
    if (!result.classList.contains('correct')) {
      const wrongAnswer = randomNumber(100);
      if (wrongAnswer !== result) result.textContent = wrongAnswer;
    }
  });
}

// Start the timer
function startTimer() {
  let time = 10;

  function count() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    // End the timer
    if (time === 0) {
      clearInterval(timer);
      gameOver();
    }

    time--;
  }

  count();
  const timer = setInterval(count, 1000);
}

// Display game over
function gameOver() {
  displayGameOver.classList.remove('display-none');
}

// Get random number
function randomNumber(numb) {
  return Math.floor(Math.random() * numb);
}

// Initialize the game
function init() {
  btnPlay.classList.add('visibility-hidden');
  displayGameOver.classList.add('display-none');

  startTimer();
  playGame();
}

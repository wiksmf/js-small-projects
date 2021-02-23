'use strict';

const btnPlay = document.querySelector('.btn--play');
const btnRestart = document.querySelector('.btn--restart');

const displayGameOver = document.querySelector('.game-over');

const firstOperand = document.querySelector('.operand--1');
const secondOperand = document.querySelector('.operand--2');
const operator = document.querySelector('.operator');

const choices = document.querySelectorAll('.choice');

const labelScore = document.querySelectorAll('.label-score');
const labelTimer = document.querySelector('.label-timer');

const operatorTypes = ['+', '-', 'x'];
let result = 0,
  score = 0,
  playing = false;

// Event handlers
btnPlay.addEventListener('click', startGame);
btnRestart.addEventListener('click', resetGame);

// Check user's answer
choices.forEach(choice =>
  choice.addEventListener('click', () => {
    if (choice.classList.contains('correct') && playing) {
      score++;
      labelScore.forEach(label => (label.textContent = score));
    }
    playGame();
  }),
);

// Start the game
function startGame() {
  btnPlay.classList.add('visibility-hidden');
  playing = true;
  startTimer();
  playGame();
}

// Play the game
function playGame() {
  const firstNumber = randomNumber(10) + 1;
  const secondNumber = randomNumber(10) + 1;
  const randomOperator = operatorTypes[randomNumber(operatorTypes.length)];

  if (playing) {
    choices.forEach(choice => choice.classList.remove('correct'));
    getAnswer(firstNumber, secondNumber, randomOperator);
    updateUI(firstNumber, secondNumber, randomOperator);
  }
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

  document.querySelector(`.choice--${correctPosition}`).textContent = result;
  document
    .querySelector(`.choice--${correctPosition}`)
    .classList.add('correct');

  choices.forEach(choice => {
    if (!choice.classList.contains('correct')) {
      const wrongAnswer = randomNumber(100);
      if (wrongAnswer !== result) choice.textContent = wrongAnswer;
    }
  });
}

// Start the timer
function startTimer() {
  let time = 90;

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

// Display game over modal
function gameOver() {
  displayGameOver.classList.remove('display-none');
  playing = false;
}

// Reset the game
function resetGame() {
  score = 0;

  displayGameOver.classList.add('display-none');
  btnPlay.classList.remove('visibility-hidden');

  labelScore.forEach(label => (label.textContent = score));
  labelTimer.textContent = `01:30`;
}

// Get random number
function randomNumber(numb) {
  return Math.floor(Math.random() * numb);
}

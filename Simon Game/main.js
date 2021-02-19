'use strict';

const body = document.querySelector('body');
const buttons = document.querySelectorAll('.btn');
let levelInfo = document.querySelector('.level-info');

const buttonColors = ['green', 'red', 'blue', 'yellow'];

let gamePattern = [],
  userPattern = [],
  started = false,
  level = 0;

// Detect whether a keyboard key has been pressed
document.addEventListener('keypress', function () {
  if (!started) {
    nextSequence();
    started = true;
    body.classList.remove('game-over');
    buttons.forEach(btn => (btn.disabled = false));
  }
});

// Create a new pattern
function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomColour = buttonColors[randomNumber];

  userPattern = [];
  level++;
  levelInfo.textContent = `level: ${level}`;

  gamePattern.push(randomColour);
  playSound(randomColour);
  animatePress(randomColour);
}

// Check which button is pressed
buttons.forEach(btn => {
  btn.addEventListener('click', function () {
    const userChosenColour = btn.getAttribute('id');
    userPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkPattern(userPattern.length - 1);
  });
});

// Check the user's answers against the game sequence
function checkPattern(currentLevel) {
  if (gamePattern[currentLevel] === userPattern[currentLevel]) {
    if (gamePattern.length === userPattern.length)
      setTimeout(nextSequence, 1000);
  } else {
    playSound('wrong');
    body.classList.add('game-over');
    levelInfo.textContent = `Game over 😢 press any key to restart 😊`;
    startOver();
  }
}

// Add sound to buttons
function playSound(name) {
  new Audio(`sounds/${name}.mp3`).play();
}

// Add animations to buttons
function animatePress(currentColour) {
  document.getElementById(`${currentColour}`).classList.add('btn--pressed');
  setTimeout(
    () =>
      document
        .getElementById(`${currentColour}`)
        .classList.remove('btn--pressed'),
    100,
  );
}

// Restart the game
function startOver() {
  buttons.forEach(btn => (btn.disabled = true));
  gamePattern = [];
  started = false;
  level = 0;
}

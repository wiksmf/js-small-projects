const spinnerContainer = document.querySelector('.spinner');
const spinner = document.querySelector('.spinner p');
const btn = document.querySelector('button');
const result = document.querySelector('.result');

let rotateCount = 0;
let startTime = null;
let requestAF;


// Handle the start button when clicked
btn.addEventListener('click', start);


// Start the spinner and the game
function start() {
  draw();

  btn.classList.add('hidden');
  spinnerContainer.classList.remove('visible');

  setTimeout(endGame, randomNumber(5000, 10000));
}


// Animates the spinner
function draw(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }

  rotateCount = (timestamp - startTime) / 3;

  if (rotateCount > 359) {
    rotateCount %= 360;
  }

  spinner.style.transform = `rotate(${rotateCount}deg)`;
  requestAF = requestAnimationFrame(draw);
}


// End the game
function endGame() {
  cancelAnimationFrame(requestAF);

  spinnerContainer.classList.add('visible')
  result.classList.remove('hidden');
  result.textContent = 'PLAYERS GO!!!';

  document.addEventListener('keydown', clickHandler);
}


// Check which user win the game
function clickHandler(e) {
  if (e.key === 'a' || e.key === 'A') {
    result.textContent = `Player 1 won!🚩`;
  } else if (e.key === 'l' || e.key === 'L') {
    result.textContent = `Player 2 won! 🚩`;
  }

  document.removeEventListener('keydown', clickHandler);
  setTimeout(resetGame, 5000);
}


// Set the game back to the original state
function resetGame() {
  btn.classList.remove('hidden');
  result.classList.add('hidden');
  result.textContent = '';
}


// Return a random number between two given values
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
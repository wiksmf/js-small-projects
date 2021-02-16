'use strict';

const lottoContainer = document.querySelector('.lotto-container');
const ballContainer = document.querySelector('.ball-container');
const btnPlay = document.querySelector('.btn--play');
const btnReset = document.querySelector('.btn--reset');

let userNumbers = [],
  lottoNumbers = [];

// Create lotto grid cells and add them to the page
for (let i = 1; i <= 42; i++) {
  lottoContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="lotto-number" data-number="${i}">${i}</div>`,
  );
}

// Track the numbers selected by the user
function getUserNumber() {
  if (userNumbers.length < 6) {
    const number = this.dataset.number;

    if (userNumbers.includes(+number)) return;

    userNumbers.push(+number);

    document
      .querySelector(`[data-number="${number}"]`)
      .classList.add('selected');
  }
  if (userNumbers.length === 6) btnPlay.disabled = false;
}

// Get random number and display them
function getRandomNumbers() {
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 42 + 1);

    if (lottoNumbers.includes(randomNumber)) {
      i--;
      continue;
    }

    ballContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="ball-number">
        <span data-random-number="${randomNumber}">${randomNumber}</span>
      </div>`,
    );

    lottoNumbers.push(randomNumber);
  }
}

// Check which number has been guessed
function isSameNumber() {
  userNumbers.filter(numb => {
    if (lottoNumbers.includes(numb))
      document
        .querySelector(`[data-random-number="${numb}"]`)
        .parentNode.classList.add('guessed');
  });
}

// Play the game
function playLotto() {
  getRandomNumbers();
  isSameNumber();
  btnPlay.disabled = true;
  btnReset.disabled = false;
}

// Reset all and restart the game
function resetGame() {
  document
    .querySelectorAll(`[data-number]`)
    .forEach(item => item.classList.remove('selected'));

  document
    .querySelectorAll('.ball-number')
    .forEach(item => item.parentNode.removeChild(item));

  userNumbers.length = lottoNumbers.length = 0;
  btnReset.disabled = true;
}

// Event handlers
document.querySelectorAll('[data-number]').forEach(number => {
  number.addEventListener('click', getUserNumber);
});

btnPlay.addEventListener('click', playLotto);
btnReset.addEventListener('click', resetGame);

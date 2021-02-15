'use strict';

const lottoContainer = document.querySelector('.lotto-container');
const ballContainer = document.querySelector('.ball-container');
const btnPlay = document.querySelector('.btn');

const userNumbers = [];
const lottoNumbers = [];

// Create lotto grid cells and add them to the page
for (let i = 1; i <= 42; i++) {
  lottoContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="lotto-number" data-number="${i}">${i}</div>`,
  );
}

// Create lotto number balls and add them to the page
for (let i = 0; i <= 5; i++) {
  ballContainer.insertAdjacentHTML(
    'beforeend',
    `<div class="ball-number">
      <span class="random-number" data-random-number="${i}"></span>
    </div>`,
  );
}

// Event handlers
document.querySelectorAll('[data-number]').forEach(number => {
  number.addEventListener('click', getUserNumber);
});

btnPlay.addEventListener('click', playLotto);

// Track the numbers selected by the user
function getUserNumber() {
  if (userNumbers.length < 6) {
    const number = this.dataset.number;
    userNumbers.push(number);
    document
      .querySelector(`[data-number="${number}"]`)
      .classList.add('selected');
  }
}

// Play the game
function playLotto() {
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 42 + 1);
    if (randomNumber === lottoNumbers[i]) return getNumber();
    document.querySelector(
      `[data-random-number="${i}"]`,
    ).textContent = randomNumber;
    lottoNumbers.push(randomNumber);
  }

  btnPlay.textContent = 'play again';
}

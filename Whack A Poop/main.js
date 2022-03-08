'use strict';

const circles = document.querySelectorAll('.circle');
const poop = document.querySelector('.poop');
const scoreEl = document.querySelector('.score');
const timeLeft = document.querySelector('.time-left');
const gameInfo = document.querySelector('.paragraph-information');
const playAgainBtn = document.querySelector('.btn');

function init() {
  let score = 0;
  let timeCount = 60;
  let timerId = null;

  let countDownTimerId = setInterval(countDown, 1000);

  gameInfo.innerHTML = '';

  playAgainBtn.disabled = true;

  circles.forEach(circle => {
    circle.addEventListener('click', () => {
      if (circle.classList.contains('poop')) {
        score++;
        scoreEl.textContent = score;
      }
    });
  });

  function randomPosition() {
    circles.forEach(circle => circle.classList.remove('poop'));

    let randomPosition = circles[Math.floor(Math.random() * 12)];
    randomPosition.classList.add('poop');
  }

  function countDown() {
    timeCount--;
    timeLeft.textContent = timeCount;

    if (timeCount === 0) {
      clearInterval(countDownTimerId);
      clearInterval(timerId);
      gameInfo.innerHTML = `GAME OVER! <br /> Your final score is ${score}!`;

      playAgainBtn.disabled = false;
      playAgainBtn.addEventListener('click', () => {
        playAgainBtn.disabled = true;
        init();
      });
    }
  }

  (() => {
    timerId = setInterval(randomPosition, 650);
  })();
}

init();

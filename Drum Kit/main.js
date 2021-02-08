'use strict';

document.addEventListener('keypress', e => {
  playSound(e.key);
  btnAnimation(e.key);
});

function playSound(key) {
  switch (key) {
    case 'a':
      new Audio('sounds/tom1.mp3').play();
      break;

    case 'k':
      new Audio('sounds/tom2.mp3').play();
      break;

    case 's':
      new Audio('sounds/tom3.mp3').play();
      break;

    case 'l':
      new Audio('sounds/snare.mp3').play();
      break;

    case 'j':
      new Audio('sounds/crash.mp3').play();
      break;

    case 'd':
      new Audio('sounds/bass.mp3').play();
      break;
  }
}

function btnAnimation(key) {
  let activeBtn = document.querySelector('.' + key);
  activeBtn.classList.add('pressed');

  setTimeout(() => {
    activeBtn.classList.remove('pressed');
  }, 100);
}

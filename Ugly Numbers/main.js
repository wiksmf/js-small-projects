'use strict';

const userInput = document.querySelector('.form__input');
const btnCheck = document.querySelector('.btn');
const result = document.querySelector('.result');
const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  if (!userInput.value) {
    result.textContent = `⚠️ it must be a positive integer`;
    resetInput();
    return;
  }

  result.textContent = `${userInput.value} is 
  ${
    isUglyNumber(userInput.value)
      ? 'an ugly number 😎'
      : 'not an ugly number 😱'
  }`;
  resetInput();
});

function isUglyNumber(number) {
  while (number % 5 === 0) number /= 5;
  while (number % 3 === 0) number /= 3;
  while (number % 2 === 0) number /= 2;

  return +number === 1;
}

// Reset input field and sequence array
function resetInput() {
  userInput.value = '';
  userInput.focus();
}

// Handling information modal
btnOpenModal.addEventListener('click', () => {
  displayInfo.classList.remove('hidden');
});

btnCloseModal.forEach(btn => {
  btn.addEventListener('click', () => {
    displayInfo.classList.add('hidden');
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !btnCloseModal.classList.contains('hidden'))
    displayInfo.classList.add('hidden');
});

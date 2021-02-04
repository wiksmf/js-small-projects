'use strict';

const userInput = document.querySelector('.input-data');
const btnCheck = document.querySelector('.btn-check');
const result = document.querySelector('.result');

const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  let number = Number(userInput.value);

  if (!userInput.value || userInput.value <= 0) {
    result.textContent = `⚠️ it must be a positive integer`;
    resetInput();
    return;
  }

  result.textContent = `it ${
    isPerfect(number) ? 'is' : 'is not'
  } a perfect number`;
  resetInput();
});

// Check if the number is a perfect number
function isPerfect(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) sum += i;
  }

  return sum === number;
}

// Reset input field
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

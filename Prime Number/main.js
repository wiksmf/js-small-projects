'use strict';

const userInput = document.querySelector('.input-data');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');

const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  if (!userInput.value || userInput.value <= 1) {
    result.textContent = `⚠️ it must be a positive integer greater than 1`;
    resetInput();
    return;
  }

  result.textContent = `🧮 it ${
    isPrime(userInput.value) ? 'is' : 'is not'
  } a prime number`;
  resetInput();
});

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
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

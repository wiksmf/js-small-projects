'use strict';

const userInput = document.querySelector('.form__input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

let sequence = [];

btn.addEventListener('click', e => {
  e.preventDefault();

  if (!userInput.value || userInput.value < 0) {
    result.textContent = `⚠️ it must be a positive integer`;
    resetInput();
    return;
  }

  for (let i = 0; i <= userInput.value; i++) sequence.push(fibonacci(i));
  result.textContent = sequence.join(', ');
  resetInput();
});

// Get the first n Fibonacci numbers
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Reset input field and sequence array
function resetInput() {
  userInput.value = '';
  userInput.focus();
  sequence = [];
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

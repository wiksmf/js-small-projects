'use strict';

const userInput = document.querySelector('.form__input');
const btnCount = document.querySelector('.btn');
const result = document.querySelector('.result');

btnCount.addEventListener('click', e => {
  e.preventDefault();

  result.textContent = '';

  if (!userInput.value) {
    result.textContent = '⚠️ missing input';
    resetInput();
    return;
  }

  count(userInput.value);
  resetInput();
});

// Count occurrences of each word in the string
function count(string) {
  let count = {};

  string
    .toLowerCase()
    .match(/\b\w+('\w)?/g)
    .forEach(item => (count[item] = (count[item] || 0) + 1));

  for (const [key, value] of Object.entries(count)) {
    result.innerHTML += `${key}: ${value} <br/>`;
  }
}

// Reset input
function resetInput() {
  userInput.value = '';
  userInput.focus();
}

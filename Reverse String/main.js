'use strict';

const userInput = document.querySelector('.user-input');
const btnCheck = document.querySelector('.btn');
const result = document.querySelector('.result');

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  console.log(userInput.value);

  if (!userInput.value) {
    result.textContent = `⚠️ invalid input`;
    return;
  }

  result.textContent = reverseString(userInput.value);
  userInput.value = '';
  userInput.focus();
});

function reverseString(string) {
  return string.split('').reverse().join('');
}

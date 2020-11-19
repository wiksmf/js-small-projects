'use strict';

const userInput = document.querySelector('input');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let sentence = userInput.value;

  if (sentence === '') return;

  isPangram(sentence) ?
    result.textContent = 'pangram!' :
    result.textContent = 'not pangram!';
});

function isPangram(sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/([^a-z])/g, '');

  return [...alphabet].every(letter => sentence.includes(letter));
}
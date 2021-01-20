'use strict';

const input = document.querySelector('.form__input');
const btnFind = document.querySelector('.btn');
const displayResult = document.querySelector('.result');

btnFind.addEventListener('click', e => {
  e.preventDefault();

  if (!input.value) {
    displayResult.textContent = '⚠️ invalid input';
    return;
  }

  displayResult.textContent = findLongestWord(input.value);
});

// Find and return the longest word in the sentence
function findLongestWord(string) {
  const strArray = string.match(/\w[a-z]{0,}/gi);
  const longestWord = strArray.sort((a, b) => b.length - a.length);

  return `${longestWord[0]}: ${longestWord[0].length} letters`;
}

'use strict';

const input = document.querySelector('input');
const btnFind = document.querySelector('button');
const displayResult = document.querySelector('.result');


btnFind.addEventListener('click', (e) => {
  e.preventDefault();

  let string = input.value;

  if (string.length === 0) return;

  displayResult.textContent = findLongestWord(string);
});


function findLongestWord(string) {
  let strArray = string.match(/\w[a-z]{0,}/gi);
  let longestWord = strArray[0];

  for (let i = 1; i < strArray.length; i++) {
    if (longestWord.length < strArray[i].length) {
      longestWord = strArray[i];
    }
  }
  return longestWord;
}
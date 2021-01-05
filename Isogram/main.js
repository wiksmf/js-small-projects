'use strict';

const userInput = document.querySelector('input');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');

btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let string = userInput.value;

  if (string === '') return;

  isIsogram(string) ?
    result.textContent = 'isogram!' :
    result.textContent = 'not isogram!';
});

function isIsogram(string) {
  string = string.replace(/([^A-Za-z])/g, '');
  string = string.toLowerCase().split('');

  return (
    string.filter(
      (letter, index) => string.indexOf(letter) === index
    ).length === string.length
  );
}
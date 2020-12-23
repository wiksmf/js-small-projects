'use strict';

const word = document.querySelector('.word');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');


btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let string = word.value;

  if (string.length === 0) {
    return;
  }

  result.textContent = reverseString(string);
});


function reverseString(string) {
  string = string.split('');
  string = string.reverse();
  string = string.join('');

  return string;
};
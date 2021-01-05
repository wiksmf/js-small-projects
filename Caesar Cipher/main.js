'use strict';

const userInput = document.querySelector('input');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');

const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let string = userInput.value;

  if (string === '') return;

  caesarCipher(string);
});

function caesarCipher(string) {
  let output = '';
  let key = 5;

  for (let i = 0; i < string.length; i++) {
    let index = alphabet.indexOf(string[i].toLowerCase());
    let shift = index + key;
    let notLetter = string[i].match(/[^a-zA-Z]/g);

    if (shift >= 26) {
      shift = key - (alphabet.length - index);
      output += isUpper(string, i, shift);
    } else {
      if (notLetter) {
        output += string[i];
      } else {
        output += isUpper(string, i, shift);
      }
    }
  }
  result.textContent = output;
}

function isUpper(string, i, shift) {
  if (string[i].match(/[A-Z]/g)) {
    return (alphabet[shift]).toUpperCase();
  } else {
    return alphabet[shift];
  }
}
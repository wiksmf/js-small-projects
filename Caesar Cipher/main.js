'use strict';

const string = document.querySelector('.string-input');
const key = document.querySelector('.key-input');
const btnCheck = document.querySelector('.btn-encrypt');
const result = document.querySelector('.result');

const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  if (!string.value || !key.value || key.value <= 0) {
    result.textContent =
      '⚠️ invalid string or key (key must be greater or equal to 1)';
    return;
  }

  result.textContent = caesarCipher(string.value, +key.value);
});

// Encrypt the string according to the shift key
function caesarCipher(string, key) {
  let output = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[a-zA-Z]/g)) {
      if (isUpper(string[i]))
        output += String.fromCharCode(
          ((string.charCodeAt(i) + key - 65) % 26) + 65,
        );
      else
        output += String.fromCharCode(
          ((string.charCodeAt(i) + key - 97) % 26) + 97,
        );
    } else {
      output += string[i];
    }
  }

  return output;
}

// Check if the letter is uppercase
function isUpper(string) {
  return string === string.toUpperCase();
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

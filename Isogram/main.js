'use strict';

const userInput = document.querySelector('.input__word');
const btnCheck = document.querySelector('.btn-check');
const result = document.querySelector('.result');
const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  if (!userInput.value) {
    result.textContent = '⚠️ invalid input';
    return;
  }

  result.textContent = `
   ${isIsogram(userInput.value) ? 'isogram 🤭!' : 'not isogram 😓!'}
  `;

  userInput.value = '';
  userInput.focus();
});

// Check if the input is isogram
function isIsogram(string) {
  string = string.replace(/([^A-Za-z])/g, '');
  string = string.toLowerCase().split('');

  return (
    string.filter((letter, index) => string.indexOf(letter) === index)
      .length === string.length
  );
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

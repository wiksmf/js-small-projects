'use strict';

const userInput = document.querySelector('input');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');
const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  if (!userInput.value) {
    result.textContent = '⚠️ invalid input';
    return;
  }

  result.innerHTML = `${userInput.value} is
      ${isPangram(userInput.value) ? 'pangram 🤩' : 'not a pangram 😫'}
     `;

  userInput.value = '';
  userInput.focus();
});

function isPangram(sentence) {
  sentence = sentence.toLowerCase().replace(/([^a-z])/g, '');

  return [...alphabet].every(letter => sentence.includes(letter));
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

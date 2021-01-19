'use strict';

const userInput = document.querySelector('.form__input');
const btnCheck = document.querySelector('.btn-check');
const result = document.querySelector('.result');
const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  if (!userInput.value || userInput.value < 0) {
    result.textContent = '⚠️ invalid input';
    return;
  }

  let checkYear = isLeap(userInput.value);
  result.textContent = `it ${checkYear ? 'is' : 'is not'} a Leap Year!`;
  result.classList.toggle('is-leap', checkYear);
  result.classList.toggle('is-not-leap', !checkYear);
});

// Check if the year is a Leap Year
function isLeap(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
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

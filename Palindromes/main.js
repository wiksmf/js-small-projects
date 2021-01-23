'use strict';

const userInput = document.querySelector('input');
const btnCheck = document.querySelector('button');
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

  result.textContent = `${userInput.value} is
    ${isPalindrome(userInput.value) ? 'a palindrome 😎' : 'not a palindrome 😖'}
   `;

  userInput.value = '';
  userInput.focus();
});

function isPalindrome(string) {
  string = string.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  const reverseString = string.split('').reverse().join('');

  return reverseString === string;
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

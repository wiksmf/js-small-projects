'use strict';

const userInput = document.querySelector('.input__number');
const btnCheck = document.querySelector('button');
const displayResult = document.querySelector('.result');
const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  // Check whether the input is a positive number
  if (userInput.value === '' || userInput.value < 0) {
    displayResult.textContent = '⚠️ invalid input';
    return;
  }

  displayResult.textContent = `
  ${userInput.value}
  ${
    isArmstrong(userInput.value)
      ? 'is an Armstrong Number 😁'
      : 'is not an Armstrong Number 😔'
  }  
  `;

  userInput.value = '';
  userInput.focus();
});

// Check if the number is an Armstrong number
function isArmstrong(number) {
  // Count the number of digits
  const digits = number.length;

  // Convert the number into an array
  const numberArray = Array.from(String(number));

  // Raise each digit to the power of the number of digits
  const exponents = numberArray.map(numb => numb ** digits);

  // Sum the digits
  const sum = exponents.reduce((a, b) => a + b);

  return +number === sum;
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

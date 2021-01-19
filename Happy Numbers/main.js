'use strict';

const userInput = document.querySelector('.form__input');
const btnCheck = document.querySelector('.btn');
const result = document.querySelector('.result');
const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  if (!userInput.value || userInput.value <= 0) {
    result.textContent = `⚠️ it must be a positive integer`;
    resetInput();
    return;
  }

  result.textContent = `${userInput.value} is ${
    isHappyNumber(+userInput.value)
      ? `a Happy Number 😃!`
      : `an Unhappy Number 😢!`
  }`;

  resetInput();
});

// Check if it's a happy number
function isHappyNumber(number) {
  // Convert the number into an array
  const numberArray = Array.from(String(number));

  // Get the square of each digit
  const exponents = numberArray.map(num => num ** 2);

  // Sum the squares
  const happyNumber = exponents.reduce((a, b) => a + b);

  // If the result is equal to 1, it's a happy number
  // if the result is equal to 4, it's an unhappy number
  // else repeat the process
  return happyNumber === 1
    ? true
    : happyNumber === 4
    ? false
    : isHappyNumber(happyNumber);
}

// Reset input field and sequence array
function resetInput() {
  userInput.value = '';
  userInput.focus();
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

'use strict';

const userInput = document.querySelector('.form__input');
const btnCalc = document.querySelector('.btn');
const result = document.querySelector('.result');
const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

btnCalc.addEventListener('click', e => {
  e.preventDefault();

  if (!userInput.value && userInput.value <= 0)
    result.textContent = `⚠️ it must be a positive integer`;
  else factorial(userInput.value);
});

function factorial(number) {
  let product = 1;
  result.textContent = `${number}! = `;

  for (let i = 1; i <= number; i++) {
    product *= i;
    result.textContent += `${i < number ? `${i} * ` : `${i} = `}`;
  }

  result.textContent += `${product}`;
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

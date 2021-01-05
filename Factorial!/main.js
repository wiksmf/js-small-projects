'use strict';

const userInput = document.querySelector('.number');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');


btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let number = +userInput.value;

  if (isNaN(number) || (number === '')) return;

  if (number <= 0) result.textContent = `it must be a positive integer`;
  else factorial(number);
});


function factorial(number) {
  let product = 1;
  for (let i = 1; i <= number; i++) {
      product *= i;
  }

  result.textContent = `${(number)} ! is ${product}`;
}
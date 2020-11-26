'use strict';

const userInput = document.querySelector('.number');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');


btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let number = Number(userInput.value);

  if (isNaN(number) || (number === '')) return;

  if (number <= 0) {
    result.textContent = `it must be a positive integer`;
  } else {
    isPerfect(number);
  }
});


function isPerfect(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  result.textContent = `it ${(sum === number) ? 'is' : 'is not'} a perfect number`;
}
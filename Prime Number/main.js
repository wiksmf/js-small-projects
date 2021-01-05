'use strict';

const userInput = document.querySelector('.number');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');


btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let number = Number(userInput.value);

  if (isNaN(number) || (number === '')) return;

  if (number <= 1) {
    result.textContent = `it must be a number greater than 1`;
  } else {
    isPrime(number);
  }
});


function isPrime(number) {
  let prime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
    }
  }

  result.textContent = `it ${(prime === true) ? 'is' : 'is not'} a prime number`;
}
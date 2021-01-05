'use strict';

const userInput = document.querySelector('.number');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');


btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let input = Number(userInput.value);

  if (isNaN(input) || (input === '')) return;

  result.textContent = `${isUglyNumber(input) ? 'ugly number!' : ' not ugly number!'}`;
});


function isUglyNumber(number) {
  while (number % 5 === 0) number /= 5;
  while (number % 3 === 0) number /= 3;
  while (number % 2 === 0) number /= 2;

  return number === 1;
}
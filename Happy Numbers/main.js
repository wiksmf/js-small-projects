'use strict';

const userInput = document.querySelector('.number');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');

btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let input = userInput.value;

  if (isNaN(input) || (input === '')) return;

  for (let i = 0; i < 100; i++) {
    input = isHappyNumber(input);

    if (input === 1) {
      result.textContent = `Happy Number ☺!`;
    } else {
      result.textContent = `Not Happy Number ☹!`;
    }
  }
});


function isHappyNumber(input) {
  let temp;
  let sum = 0;

  while (input !== 0) {
    temp = input % 10;
    sum += (temp * temp);
    input = (input - temp) / 10
  }
  return sum;
}
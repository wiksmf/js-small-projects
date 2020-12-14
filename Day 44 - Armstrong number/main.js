'use strict';

const userInput = document.querySelector('.number');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');


btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let input = Number(userInput.value);

  if (isNaN(input) || (input === '')) return;

  result.textContent = `${isArmstrongNumber(input) ? 'Armstrong number!' : ' Not Armstrong number!'}`;
});


function isArmstrongNumber(input) {

  const number = Array.from(String(input), Number);
  const numberOfDigits = number.length;
  const exponents = number.map(num => Math.pow(num, numberOfDigits));

  return exponents.reduce((a, b) => a + b, 0) === input;
}
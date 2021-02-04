'use strict';

const firstNumber = document.querySelector('.number-1');
const secondNumber = document.querySelector('.number-2');
const btnCalculate = document.querySelector('button');
const result = document.querySelector('.result');

btnCalculate.addEventListener('click', e => {
  e.preventDefault();
  if (!firstNumber.value || !secondNumber.value) return;

  result.textContent = `
    ${((firstNumber.value / 100) * secondNumber.value).toFixed(2)}
  `;
});

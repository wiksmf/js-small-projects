'use strict';

const addBtn = document.querySelector('.addBtn');
const subtractBtn = document.querySelector('.subtractBtn');
const multiplyBtn = document.querySelector('.multiplyBtn');
const divideBtn = document.querySelector('.divideBtn');

const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');

const resultCalc = document.querySelector('.result');


addBtn.addEventListener('click', () => {
  let result = (+firstNumber.value) + (+secondNumber.value);
  resultCalc.textContent = result;
});

subtractBtn.addEventListener('click', () => {
  let result = (+firstNumber.value) - (+secondNumber.value);
  resultCalc.textContent = result;
});

multiplyBtn.addEventListener('click', () => {
  let result = (+firstNumber.value) * (+secondNumber.value);
  resultCalc.textContent = result;
});

divideBtn.addEventListener('click', () => {
  let result = (+firstNumber.value) / (+secondNumber.value);
  resultCalc.textContent = result.toFixed(2);
});
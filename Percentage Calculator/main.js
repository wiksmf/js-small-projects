'use strict';

const numb1 = document.querySelector('.numb1');
const numbInput = document.querySelector('.numb2');
const btnCalculate = document.querySelector('button');
const result = document.querySelector('.result');


btnCalculate.addEventListener('click', (e) => {
  e.preventDefault();

  let percentage = +numb1.value;
  let number = +numbInput.value;

  console.log(percentage);

  result.textContent = `${(percentage / 100) * number}`
});
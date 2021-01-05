'use strict';

const sideA = document.querySelector('.side-a');
const sideB = document.querySelector('.side-b');
const btnCheck = document.querySelector('button');
const displayResult = document.querySelector('.result');

btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let a = +sideA.value;
  let b = +sideB.value;

  if (isNaN(a) || a === '') return;
  if (isNaN(b) || b === '') return;

  displayResult.textContent = `${pythagorean(a, b)}`;

  sideA.value = '';
  sideB.value = '';
});

function pythagorean(sideA, sideB) {
  return Math.sqrt(sideA ** 2 + sideB ** 2);
}

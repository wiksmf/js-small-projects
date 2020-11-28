'use strict';

const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');


btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  const sideA = Number(a.value);
  const sideB = Number(b.value);
  const sideC = Number(c.value);

  if ((sideA < (sideB + sideC)) && (sideB < (sideA + sideC)) && (sideC < (sideA + sideB))) {
    if ((sideA === sideB) && (sideB === sideC)) {
      result.textContent = 'equilateral triangle';
    } else if ((sideB === sideC) || (sideA === sideC)) {
      result.textContent = 'isosceles triangle';
    } else if ((sideA !== sideB) && (sideB !== sideC) && (sideA !== sideC)) {
      result.textContent = 'scalene triangle';
    }
  } else {
    result.textContent = 'not a triangle';
  }
});
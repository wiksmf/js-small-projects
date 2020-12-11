'use strict';

const userInput = document.querySelector('.number');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');

let next;

btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let number = +userInput.value;

  if (isNaN(number) || (number === '')) return;

  result.textContent = `${fibonacci(number)}`;

  userInput.value = '';
  next = [];
});


function fibonacci(number) {

  if (number === 1) return [0, 1];
  else {
    next = fibonacci(number - 1)
    next.push(next[next.length - 1] + next[next.length - 2]);
    return next;
  }
}
'use strict';

const firstNumber = document.querySelector('.first-number');
const secondNumber = document.querySelector('.second-number');
const btn = document.querySelector('button');
const result = document.querySelector('.result');


btn.addEventListener('click', (e) => {
  e.preventDefault();

  let a = +firstNumber.value;
  let b = +secondNumber.value;

  checkInput(a);
  checkInput(b);
  result.textContent = `${lcm(a, b)}`;
});

function lcm(a, b) {
  return Math.abs((a * b) / gcd(a, b));
}

function gcd(a, b) {
  if (a === 0) return b;
  return gcd(b % a, a);
}


function checkInput(number) {
  if (isNaN(number) || (number === '')) return;
}
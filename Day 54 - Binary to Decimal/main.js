'use strict';

const number = document.querySelector('.number');
const btn = document.querySelector('button');
const displayResult = document.querySelector('.result');


btn.addEventListener('click', (e) => {
  e.preventDefault();

  let numb = +number.value;
  displayResult.textContent = binaryToDecimal(numb);
});

function binaryToDecimal(numb) {
  return parseInt((numb + '').replace(/[^01]/gi, ''), 2);
};
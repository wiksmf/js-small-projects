'use strict';

const number = document.querySelector('.number');
const initialBase = document.querySelector('#initial-base');
const endBase = document.querySelector('#end-base');
const btn = document.querySelector('.btn');
const displayResult = document.querySelector('.result');

let numb, initB, endB, result;

btn.addEventListener('click', e => {
  e.preventDefault();

  numb = +number.value;
  initB = +initialBase.value;
  endB = +endBase.value;

  if (!numb) {
    displayResult.textContent = `⚠ invalid input`;
  } else if (initB < 2 || initB.value > 36) {
    displayResult.textContent = `⚠ initial base must be between 2 and 36`;
  } else if (endB < 2 || endB > 36) {
    displayResult.textContent = `⚠ end base must be between 2 and 36`;
  } else {
    result = baseConverter(numb, initB, endB);

    displayResult.textContent = `
    ${result === 'NaN' ? '😥 no conversion available' : result}`;
  }
});

// Convert a number from one base to another
function baseConverter(numb, initB, endB) {
  return parseInt(numb + '', initB).toString(endB);
}

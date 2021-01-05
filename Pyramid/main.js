'use strict';

const userInput = document.querySelector('#number');
const btnCheck = document.querySelector('button');
const result = document.querySelector('p');

btnCheck.addEventListener('click', (e) => {
  result.innerHTML = ``;

  e.preventDefault();

  let input = userInput.value;

  if (isNaN(input) || (input === '')) return;

  createPyramid(input);
});


function createPyramid(rows) {
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
      result.innerHTML += `* `;
    }
    result.innerHTML += `<br/>`;
  }
}
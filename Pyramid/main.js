'use strict';

const userInput = document.querySelector('#number');
const btn = document.querySelector('button');
const pyramid = document.querySelector('p');

btn.addEventListener('click', () => {
  pyramid.innerHTML = ``;

  if (!userInput.value) {
    pyramid.textContent = '⚠️ please enter a number';
    return;
  }
  createPyramid(userInput.value);
});

function createPyramid(rows) {
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
      pyramid.innerHTML += `* `;
    }
    pyramid.innerHTML += `<br/>`;
  }
}

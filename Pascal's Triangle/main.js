'use strict';

const userInput = document.querySelector('.input-data');
const btnCalc = document.querySelector('.btn-calc');
const displayResult = document.querySelector('.result');

const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

let triangle;

btnCalc.addEventListener('click', e => {
  e.preventDefault();
  displayResult.innerHTML = '';

  if (!userInput.value) return;

  triangle = pascalsTriangle(userInput.value);
  for (let i = 0; i < triangle.length; i++)
    displayResult.innerHTML += `${triangle[i].join(' ')} <br/>`;

  userInput.value = '';
  userInput.focus();
});

// Compute Pascal's triangle up to the given number
function pascalsTriangle(numRows) {
  triangle = [];

  for (let row = 0; row < numRows; row++) {
    triangle[row] = [];
    for (let col = 0; col < row + 1; col++) {
      if (col === 0 || col === row) triangle[row][col] = 1;
      else
        triangle[row][col] =
          triangle[row - 1][col - 1] + triangle[row - 1][col];
    }
  }
  return triangle;
}

// Handling information modal
btnOpenModal.addEventListener('click', () => {
  displayInfo.classList.remove('hidden');
});

btnCloseModal.forEach(btn => {
  btn.addEventListener('click', () => {
    displayInfo.classList.add('hidden');
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !btnCloseModal.classList.contains('hidden'))
    displayInfo.classList.add('hidden');
});

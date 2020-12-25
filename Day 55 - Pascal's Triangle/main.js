'use strict';

const userInput = document.querySelector('.number');
const btnCheck = document.querySelector('button');
const displayResult = document.querySelector('.result');

btnCheck.addEventListener('click', (e) => {
  e.preventDefault();
  displayResult.innerHTML = '';


  let numRows = +userInput.value;

  if (isNaN(numRows) || (numRows === '')) return;


  let triangle = pascalsTriangle(numRows)

  for (let i = 0; i < triangle.length; i++) {
    displayResult.innerHTML += `${triangle[i]} <br/>`;
  }

  userInput.value = '';
});


function pascalsTriangle(numRows) {
  let triangle = [];

  if (numRows === 0) return triangle;

  for (let row = 0; row <= numRows; row++) {
    triangle[row] = [];
    for (let col = 0; col < row + 1; col++) {
      if (col === 0 || col === row) {
        triangle[row][col] = 1;
      } else {
        triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
      }
    }
  }
  return triangle;
}
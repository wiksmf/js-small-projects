'use strict';

const userInput = document.querySelector('input');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');


btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  result.textContent = "";

  let string = userInput.value;

  if (string === '') return;

  count(string);
});


function count(string) {
  let count = {};

  string
    .toLowerCase()
    .match(/\b\w+('\w)?/g)
    .forEach(item => {
      count[item] = (count[item] || 0) + 1;
    });

  console.log(count);

  for (const [key, value] of Object.entries(count)) {
    result.textContent += `${key}: ${value} `;
  }
}
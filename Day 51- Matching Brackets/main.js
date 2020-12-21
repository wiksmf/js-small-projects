'use strict';

const userInput = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.querySelector('.result');


btn.addEventListener('click', (e) => {
  e.preventDefault();

  let input = userInput.value;

  if (!input) return;

  isPaired(input);
});


function isPaired(input) {
  let brackets = "()[]{}";
  let stack = [];

  if (input === '') {
    return true;
  }

  input = input.match(/[{}\(\)\[\]]/g);

  for (let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket);
    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
    } else {
      if (stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }

  result.textContent = `${stack.length === 0 ? 'yes :)' : 'no :('}`;
}
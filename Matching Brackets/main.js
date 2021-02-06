'use strict';

const userInput = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.querySelector('.result');

btn.addEventListener('click', e => {
  e.preventDefault();

  if (!userInput.value) return;

  result.textContent = `${
    isPaired(userInput.value)
      ? 'Matching Brackets 🙉'
      : 'No Matching Brackets 🙊'
  }`;
});

function isPaired(userInput) {
  let bracketsSet = '()[]{}';
  let stack = [];

  userInput = userInput.match(/[{}\(\)\[\]]/g);

  for (const bracket of userInput) {
    let bracketsIndex = bracketsSet.indexOf(bracket);
    if (bracketsIndex % 2 === 0) stack.push(bracketsIndex + 1);
    else if (stack.pop() !== bracketsIndex) return false;
  }

  return stack.length === 0;
}

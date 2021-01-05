'use strict';

const buttons = document.querySelectorAll('button');
const displayCount = document.querySelector('p');

let counter = 0;


buttons.forEach((btn) => {
  btn.addEventListener('click', () => {

    if (btn.classList.contains('add')) {
      counter++;
    }

    if (btn.classList.contains('subtract')) {
      counter--;
    }

    updateCounter();
  });
});


function updateCounter() {
  displayCount.textContent = `${counter}`;
  displayCount.classList.toggle('negative-value', counter < 0);
  displayCount.classList.toggle('positive-value', counter > 0);
}
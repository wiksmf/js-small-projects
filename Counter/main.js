'use strict';

const buttons = document.querySelectorAll('.btn');
const displayCount = document.querySelector('.paragraph');

let counter = 0;

// Add or subtract the value
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('add')) counter++;
    if (btn.classList.contains('subtract')) counter--;

    updateCounter();
  });
});

// Update the counter
function updateCounter() {
  displayCount.textContent = `${counter}`;
  displayCount.classList.toggle('negative-value', counter < 0);
  displayCount.classList.toggle('positive-value', counter > 0);
}

'use strict';

const sideA = document.querySelector('.side-a');
const sideB = document.querySelector('.side-b');
const btnCheck = document.querySelector('.btn');
const displayResult = document.querySelector('.result');

const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  if (!sideA.value) return;
  if (!sideB.value) return;

  displayResult.innerHTML = `
    √(${sideA.value}<sup>2</sup> + ${sideB.value}<sup>2</sup>) =  
    ${pythagorean(sideA.value, sideB.value)}
  `;

  sideA.value = '';
  sideB.value = '';
});

// Calc the sum of the squares of the other two sides
function pythagorean(sideA, sideB) {
  return Math.sqrt(sideA ** 2 + sideB ** 2).toFixed(2);
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

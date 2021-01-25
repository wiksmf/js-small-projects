'use strict';

const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');
const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  const sideA = Number(a.value);
  const sideB = Number(b.value);
  const sideC = Number(c.value);

  if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
    if (sideA === sideB && sideB === sideC) {
      result.textContent = 'equilateral triangle';
    } else if (sideB === sideC || sideA === sideC) {
      result.textContent = 'isosceles triangle';
    } else if (sideA !== sideB && sideB !== sideC && sideA !== sideC) {
      result.textContent = 'scalene triangle';
    }
  } else {
    result.textContent = 'not a triangle';
  }
});

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

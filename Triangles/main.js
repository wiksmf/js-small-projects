'use strict';

const sideA = document.querySelector('.a');
const sideB = document.querySelector('.b');
const sideC = document.querySelector('.c');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');

const btnOpenModal = document.querySelectorAll('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

const currentlyOpenModals = {};

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  if (!sideA.value || !sideB.value || !sideC.value) {
    result.textContent = '⚠️ please enter a valid input';
    return;
  }

  result.innerHTML = `it is 
    <span class="triangle-type">
      ${checkTriangle(+sideA.value, +sideB.value, +sideC.value)}
    </span> triangle
  `;
});

// Check triangle type
function checkTriangle(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
    return (
      (a === b && b === c && 'an equilateral') ||
      ((a === b || b === c || a === c) && 'an isosceles') ||
      (a !== b && b !== c && a !== c && 'a scalene')
    );
  } else {
    return 'not a';
  }
}

// Handling information modals
btnOpenModal.forEach(btn =>
  btn.addEventListener('click', clickEvent => {
    const modalId = clickEvent.target.getAttribute('data-modal-id');
    const modal = document.getElementById(`${modalId}`);
    modal.classList.remove('hidden');
    currentlyOpenModals[modalId] = modal;
  }),
);

btnCloseModal.forEach(btn => {
  btn.addEventListener('click', clickEvent => {
    const modalToClose = clickEvent.target.closest('.modal');
    closeModal(modalToClose.id);
  });
});

document.addEventListener('keydown', keyEvent => {
  if (keyEvent.key === 'Escape')
    Object.keys(currentlyOpenModals).forEach(closeModal);
});

function closeModal(modalId) {
  const modal = currentlyOpenModals[modalId];
  modal.classList.add('hidden');
}

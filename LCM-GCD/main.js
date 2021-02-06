'use strict';

const firstNumber = document.querySelector('.first-number');
const checkboxBtn = document.querySelector('.switch-input');
const btnCalc = document.querySelector('.btn-calc');
const result = document.querySelector('.result');

const modalWrapper = document.querySelector('.modal-wrapper');
const btnOpenModal = document.querySelectorAll('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

const currentlyOpenModals = {};
const regEx = /^[0-9 ]+$/;

btnCalc.addEventListener('click', e => {
  e.preventDefault();

  if (!firstNumber.value || !regEx.test(firstNumber.value)) {
    result.textContent = '⚠️ input must be a number';
    return;
  }

  const inputData = firstNumber.value.split(' ');

  result.textContent = checkboxBtn.checked
    ? `The GCD of ${inputData.join(', ')} is: ${inputData.reduce(gcd)}`
    : `The LCM of ${inputData.join(', ')} is: ${inputData.reduce(lcm)}`;
});

// Find the LCM
function lcm(a, b) {
  return Math.abs((a * b) / gcd(a, b));
}

// Find the GCD
function gcd(a, b) {
  if (a === 0) return b;
  return gcd(b % a, a);
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

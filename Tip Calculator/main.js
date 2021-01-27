'use strict';

const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const people = document.getElementById('people');
const calculateBtn = document.querySelector('button');

const displayTip = document.querySelector('.tip');
const displayTotal = document.querySelector('.total');
const displayTotalPerPerson = document.querySelector('.per-person');

let tipAmount, totalAmount, amountPerPerson;

calculateBtn.addEventListener('click', e => {
  e.preventDefault();

  if (checkInput(bill.value, +tip.value, people.value))
    calculateAmounts(+bill.value, +tip.value, +people.value);
});

function checkInput(bill, tip, people) {
  if (!bill) {
    alert('Please enter the total bill amount.');
    return;
  }

  if (tip === 0) {
    alert('Please tell us how was the service.');
    return;
  }

  if (!people || people < 1) {
    alert('Please check the number of people.');
    return;
  }

  return true;
}

function calculateAmounts(bill, tip, people) {
  tipAmount = (bill * tip).toFixed(2);
  totalAmount = bill + +tipAmount;
  amountPerPerson = (totalAmount / people).toFixed(2);

  updateUI(tipAmount, totalAmount, amountPerPerson);
}

function updateUI(tipAmount, totalAmount, amountPerPerson) {
  displayTip.textContent = tipAmount;
  displayTotal.textContent = totalAmount;
  displayTotalPerPerson.textContent = amountPerPerson;
}

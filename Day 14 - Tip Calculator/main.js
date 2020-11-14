'use strict';

const calculateBtn = document.querySelector('button');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');
const perPerson = document.querySelector('.per-person');


calculateBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const bill = Number(document.getElementById('bill').value);
  const tip = Number(document.getElementById('tip').value);
  const people = Number(document.getElementById('people').value);

  if (checkInput(bill, tip, people)) {
    calculateAmounts(bill, tip, people);
  }
});


function checkInput(bill, tip, people) {
  if (bill === 0 || isNaN(bill)) {
    alert("Please enter the total bill amount.");
    return;
  }

  if (tip === 0) {
    alert("Please tell us how was the service.");
    return;
  }

  if (isNaN(people) || people === "" || people < 1) {
    alert("Please check the number of people.");
    return;
  }

  return true;
}


function calculateAmounts(bill, tip, people) {
  let tipAmount = bill * tip;
  let totalAmount = bill + tipAmount;
  let amountPerPerson = totalAmount / people;

  updateUI(tipAmount, totalAmount, amountPerPerson);
}


function updateUI(tipAmount, totalAmount, amountPerPerson) {
  tip.textContent = tipAmount;
  total.textContent = totalAmount;
  perPerson.textContent = amountPerPerson;
}
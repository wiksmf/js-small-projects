'use strict';

const date = document.querySelector('.date');
const btn = document.querySelector('button');
const displayBD = document.querySelector('.birthday');
const displayAge = document.querySelector('.age');


btn.addEventListener('click', (e) => {
  e.preventDefault();

  displayBD.textContent = ``;

  let birthDate = date.value;

  if (birthDate === "" || birthDate === null) return;

  birthDate = new Date(birthDate);
  let today = new Date();

  if (birthDate > today) {
    displayAge.textContent = 'invalid date';
    console.log('invalid date');
  } else {
    calcYears(today, birthDate);
  }
})


function calcYears(today, birthDate) {
  const todayYear = today.getFullYear();
  const birthDateYear = birthDate.getFullYear();
  const todayMonth = today.getMonth();
  const birthDateMonth = birthDate.getMonth();
  const todayDay = today.getDate();
  const birthDateDate = birthDate.getDate();

  let age = todayYear - birthDateYear;
  let month = todayMonth - birthDateMonth;

  if ((todayMonth === birthDateMonth) && (todayDay === birthDateDate)) {
    displayBD.textContent = `Happy Birthday! 🥳🥳🥳`;
  }

  if (month < 0 || (month === 0 && todayDay < birthDateDate)) age--

  displayAge.textContent = `${age} years`;
}
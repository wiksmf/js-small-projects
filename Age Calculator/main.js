'use strict';

const displayInfo = document.querySelector('.wrong-input');
const displayBD = document.querySelector('.birthday');
const displayAge = document.querySelector('.age');
const btnCalc = document.querySelector('button');

// Get the current year, month and date
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentDate = today.getDate();

// Variables to collect information
let years, months, days;
let ageInMilliseconds,
  ageInSeconds,
  ageInMinutes,
  ageInHours,
  ageInDays,
  ageInWeeks,
  ageInMonths;

btnCalc.addEventListener('click', (e) => {
  e.preventDefault();
  reset();

  const dateOfBD = document.querySelector('.input__data').value;
  const userBD = new Date(dateOfBD);

  if (!dateOfBD) displayInfo.textContent = 'choose a date please! 😅';
  else if (userBD > today) displayInfo.textContent = `invalid date 😟`;
  else {
    calcAge(userBD);
    updateDisplay();
  }
});

function calcAge(userBD) {
  displayInfo.textContent = ``;

  // Get the user birthday year, month and date
  const userBDYear = userBD.getFullYear();
  const userBDMonth = userBD.getMonth();
  const userBDDate = userBD.getDate();

  // Get years
  years = currentYear - userBDYear;

  // Get months
  if (currentMonth >= userBDMonth) months = currentMonth - userBDMonth;
  else {
    months = 12 + (currentMonth - userBDMonth);
    years--;
  }

  // Get days
  if (currentDate >= userBDDate) days = currentDate - userBDDate;
  else {
    days = 31 + (currentDate - userBDDate);
    months--;

    if (months < 0) {
      months = 11;
      years--;
    }
  }

  // Get age info in seconds, minutes, hours, days and weeks
  ageInMilliseconds = today.getTime() - userBD.getTime(); // getting age in milliseconds
  ageInSeconds = Math.floor(ageInMilliseconds / 1000); // 1 second = 1000 milliseconds
  ageInMinutes = Math.floor(ageInSeconds / 60); // 1 minute = 60 seconds
  ageInHours = Math.floor(ageInMinutes / 60); // 1 hour = 60 minutes
  ageInDays = Math.floor(ageInHours / 24); // 1 day = 24 hours
  ageInWeeks = Math.floor(ageInDays / 7); // 1 week = 7 days
  ageInMonths = years * 12 + months;

  if (currentDate === userBDDate && currentMonth === userBDMonth) {
    displayBD.classList.remove('hidden');
    displayBD.innerHTML = `<span class="birthday-text">Happy Birthday!</span> 🥳🥳🥳`;
  }
}

function updateDisplay() {
  displayAge.classList.remove('hidden');

  displayAge.innerHTML = `
    <h2 class="heading-secondary">your current age is: 
      <span class="age__value">${years}</span> years
      ${
        months === 0 ? '' : `<span class="age__value"> ${months}</span>  months`
      }
      ${days === 0 ? '' : `<span class="age__value"> ${days}</span>  days`}
    </h2>
    <p class="age__def">age in months: <span class="age__value"> ${ageInMonths}</span></p>
    <p class="age__def">age in weeks: <span class="age__value">${ageInWeeks}</span></p>
    <p class="age__def">age in days: <span class="age__value">${ageInDays}</span></p>
    <p class="age__def">age in hours: <span class="age__value">${ageInHours}</span></p>
    <p class="age__def">age in minutes: <span class="age__value">${ageInMinutes}</span></p>
    <p class="age__def">age in seconds: <span class="age__value">${ageInSeconds}</span></p>
  `;
}

function reset() {
  displayBD.classList.add('hidden');
  displayAge.classList.add('hidden');
}

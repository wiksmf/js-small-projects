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
    displayBD.textContent = `Happy Birthday! 🥳🥳🥳`;
  }
}

function updateDisplay() {
  displayAge.classList.remove('hidden');

  displayAge.innerHTML = `
    <h2>your current age is: ${years} years 
      ${months === 0 ? '' : `${months} months`}  
      ${days === 0 ? '' : `${days} days`}</h2>
    <p>age in months: <span> ${ageInMonths}</span></p>
    <p>age in weeks: <span>${ageInWeeks}</span></p>
    <p>age in days: <span>${ageInDays}</span></p>
    <p>age in hours: <span>${ageInHours}</span></p>
    <p>age in minutes: <span>${ageInMinutes}</span></p>
    <p>age in seconds: <span>${ageInSeconds}</span></p>
  `;
}

function reset() {
  displayBD.classList.add('hidden');
  displayAge.classList.add('hidden');
}

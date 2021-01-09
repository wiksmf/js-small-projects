'use strict';

const dateOfBD = document.querySelector('.date');
const displayInfo = document.querySelector('p');
const btnCalc = document.querySelector('button');

btnCalc.addEventListener('click', (e) => {
  e.preventDefault();

  if (!dateOfBD.value) return;

  let userBD = new Date(dateOfBD.value);
  let today = new Date();

  (userBD > today)
    ? (displayInfo.textContent = `invalid date 😟`)
    : calcAge(today, userBD);
});

function calcAge(today, userBD) {
  let monthsDiff = today.getMonth() - userBD.getMonth();
  
  let age = today.getTime() - userBD.getTime(); // getting age in milliseconds
  let seconds = Math.floor(age / 1000); // 1 second = 1000 milliseconds
  let minutes = Math.floor(seconds / 60); // 1 minute = 60 seconds
  let hours = Math.floor(minutes / 60); // 1 hour = 60 minutes
  let days = Math.floor(hours / 24); // 1 day = 24 hours
  let weeks = Math.floor(days / 7); // 1 week = 7 days
  let years = today.getFullYear() - userBD.getFullYear();
  let months = (years * 12) + monthsDiff;
  
  if(monthsDiff < 0 || (monthsDiff === 0 && today.getDate() < userBD.getDate())) {
    years--;
  }

  (today.getDate() === userBD.getDate() && today.getMonth() === userBD.getMonth())
    ? (displayInfo.textContent = `Happy Birthday! 🥳🥳🥳`)
    : '';
}

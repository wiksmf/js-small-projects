'use strict';

const userInput = document.querySelector('input');
const btnStart = document.querySelector('.play');

const buttons = document.querySelectorAll('button');

const displayHours = document.querySelector('.display-hours');
const displayMinutes = document.querySelector('.display-minutes');
const displaySeconds = document.querySelector('.display-seconds');


let hours = 0;
let minutes = 0;
let seconds = 0;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    if (btn.classList.contains('hours-plus')  && (hours < 24)) hours++;
    if (btn.classList.contains('hours-minus') && (hours > 0)) hours--;

    if (btn.classList.contains('minutes-plus') && (minutes < 59)) minutes++;
    if (btn.classList.contains('minutes-minus') && (minutes > 0)) minutes--;

    if (btn.classList.contains('seconds-plus') && (seconds < 59)) seconds++;
    if (btn.classList.contains('seconds-minus') && (seconds > 0)) seconds--;

    console.log(hours, minutes, seconds);
    updateUI();
  })
});

function updateUI() {
  displayHours.textContent = `${hours < 10 ? `0${hours}` : `${hours}`}`;
  displayMinutes.textContent = `${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
  displaySeconds.textContent = `${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}
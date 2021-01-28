'use strict';

const buttons = document.querySelectorAll('button');

const displayHours = document.querySelector('.display-hours');
const displayMinutes = document.querySelector('.display-minutes');
const displaySeconds = document.querySelector('.display-seconds');

let hours = 0;
let minutes = 0;
let seconds = 0;
let totalTime, timeLeft, timer;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('hours-plus') && (hours < 24)) hours++;
    if (btn.classList.contains('hours-minus') && (hours > 0)) hours--;

    if (btn.classList.contains('minutes-plus') && (minutes < 59)) minutes++;
    if (btn.classList.contains('minutes-minus') && (minutes > 0)) minutes--;

    if (btn.classList.contains('seconds-plus') && (seconds < 59)) seconds++;
    if (btn.classList.contains('seconds-minus') && (seconds > 0)) seconds--;

    if (btn.classList.contains('play')) startTimer();
    if (btn.classList.contains('pause')) pauseTimer();
    if (btn.classList.contains('restart')) restartTimer();

    updateUI(hours, minutes, seconds);
  })
});


function startTimer() {
  totalTime = (hours * 60 * 60) + (minutes * 60) + seconds;
  if (!totalTime) return;

  timer = setInterval(() => {
    timeLeft = --totalTime;
    formatTime(timeLeft);

    if (timeLeft <= 0) clearInterval(timer);
  }, 1000);
}

function pauseTimer() {
}

function restartTimer() {
  clearInterval(timer)
}

function formatTime(timeLeft) {
  const hoursLeft = Math.floor((timeLeft / 3600) % 24);
  const minutesLeft = Math.floor((timeLeft / 60) % 60)
  const secondsLeft = Math.floor(timeLeft % 60);

  updateUI(hoursLeft, minutesLeft, secondsLeft);
}

function updateUI(hours, minutes, seconds) {
  displayHours.textContent = hours < 10 ? `0${hours}` : hours;
  displayMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
  displaySeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
}
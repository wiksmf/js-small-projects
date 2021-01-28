'use strict';

const buttons = document.querySelectorAll('button');

const displayHours = document.querySelector('.display-hours');
const displayMinutes = document.querySelector('.display-minutes');
const displaySeconds = document.querySelector('.display-seconds');

let hours = 0;
let minutes = 0;
let seconds = 0;
let totalTime, timer;

// Handle buttons
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('hours-plus') && (hours < 24)) hours++;
    if (btn.classList.contains('hours-minus') && (hours > 0)) hours--;

    if (btn.classList.contains('minutes-plus') && (minutes < 59)) minutes++;
    if (btn.classList.contains('minutes-minus') && (minutes > 0)) minutes--;

    if (btn.classList.contains('seconds-plus') && (seconds < 59)) seconds++;
    if (btn.classList.contains('seconds-minus') && (seconds > 0)) seconds--;

    if (btn.classList.contains('play')) startTimer()
    if (btn.classList.contains('pause')) pauseTimer();
    if (btn.classList.contains('reset')) resetTimer();

    displayTimer(hours, minutes, seconds);
  })
});

// Start the timer
function startTimer() {
  document.querySelector('.play').disabled = true;

  totalTime = (hours * 60 * 60) + (minutes * 60) + seconds;

  if (!totalTime) {
    document.querySelector('.play').disabled = false;
    return;
  }

  // Remove one second from the total time every second
  timer = setInterval(() => {
    --totalTime;
    formatTime(totalTime);
    displayTimer(hours, minutes, seconds);

    if (totalTime <= 0) clearInterval(timer);
  }, 1000);
}

// Pause the timer
function pauseTimer() {
  document.querySelector('.play').disabled = false;
  clearInterval(timer);
}

// Reset the timer 
function resetTimer() {
  hours = minutes = seconds = 0;
  pauseTimer();
}

// Format the time as hh:mm:ss
function formatTime(timeLeft) {
  hours = Math.floor((timeLeft / 3600) % 24);
  minutes = Math.floor((timeLeft / 60) % 60)
  seconds = Math.floor(timeLeft % 60);
}

// Display the timer
function displayTimer(hours, minutes, seconds) {
  displayHours.textContent = hours < 10 ? `0${hours}` : hours;
  displayMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
  displaySeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
}
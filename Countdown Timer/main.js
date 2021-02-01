'use strict';

const userInput = document.querySelector('.date-input');
const btnCheck = document.querySelector('.btn');

const dayDisplay = document.querySelector('.days');
const hoursDisplay = document.querySelector('.hours');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const endTimerDisplay = document.querySelector('.end-timer');

let days, hours, minutes, seconds, end;

// Store the user's input
userInput.addEventListener('change', () => btnCheck.disabled = false);

// Handle the user's request
btnCheck.addEventListener('click', countdown);

// Count down to the specified date
function countdown(e) {
  e.preventDefault();

  end = false;
  endTimerDisplay.textContent = '';

  const timer = setInterval(() => {
    const today = new Date().getTime();
    const endDate = new Date(userInput.value).getTime();
    const timeLeft = endDate - today;
    getTimeLeft(timeLeft)
    updateDisplay();

    if (timeLeft < 0) {
      end = true;
      updateDisplay();
      clearInterval(timer);
    }
  }, 1000);
}

// Calculate the remaining time
function getTimeLeft(timeLeft){
  days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
}

// Update the user's interface
function updateDisplay() {
  dayDisplay.textContent = days > 0 ? days : '0';
  hoursDisplay.textContent = hours > 0 ? hours : '00';
  minutesDisplay.textContent = minutes > 0 ? minutes : '00';
  secondsDisplay.textContent = seconds > 0 ? seconds : '00';

  if(end) endTimerDisplay.textContent = `❌ expired`;
}
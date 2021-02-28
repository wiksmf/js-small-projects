'use strict';

const btnAll = document.querySelectorAll('.btn');
const btnDigitalClock = document.querySelector('.btn__clock-digital');
const btnAnalogClock = document.querySelector('.btn__clock-analog');
const displayClock = document.querySelectorAll('.show__clock-item');
const displayDigitalClock = document.querySelector('.show__clock-digital');
const hourHand = document.querySelector('.hand-hour');
const minutesHand = document.querySelector('.hand-minutes');
const secondsHand = document.querySelector('.hand-seconds');

// Event handlers
btnDigitalClock.addEventListener('click', () => {
  updateDisplay();
  showDigitalClock();
});

btnAnalogClock.addEventListener('click', () => {
  updateDisplay();
  showAnalogClock();
});

// Display the selected clock type
function updateDisplay() {
  btnAll.forEach(btn => {
    btn.classList.toggle('selected');
  });

  displayClock.forEach(clockItem => {
    clockItem.classList.toggle('hidden');
  });
}

// Show digital clock
function showDigitalClock() {
  const [hour, minutes, seconds] = getTime();

  displayDigitalClock.textContent = `${hour < 10 ? `${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;

  setInterval(showDigitalClock, 1000);
}

// Show analog clock
function showAnalogClock() {
  const [hour, minutes, seconds] = getTime();
  const hourDegree = (hour / 12) * 360 + 90;
  const minutesDegree = (minutes / 60) * 360 + 90;
  const secondsDegree = (seconds / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

  setInterval(showAnalogClock, 1000);
}

// Get current time
function getTime() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return [hour, minutes, seconds];
}

showDigitalClock();
showAnalogClock();

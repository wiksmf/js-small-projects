const btnCheck = document.querySelector('button');
const dayDisplay = document.querySelector('.days');
const hoursDisplay = document.querySelector('.hours');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const timerDisplay = document.querySelector('.endTimer');

let inputDate;
let days;
let hours;
let minutes;
let seconds;

function countdown() {
  let timer = setInterval(() => {
    let today = new Date().getTime();
    let xmas = new Date("December 25, 2020").getTime();

    let timeLeft = xmas - today;

    days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    updateDisplay();

    if (timeLeft < 0) {
      clearInterval(timer);
      endTimer();
    }

  }, 1000);
}


function updateDisplay() {
  dayDisplay.textContent = `${days}`;
  hoursDisplay.textContent = `${hours}`;
  minutesDisplay.textContent = `${minutes}`;
  secondsDisplay.textContent = `${seconds}`;
}


function endTimer() {
  dayDisplay.textContent = `0`;
  hoursDisplay.textContent = `00`;
  minutesDisplay.textContent = `00`;
  secondsDisplay.textContent = `00`;
  timerDisplay.textContent = `expired`;
}

countdown();
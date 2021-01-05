const userInput = document.querySelector('input');
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


// Store the user's input
userInput.addEventListener('change', () => {
  inputDate = userInput.value;
  btnCheck.disabled = false;
});


// Handle the user's request
btnCheck.addEventListener('click', countdown);


// Count down to the specified date
function countdown(event) {
  event.preventDefault();

  timerDisplay.textContent = '';

  let timer = setInterval(() => {
    let today = new Date().getTime();
    let endDate = new Date(userInput.value).getTime();

    let timeLeft = endDate - today;

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


// Update the user's interface
function updateDisplay() {
  dayDisplay.textContent = `${days}`;
  hoursDisplay.textContent = `${hours}`;
  minutesDisplay.textContent = `${minutes}`;
  secondsDisplay.textContent = `${seconds}`;
}


// Update the user's interface when the count down is finished
function endTimer() {
  dayDisplay.textContent = `0`;
  hoursDisplay.textContent = `00`;
  minutesDisplay.textContent = `00`;
  secondsDisplay.textContent = `00`;
  timerDisplay.textContent = `expired`;
}
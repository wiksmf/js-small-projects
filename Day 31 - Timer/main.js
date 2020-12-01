'use strict';

const displayTimer = document.querySelector('h1');
const userInput = document.querySelector('input');
const btnStart = document.querySelector('button');


const clock = () => {
  let value = Number(userInput.value);
  
  if (value <= 0) {
    return;
  }
  
  displayTimer.textContent = `${value}`;
  
  const timer = () => {
    value -= 1;
    displayTimer.textContent = `${value}`;
    if (value === 0) {
      clearInterval(startTimer)
      displayTimer.textContent = `🎊 0 🎊`;

    };
  }

  const startTimer = setInterval(timer, 1000);
}

btnStart.addEventListener('click', clock);
'use strict';

const displayParagraph = document.querySelector('.clock');
const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
const resetBtn = document.querySelector('.resetBtn');

let secondCount = 0;
let stopWatch;

// Start the count when the start button is pressed
startBtn.addEventListener('click', () => {
  stopWatch = setInterval(displayCount, 1000);
  startBtn.disabled = true;
});

// Stop the count when the stop button is pressed
stopBtn.addEventListener('click', stopCount);

// Reset the counter back to zero and update the display
// when the reset button is pressed
resetBtn.addEventListener('click', () => {
  secondCount = 0;
  stopCount();
  displayCount();
});

// Calculate the current hours, minutes and seconds, and display the count
function displayCount() {
  // Calculate current hours, minutes, and seconds
  let hours = Math.floor(secondCount / 3600);
  let minutes = Math.floor((secondCount % 3600) / 60);
  let seconds = Math.floor(secondCount % 60);

  // Display a leading zero if the values are less than ten
  displayParagraph.textContent = `
    ${hours < 10 ? `0${hours}` : hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}:
    ${seconds < 10 ? `0${seconds}` : seconds}
  `;

  secondCount++;
}

// Function to stop the count
function stopCount() {
  clearInterval(stopWatch);
  startBtn.disabled = false;
}

// Display the clock as soon as the page loads
displayCount();

// Reference to display the clock
const displayParagraph = document.querySelector('.clock');

// References to the buttons
let startBtn = document.querySelector('.startBtn');
let stopBtn = document.querySelector('.stopBtn');
let resetBtn = document.querySelector('.resetBtn');

// Variable to track the number of seconds
let secondCount = 0;

// Variable to store the interval when it is active
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
  stopCount();
  secondCount = 0;
  displayCount();
});


// Function to calculate the current hours, minutes and seconds, 
// and display the count
function displayCount() {
  // Calculate current hours, minutes, and seconds
  let hours = Math.floor(secondCount / 3600);
  let minutes = Math.floor((secondCount % 3600) / 60);
  let seconds = Math.floor(secondCount % 60);

  // Display a leading zero if the values are less than ten
  let displayHours = (hours < 10) ? `0${hours}` : hours;
  let displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
  let displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;

  displayParagraph.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;

  secondCount++;
}


// Function to stop the count
function stopCount() {
  clearInterval(stopWatch);
  startBtn.disabled = false;
}

// Display the clock as soon as the page loads
displayCount();
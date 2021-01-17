'use strict';

const displayDate = document.querySelector('.date');
const displayTime = document.querySelector('.time');

// Display the date
displayDate.textContent = new Intl.DateTimeFormat('default', {
  dateStyle: 'full',
}).format(new Date());

// Display the time
function getTime() {
  displayTime.textContent = new Intl.DateTimeFormat('default', {
    timeStyle: 'medium',
  }).format(new Date());
}

// Display the time once the page loads
getTime();

// Update the time every second
setInterval(() => {
  getTime();
}, 1000);

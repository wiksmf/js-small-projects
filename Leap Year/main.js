'use strict';

const userInput = document.querySelector('input');
const btnCheck = document.querySelector('button');
const result = document.querySelector('p');


btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let year = userInput.value;

  if (isNaN(year) || year === "" || year < 0) {
    alert("Please enter a valid year.");
  } else {
    let checkYear = isLeap(year)
    result.textContent = `It ${checkYear ? 'is' : 'is not'} a Leap Year!`;
    result.classList.toggle('is-leap', checkYear);
    result.classList.toggle('is-not-leap', !checkYear);
  }
});


function isLeap(year) {
  return ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0)));
}
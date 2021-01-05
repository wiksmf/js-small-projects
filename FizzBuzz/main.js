const displayNumber = document.querySelector('.random-number');
const startBtn = document.querySelector('.startBtn');
const gameBtn = document.querySelectorAll('.gameBtn');
const displayPoints = document.querySelector('.points');

let random;
let points = 0;


startBtn.addEventListener('click', () => {
  startBtn.classList.add('hidden');
  gameBtn.forEach((btn) => btn.disabled = false);
  updateUI();
  playFizzBuzz();
});


function updateUI() {
  random = randomNumber();
  displayNumber.textContent = random;
  displayPoints.textContent = `${points}`;
};


function playFizzBuzz() {
  gameBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      (checkFizzBuzz() === btn.value) ? points++ : '';
      updateUI();
    })
  })
};


function checkFizzBuzz() {
  if (random % 3 === 0 && random % 5 === 0) {
    return 'fizzBuzz';
  } else if (random % 3 === 0) {
    return 'fizz';
  } else if (random % 5 === 0) {
    return 'buzz';
  } else {
    return 'next';
  }
};


function randomNumber() {
  return Math.round(Math.random() * 1000) + 1;
};
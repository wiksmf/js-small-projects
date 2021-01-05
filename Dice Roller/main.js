const shakeBtn = document.querySelector('button');
const result = document.querySelector('h1');
const firstDice = document.querySelector('.firstDice');
const secondDice = document.querySelector('.secondDice');

const dice = ['dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6'];


// Shake the dice when the button is pressed
shakeBtn.addEventListener('click', () => {
  shakeDice();
  setTimeout(getRandomDice, 1000);
});


// Function to shake the heading and the dice
function shakeDice() {
  result.textContent = `shake, shake, shake ...`;
  result.classList.add('shake');
  firstDice.classList.add('shake');
  secondDice.classList.add('shake');
}


// Function to get a random dice and update the heading
function getRandomDice() {
  result.classList.remove('shake');
  firstDice.classList.remove('shake');
  secondDice.classList.remove('shake');

  let randomNumber1 = randomNumber();
  let randomNumber2 = randomNumber();

  firstDice.src = `images/${dice[randomNumber1]}.png`;
  secondDice.src = `images/${dice[randomNumber2]}.png`;

  if (randomNumber1 > randomNumber2) {
    result.textContent = `🎊 Player 1 wins!`;
  } else if (randomNumber1 < randomNumber2) {
    result.textContent = `Player 2 wins! 🎊`;
  } else {
    result.textContent = `🎊 DRAW! 🎊`;
  }
}


// Function to get a random number between 0 and 5
function randomNumber() {
  return Math.round(Math.random() * 5);
}
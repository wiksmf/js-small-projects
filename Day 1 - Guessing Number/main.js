// Constants to store references to the form text input and submit button
const guessField = document.querySelector('.guessField');
const submitBtn = document.querySelector('.submitBtn');
const resetBtn = document.querySelector('.resetBtn');

// Constants to store a reference to the results paragraphs in the HTML
const resetPar = document.querySelectorAll('.resultsParagraph p');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

// Generate a random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Variable to keep track of how many guesses the player has had
let guessCount = 1;

// Collect input from the user when the form is submitted
submitBtn.addEventListener('click', checkGuess);


// Function to check whether the guess is the correct number
function checkGuess() {
  let userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.classList.remove('wrong');
    lastResult.classList.add('correct');
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!! GAME OVER !!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.classList.add('wrong');
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}


// Function to restart the game
function setGameOver() {
  guessField.disabled = true;
  submitBtn.disabled = true;
  resetBtn.classList.remove('hidden');
  resetBtn.addEventListener('click', resetGame);
}


// Function to reset the game logic and webpage
function resetGame() {
  resetBtn.classList.add('hidden');

  guessCount = 1;

  for (let i = 0; i < resetPar.length; i++) {
    resetPar[i].textContent = '';
  }

  guessField.disabled = false;
  submitBtn.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.classList.remove('correct');
  lastResult.classList.remove('wrong');

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
'use strict';

const displayUserScore = document.querySelector('.score--0');
const displayAiScore = document.querySelector('.score--1');
const displayUserChoice = document.querySelector('.user-choice');
const displayAiChoice = document.querySelector('.ai-choice');
const playBtn = document.querySelector('.btn--play');
const hands = [...document.querySelectorAll('.hand')];

const options = {
  rock: '👊',
  paper: '🖐️',
  scissors: '✌️',
};

const game = {
  user: '',
  ai: '',
};

let userScore = 0,
  aiScore = 0;

hands.forEach(hand => hand.addEventListener('click', userSelection));
playBtn.addEventListener('click', startGame);

// Get user's choice
function userSelection() {
  const option = this.dataset.option;
  game.user = option;
  displayUserChoice.textContent = options[option];
}

// Get computer choice
function aiSelection() {
  const option = hands[Math.floor(Math.random() * 3)].dataset.option;
  displayAiChoice.textContent = options[option];
  return option;
}

// Compare user anc computer choices
function checkResult(user, ai) {
  if (user === ai) {
    document.querySelector('.player--0').classList.add('player--draw');
    document.querySelector('.player--1').classList.add('player--draw');
  } else if (
    (user === 'paper' && ai === 'rock') ||
    (user === 'rock' && ai === 'scissors') ||
    (user === 'scissors' && ai === 'paper')
  ) {
    userScore++;
    displayUserScore.textContent = userScore;
    document.querySelector('.player--0').classList.add('player--winner');
    document.querySelector('.player--1').classList.add('player--looser');
  } else {
    aiScore++;
    displayAiScore.textContent = aiScore;
    document.querySelector('.player--0').classList.add('player--looser');
    document.querySelector('.player--1').classList.add('player--winner');
  }
}

// Start the game
function startGame() {
  if (!game.user) return alert('please, make your choice 🤔');

  game.ai = aiSelection();
  classRemove(0);
  classRemove(1);
  checkResult(game.user, game.ai);
  endGame();
}

// End the game
function endGame() {
  game.user = '';
  game.ai = '';
}

// Remove all classes
function classRemove(player) {
  document
    .querySelector(`.player--${player}`)
    .classList.remove('player--winner', 'player--looser', 'player--draw');
}

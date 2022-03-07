'use strict';

const gameSection = document.querySelector('.game-section');
const displayScore = document.querySelector('#score');
const gameInfo = document.querySelector('.paragraph-information');
const playAgainBtn = document.querySelector('.btn');

let randomCardSet = [];
let chosenCard = [];
let chosenCardId = [];
let guessed = [];

async function loadData() {
  const cards = await (await fetch('./file.json')).json();
  randomCardSet = [...cards, ...cards].sort(() => 0.5 - Math.random());

  createBoard(randomCardSet);
}

function createBoard(randomCardSet) {
  gameSection.innerHTML = '';

  randomCardSet.forEach((_, index) => {
    const cardEl = document.createElement('img');

    cardEl.setAttribute('src', 'images/blank.png');
    cardEl.setAttribute('data-cardID', index);
    cardEl.addEventListener('click', flipCard);

    gameSection.appendChild(cardEl);
  });
}

function flipCard() {
  let cardId = this.getAttribute('data-cardID');

  chosenCard.push(randomCardSet[cardId].name);
  chosenCardId.push(cardId);
  this.setAttribute('src', randomCardSet[cardId].img);

  if (chosenCard.length === 2) setTimeout(checkMatch, 450);
}

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const [firstCard, secondCard] = chosenCardId;

  if (firstCard === secondCard) {
    updateView(
      cards[firstCard],
      cards[secondCard],
      'blank',
      'You have clicked the same image 🤨',
    );
  } else if (chosenCard[0] === chosenCard[1]) {
    updateView(
      cards[firstCard],
      cards[secondCard],
      'white',
      'You found a match 🥳',
    );
    cards[firstCard].removeEventListener('click', flipCard);
    cards[secondCard].removeEventListener('click', flipCard);
    guessed.push(chosenCard);
  } else {
    updateView(
      cards[firstCard],
      cards[secondCard],
      'blank',
      'Not this time, try again 🥺',
    );
  }

  displayScore.textContent = guessed.length;
  chosenCard = [];
  chosenCardId = [];

  if (guessed.length === randomCardSet.length / 2) {
    gameInfo.textContent = 'You found them all 😎';
    playAgainBtn.disabled = false;
    playAgainBtn.addEventListener('click', () => {
      playAgainBtn.disabled = true;
      guessed = [];
      loadData();
    });
  }
}

function updateView(firstCard, secondCard, img, message) {
  firstCard.setAttribute('src', `images/${img}.png`);
  secondCard.setAttribute('src', `images/${img}.png`);
  gameInfo.textContent = message;
}

loadData();

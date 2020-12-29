'use strict';

const btnPlay = document.querySelector('button');
const container = document.querySelector('.container');
let result = [];

btnPlay.addEventListener('click', getNumber);

function getNumber() {

  if (result.length === 6) {
    btnPlay.textContent = 'end of game';
    return;
  };

  const randomNumber = Math.floor(Math.random() * 49 + 1);

  for (let i = 0; i < result.length; i++) {
    if (randomNumber === result[i]) {
      return getNumber()
    }
  }
  result.push(randomNumber);

  const item = document.createElement("li");
  item.textContent = randomNumber;
  container.appendChild(item);
}
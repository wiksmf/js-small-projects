'use strict';

const userInput = document.querySelector('.form__input');
const result = document.querySelector('.result');
const btnAsk = document.querySelector('.btn');

const url = 'https://8ball.delegator.com/magic/JSON/';

btnAsk.addEventListener('click', e => {
  e.preventDefault();

  if (!userInput.value) {
    result.textContent = '⚠️ enter a question';
    return;
  }

  getAnswer(userInput.value);
});

async function getAnswer(question) {
  try {
    const res = await fetch(`${url}${question}`);
    if (!res.ok)
      throw new Error(
        'Great question, but are you sure you want to know the answer?',
      );

    const answer = await res.json();
    result.textContent = answer.magic.answer;
  } catch (err) {
    alert(`💥 ${err}`);
  }
}

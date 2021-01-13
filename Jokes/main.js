'use strict';

const btnJoke = document.querySelector('.btn');
const parJoke = document.querySelector('.joke');

const url = `https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist&type=single`;

btnJoke.addEventListener('click', loadJoke);

function loadJoke() {
  parJoke.textContent = `🤔🤔🤔`;
  setTimeout(tellJoke, 1000);
}

const tellJoke = async function () {
  try {
    const getJoke = await fetch(url);
    if (getJoke.error) throw new Error('Problem getting joke');

    const joke = await getJoke.json();
    parJoke.textContent = joke.joke;
  } catch (err) {
    console.log(`💥 ${err}`);
  }
};

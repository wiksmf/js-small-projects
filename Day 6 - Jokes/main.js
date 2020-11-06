const btnJoke = document.querySelector('button');
const parJoke = document.querySelector('.joke');

const url = `https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist&type=single`;

btnJoke.addEventListener('click', loadJoke);


function loadJoke() {
  parJoke.textContent = `...`;
  parJoke.classList.add('rotate');

  setTimeout(tellJoke, 1000);
};


function tellJoke() {
  parJoke.classList.remove('rotate');

  fetch(url)
    .then((res) => res.json())
    .then((joke) => {
      parJoke.textContent = `${joke.joke}`;
    })
};
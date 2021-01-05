'use strict';

const displayQuote = document.querySelector('.text');
const displayAuthor = document.querySelector('.author');
const url = `https://type.fit/api/quotes`;

fetch(url)
  .then((res) => res.json())
  .then((quote) => {
    let max = quote.length;
    let randomNumber = Math.floor(Math.random() * max + 1);
    displayQuote.textContent = `${quote[randomNumber].text}`;
    displayAuthor.textContent = `${quote[randomNumber].author}`;
  });

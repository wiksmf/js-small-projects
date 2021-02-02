'use strict';

const displayQuote = document.querySelector('.text');
const displayAuthor = document.querySelector('.author');
const url = `https://type.fit/api/quotes`;

// Get random quote
async function getQuote() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Whoops.. there are some problems 😥`);

    const quote = await res.json();
    const randomNumber = Math.floor(Math.random() * quote.length + 1);
    displayQuote.textContent = `${quote[randomNumber].text}`;
    displayAuthor.textContent = `${quote[randomNumber].author}`;
  } catch (err) {
    alert(`💥 ${err}`);
  }
}

getQuote();

'use strict';

const bgColor = document.querySelector('body');
const btnChange = document.querySelector('.btn');
const paragraph = document.querySelector('.color-name');

const baseURL = `https://www.thecolorapi.com/id?hex`;

btnChange.addEventListener('click', updatePage);

async function updatePage() {
  try {
    const res = await fetch(`${baseURL}=${getRandomColor()}`);
    if (!res.ok)
      throw new Error('Whoops.. there are some problems getting the color 🎨');

    const color = await res.json();

    paragraph.textContent = `
    ${
      color.name.value === 'Black' && color.hex.value !== '#000'
        ? 'unknown 🤔'
        : `${color.name.value}`
    }`;
    bgColor.style.backgroundColor = color.hex.value;
  } catch (err) {
    alert(err);
  }
}

function getRandomColor() {
  return Math.floor(Math.random() * 10000000).toString(16);
}

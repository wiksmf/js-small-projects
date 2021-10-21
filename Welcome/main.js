'use strict';

const textEl = document.querySelector('.heading-primary');
const speedEl = document.querySelector('#speed');
const text = 'Hej! Hola! Kon’nichiwa! Hello! Ahoj! Hallo!';

let index = 1;
let speed = 300 / speedEl.value;

speedEl.addEventListener('input', e => {
  speed = 300 / e.target.value;
});

function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;

  if (index > text.length) index = 1;

  setTimeout(writeText, speed);
}

writeText();

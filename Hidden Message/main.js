'use strict';

const message = document.querySelector('.message');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  message.classList.toggle('active');
});

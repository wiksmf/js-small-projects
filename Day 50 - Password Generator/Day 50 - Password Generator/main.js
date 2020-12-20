'use strict';

const passwordLength = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.querySelector('.result');

const charset = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789+-$!?*&";

btn.addEventListener('click', (e) => {
  e.preventDefault();

  let pwdLength = passwordLength.value;

  if (!pwdLength) return;

  getRandomPwd(pwdLength);
});


function getRandomPwd(pwdLength) {
  let randomPwd = '';
  for (let i = 0; i < pwdLength; i++) {
    randomPwd += charset.charAt(randomNumber(charset.length));
  }

  result.textContent = randomPwd;
}


function randomNumber(numb) {
  return Math.trunc(Math.random() * numb);
}
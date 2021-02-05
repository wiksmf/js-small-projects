'use strict';

const pwdLength = document.getElementById('pwd-length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const btnCreatePwd = document.querySelector('.btn-create');
const btnCopyPwd = document.querySelector('.btn-copy');
const password = document.querySelector('.password');

const charset = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '+-$!?*&#',
};

// Copy the password
btnCopyPwd.addEventListener('click', () => {
  if (!password) return;

  password.select();
  document.execCommand('copy');
});

// Create new password
btnCreatePwd.addEventListener('click', e => {
  e.preventDefault();

  if (!pwdLength.value) return;

  password.value = getRandomPwd(
    +pwdLength.value,
    lowercase.checked,
    uppercase.checked,
    numbers.checked,
    symbols.checked,
  );
});

// Get random password
function getRandomPwd(pwdLength, low, upp, num, sym) {
  let fullString = '';
  let randomPwd = '';

  const selectedOptions = {
    lowercase: low,
    uppercase: upp,
    numbers: num,
    symbols: sym,
  };

  for (let i = 0; i < Object.keys(selectedOptions).length; i++)
    if (Object.values(selectedOptions)[i])
      fullString += charset[Object.keys(selectedOptions)[i]];

  for (let i = 0; i < pwdLength; i++)
    randomPwd += fullString[randomNumber(fullString.length)];

  return randomPwd;
}

// Get random number
function randomNumber(numb) {
  return Math.trunc(Math.random() * numb);
}

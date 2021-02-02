'use strict';

const userInput = document.querySelector('.input-data');
const btnRoman = document.querySelector('.btn-roman');
const btnArabic = document.querySelector('.btn-arabic');
const result = document.querySelector('.result');

const regEx = /M|CM|D|CD|C|XC|L|XL|X|IX|V|IV|I/;

const numeralsConversion = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

btnRoman.addEventListener('click', toRoman);
btnArabic.addEventListener('click', toArabic);

// Convert from arabic to roman numerals
function toRoman() {
  if (isNaN(userInput.value)) return;

  let romanNumber = '';
  let number = +userInput.value;

  for (const x in numeralsConversion) {
    while (number >= numeralsConversion[x]) {
      romanNumber += x;
      number -= numeralsConversion[x];
    }
  }
  displayResult(+userInput.value, romanNumber);
}

// Convert from roman to arabic numerals
function toArabic() {
  const input = userInput.value.toUpperCase();

  if (!isNaN(input) || !regEx.test(input)) return;

  let number = input.split('');
  let arabicNumber = 0;
  let currentValue, nextValue;

  for (let i = 0; i < number.length; i++) {
    currentValue = numeralsConversion[number[i]];
    nextValue = numeralsConversion[number[i + 1]];

    if (currentValue < nextValue) arabicNumber -= currentValue;
    else arabicNumber += currentValue;
  }
  displayResult(userInput.value, arabicNumber);
}

// Display conversion results
function displayResult(input, number) {
  result.textContent = `${input} ➡ ${number}`;
  userInput.value = '';
}

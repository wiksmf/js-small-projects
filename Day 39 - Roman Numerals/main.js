'use strict';

const userInput = document.querySelector('input');
const btnConvert = document.querySelector('button');
const displayInput = document.querySelector('.number');
const displayResult = document.querySelector('.result');
const romanToArabic = {
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
  I: 1
};


const toRoman = () => {
  let number = +userInput.value;
  displayInput.textContent = number;

  let romanNumber = '';

  for (let x in romanToArabic) {
    while (number >= romanToArabic[x]) {
      romanNumber += x;
      number -= romanToArabic[x];
    }
  }

  displayResult.textContent = romanNumber;
};

btnConvert.addEventListener('click', function(e) {
  e.preventDefault();

  toRoman();
  userInput.value = '';
});
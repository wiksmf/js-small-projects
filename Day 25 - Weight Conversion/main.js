'use strict';

const userInput = document.querySelector('input');
const units = document.getElementById('unit');
const resultKG = document.querySelector('.result-kg');
const resultLB = document.querySelector('.result-lb');
const resultOZ = document.querySelector('.result-oz');
const resultST = document.querySelector('.result-st');
const btnConvert = document.querySelector('button');


btnConvert.addEventListener('click', (e) => {
  e.preventDefault();

  if (isNaN(userInput.value)) {
    return;
  }

  if (unit.value === 'kg') {
    convertFromKG();
  } else if (unit.value === 'lb') {
    convertFromLB();
  } else if (unit.value === 'oz') {
    convertFromOZ();
  } else if (unit.value === 'st') {
    convertFromST();
  }
});


function convertFromKG() {
  resultKG.textContent = userInput.value;
  resultLB.textContent = (userInput.value * 2.2046).toFixed(3);
  resultOZ.textContent = (userInput.value * 35.274).toFixed(3);
  resultST.textContent = (userInput.value * 0.1574).toFixed(3);
}


function convertFromLB() {
  resultLB.textContent = userInput.value;
  resultKG.textContent = (userInput.value / 2.2046).toFixed(3);
  resultOZ.textContent = (userInput.value * 16).toFixed(3);
  resultST.textContent = (userInput.value * 0.071429).toFixed(3);
}


function convertFromOZ() {
  resultOZ.textContent = userInput.value;
  resultKG.textContent = (userInput.value / 35.274).toFixed(3);
  resultLB.textContent = (userInput.value * 0.0625).toFixed(3);
  resultST.textContent = (userInput.value * 0.0044643).toFixed(3);
}

function convertFromST() {
  resultST.textContent = userInput.value;
  resultKG.textContent = (userInput.value / 0.15747).toFixed(3);
  resultLB.textContent = (userInput.value * 14).toFixed(3);
  resultOZ.textContent = (userInput.value * 224).toFixed(3);
}
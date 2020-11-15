'use strict';

const userInput = document.querySelector('input');
const units = document.getElementById('unit');
const resultCelsius = document.querySelector('.result-celsius');
const resultFahrenheit = document.querySelector('.result-fahrenheit');
const resultKelvin = document.querySelector('.result-kelvin');
const btnConvert = document.querySelector('button');


btnConvert.addEventListener('click', (e) => {
  e.preventDefault();

  if(isNaN(userInput.value)) {
    return;
  }

  if (unit.value === 'celsius') {
    convertFromCelsius();
  } else if (unit.value === 'fahrenheit') {
    convertFromFahrenheit();
  } else if (unit.value === 'kelvin') {
    convertFromKelvin();
  }
});


function convertFromCelsius() {
  resultCelsius.textContent = userInput.value;
  resultFahrenheit.textContent = (((userInput.value * 9) / 5) + 32).toFixed(1);
  resultKelvin.textContent = ((userInput.value * 1) + 273.15).toFixed(1);
}


function convertFromFahrenheit() {
  resultFahrenheit.textContent = userInput.value;
  resultCelsius.textContent = (((userInput.value - 32) * 5) / 9).toFixed(1);
  resultKelvin.textContent = ((((userInput.value - 32) * 5) / 9) + 273.15).toFixed(1);
}


function convertFromKelvin() {
  resultKelvin.textContent = userInput.value;
  resultCelsius.textContent = (userInput.value - 273.15).toFixed(1);
  resultFahrenheit.textContent = ((((userInput.value - 273.15) * 9) / 5) + 32).toFixed(1);
}
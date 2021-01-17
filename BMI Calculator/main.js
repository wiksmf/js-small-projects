'use strict';

const units = document.querySelectorAll('[type="radio"]');
const userInput = document.querySelectorAll('[type="number"]');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const warning = document.querySelector('.warning');
const btnCalc = document.querySelector('.btn');
const result = document.querySelector('.result');
const infoBMI = document.querySelector('.infoBMI');

let bmi,
  height,
  weight,
  metricUnit = true,
  inputCheck = false;

// Update the ui with user's choice
units.forEach(unit => {
  unit.addEventListener('click', () => {
    if (unit.value === 'metric') {
      displayPlaceholder('cm', 'kg');
      metricUnit = true;
    } else {
      displayPlaceholder('in', 'lbs');
      metricUnit = false;
    }
    enableUserInput();
  });
});

// Display correct placeholder
function displayPlaceholder(heightInfo, weightInfo) {
  heightInput.setAttribute('placeholder', `height (${heightInfo})`);
  weightInput.setAttribute('placeholder', `weight (${weightInfo})`);
}

// Enable the user to enter data once a unit is selected
function enableUserInput() {
  userInput.forEach(input => (input.disabled = false));
  btnCalc.disabled = false;
}

// Handle user request for BMI index
btnCalc.addEventListener('click', e => {
  e.preventDefault();

  height = +heightInput.value;
  weight = +weightInput.value;

  if (checkData(height, heightInput) && checkData(weight, weightInput))
    calcBMI(height, weight, metricUnit);
});

// Check if it's a valid input
function checkData(input, inputInfo) {
  if (!input || input < 0) {
    warning.textContent = `please provide a valid 
      ${inputInfo.getAttribute('placeholder')}
    `;
    warning.classList.remove('hidden');
    inputCheck = false;
  } else {
    warning.classList.add('hidden');
    inputCheck = true;
  }
  return inputCheck;
}

// Calculate the BMI
function calcBMI(height, weight, metricUnit) {
  if (metricUnit) {
    bmi = (weight / (height / 100) ** 2).toFixed(1);
  } else {
    bmi = ((730 * weight) / height ** 2).toFixed(1);
  }
  showResult(bmi);
}

// Show the result
function showResult(bmi) {
  result.textContent = `your BMI is ${bmi}`;

  if (bmi < 18.5) {
    infoBMI.textContent = `you are underweight 🖤`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    infoBMI.textContent = `you are at a healthy weight 💚`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    infoBMI.textContent = `you are slightly overweight 💛`;
  } else {
    infoBMI.textContent = `you are heavily overweight 🖤`;
  }
}

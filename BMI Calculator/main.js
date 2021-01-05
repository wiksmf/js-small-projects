const unit = document.querySelectorAll('[type="radio"]');
const userInput = document.querySelectorAll('[type="text"]');
const warningHeight = document.querySelector('.warningHeight');
const warningWeight = document.querySelector('.warningWeight');
const btnCalculate = document.querySelector('button');
const result = document.querySelector('.result');
const infoBMI = document.querySelector('.infoBMI');

let bmi;
let metricUnit = true;
let heightCheck = false;
let weightCheck = false;


// Update the ui with user's choice
for (let i = 0; i < unit.length; i++) {
  unit[i].addEventListener('click', () => {
    if (unit[i].value === 'metric') {
      height.placeholder = 'Height (cm)';
      weight.placeholder = 'Weight (kg)';
      enableUserInput();
      metricUnit = true;
    } else {
      height.placeholder = 'Height (in)';
      weight.placeholder = 'Weight (lbs)';
      enableUserInput();
      metricUnit = false;
    }
  })
}


// Enable the user to enter data once a unit is selected
function enableUserInput() {
  for (let i = 0; i < userInput.length; i++) {
    userInput[i].disabled = false;
  }

  btnCalculate.disabled = false;
}


// Handle user request for BMI index
btnCalculate.addEventListener('click', (e) => {
  e.preventDefault();

  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;

  if (checkData(height, weight)) {
    calcBMI(height, weight, metricUnit);
  }
});


// Check if it's a valid input
function checkData(height, weight) {

  if ((height === '') || (height < 0) || (isNaN(height))) {
    warningHeight.classList.remove('hidden');
  } else {
    warningHeight.classList.add('hidden');
    heightCheck = true;
  }

  if ((weight === '') || (weight < 0) || (isNaN(weight))) {
    warningWeight.classList.remove('hidden');
  } else {
    warningWeight.classList.add('hidden');
    weightCheck = true;
  }

  return heightCheck && weightCheck;
}


// Calculate the BMI
function calcBMI(height, weight, metricUnit) {
  if (metricUnit) {
    bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  } else {
    bmi = ((730 * weight) / (height ** 2)).toFixed(1);
  }
  showResult(bmi);
}


// Show the result
function showResult(bmi) {
  result.textContent = `Your BMI is ${bmi}`;

  if (bmi < 18.5) {
    infoBMI.textContent = `You are underweight`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    infoBMI.textContent = `You are at a healthy weight`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    infoBMI.textContent = `You are slightly overweight`;
  } else {
    infoBMI.textContent = `You are heavily overweight`;
  }
}
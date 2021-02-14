'use strict';

const calculatorItems = document.querySelector('.calculator__items');
const displayResult = document.querySelector('.calculator-display');

let total, currentNumber, nextNumber, operator;

// Handle user's click on the calculator
calculatorItems.addEventListener('click', e => {
  if (!e.target.classList.contains('calculator__item')) return;

  const item = e.target.getAttribute('data-input-value');

  if (Number.isInteger(parseFloat(item))) displayInput(item);
  if (item === '.') handelDecimal(item);
  if (item === 'AC') init();
  if (
    item === '+' ||
    item === '-' ||
    item === '*' ||
    item === '/' ||
    item === '='
  )
    handleOperation(item);

  displayResult.value = total;
});

// Display the current clicked number
function displayInput(number) {
  if (nextNumber) {
    total = number;
    nextNumber = false;
  } else {
    total = total === '0' ? number : total + number;
  }
}

// Handle decimal values
function handelDecimal(decimal) {
  if (!total.includes(decimal)) total += decimal;

  if (nextNumber) {
    total = '0.';
    nextNumber = false;
    return;
  }
}

// Handle the operations
function handleOperation(nextOperator) {
  const input = parseFloat(total);

  if (operator && nextNumber) {
    operator = nextOperator;
    return;
  }

  if (!currentNumber && !isNaN(input)) currentNumber = input;

  if (operator) {
    const result = calculateTotal(currentNumber, input);
    total = `${parseFloat(result.toFixed(5))}`;
    currentNumber = result;
  }

  nextNumber = true;
  operator = nextOperator;
}

// Calculate the total
function calculateTotal(currentNumber, nextNumber) {
  if (operator === '+') return currentNumber + nextNumber;
  if (operator === '-') return currentNumber - nextNumber;
  if (operator === '*') return currentNumber * nextNumber;
  if (operator === '/') return currentNumber / nextNumber;

  return nextNumber;
}

// Initialize all the values
function init() {
  total = '0';
  currentNumber = null;
  nextNumber = false;
  operator = null;
}

init();

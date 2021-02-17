'use strict';

const taskNumber = document.querySelector('.tasks--number');
const userInput = document.querySelector('.form__input');
const addItem = document.querySelector('.btn--add');
const listItems = document.querySelector('.list__item');
const items = document.getElementsByClassName('task');

addItem.addEventListener('click', createNewItem);

function createNewItem(e) {
  e.preventDefault();

  if (userInput.value === '') return;

  const newItem = document.createElement('li');
  newItem.className = 'task';
  newItem.innerHTML = `${userInput.value}<button class="btn btn--delete">🗑️</button>`;
  listItems.append(newItem);
  userInput.value = '';

  console.log(listItems.length);

  taskNumber.textContent = items.length;
  newItem.querySelector('button').addEventListener('click', removeTask);
}

function removeTask(e) {
  e.target.parentNode.remove();
  taskNumber.textContent = items.length;
}

'use strict';

const totalNumberTasks = document.querySelector('.total__tasks');
const userInput = document.querySelector('.form__input');
const addItem = document.querySelector('.btn--add');
const listTasks = document.querySelector('.list__tasks');
const items = document.getElementsByClassName('task');

addItem.addEventListener('click', addTask);

// Add a new task when clicking on the "Add" button
function addTask(e) {
  const newTask = document.createElement('li');

  if (!userInput.value) return;

  newTask.className = 'task';
  newTask.innerHTML = `${userInput.value}<button class="btn btn--delete">&times;</button>`;
  listTasks.append(newTask);

  newTask.querySelector('.btn--delete').addEventListener('click', removeTask);
  newTask.addEventListener('click', checked);

  totalNumberTasks.textContent = items.length;
  userInput.value = '';
  userInput.focus();
}

// Remove the selected task from the list
function removeTask(e) {
  e.target.parentNode.remove();
  taskNumber.textContent = items.length;
}

// Add a checked symbol when clicking on a task
function checked(e) {
  if (e.target.tagName === 'LI') e.target.classList.toggle('checked');
}

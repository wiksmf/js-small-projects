'use strict';

const toast = document.querySelector('#toasts');
const button = document.querySelector('#button');

const messages = [
  'Hi there 🙂',
  'Hope you are doing well 😃',
  'Keep going 🤩',
  'You are the best 😉',
];

const types = ['info', 'success', 'error', 'warning'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.classList.add(type ? type : getRandomType());

  notification.innerText = message ? message : getRandomMessage();

  toast.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}

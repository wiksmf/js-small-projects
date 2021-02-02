'use strict';

const form = document.querySelector('.form');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const pwd = document.querySelector('.pwd');

const regEx = {
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  pwd: /^(?=.*\d)(?=.*[a-zA-Z])\w{8,14}$/,
};

form.addEventListener('submit', function (event) {
  event.preventDefault();

  !firstName.value ? displayError(firstName) : removeError(firstName);
  !lastName.value ? displayError(lastName) : removeError(lastName);
  !regEx.email.test(email.value) ? displayError(email) : removeError(email);
  !regEx.pwd.test(pwd.value) ? displayError(pwd) : removeError(pwd);

  firstName.value = '';
  lastName.value = '';
  email.value = '';
  pwd.value = '';
});

function displayError(inputItem) {
  inputItem.classList.add('error-input');
  inputItem.nextElementSibling.classList.remove('hidden');
}

function removeError(inputItem) {
  inputItem.classList.remove('error-input');
  inputItem.nextElementSibling.classList.add('hidden');
}

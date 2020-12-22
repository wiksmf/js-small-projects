const form = document.querySelector('.form');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const pwd = document.querySelector('.pwd');

const regEx = {
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  pwd: /^[A-Za-z0-9]\w{8,16}$/
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if(firstName.value === "") {
    displayError(firstName);
  } else {
    removeError(firstName);
  }
  
  if (lastName.value === ""){
    displayError(lastName);
  } else {
    removeError(lastName);
  }
  
  if (!regEx.email.test(email.value)) {
    displayError(email);
  } else {
    removeError(email);
  }

  if(!regEx.pwd.test(pwd.value)){
    displayError(pwd);
  }else {
    removeError(pwd);
  }
});

function displayError(inputItem){
  inputItem.classList.add('error-input');
  inputItem.nextElementSibling.classList.remove('hidden');
}

function removeError(inputItem){
  inputItem.classList.remove('error-input');
  inputItem.nextElementSibling.classList.add('hidden');
}
'use strict';

const userInput = document.querySelector('input');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');


btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  const string = userInput.value;

  if (string === '') return;

  isPalindrome(string) ?
    result.textContent = 'palindrome!' :
    result.textContent = 'not palindrome!';
});


function isPalindrome(string) {
  string = string.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  let reverseString = string.split('').reverse().join('');

  return reverseString === string;
}
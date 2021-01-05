'use strict';

const word = document.querySelector('.word');
const anagramInput = document.querySelector('.possible-anagrams');
const btnCheck = document.querySelector('button');
const result = document.querySelector('.result');


btnCheck.addEventListener('click', (e) => {
  e.preventDefault();

  let string = word.value;
  let possibleAnagrams = anagramInput.value;

  if ((string.length === 0) || (possibleAnagrams.length === 0)) {
    return;
  }

  isAnagram(string, possibleAnagrams);
});


function isAnagram(string, possibleAnagrams) {
  string = string.trim();
  possibleAnagrams = possibleAnagrams.split(' ');

  let anagrams = possibleAnagrams.filter(
    anagram =>
    (string.toLowerCase() !== anagram.toLowerCase()) &&
    (compare(string, anagram.toLowerCase()))
  );

  (anagrams.length > 0) ?
    result.textContent = anagrams.join(', ') :
    result.textContent = 'no anagrams!';
};


function compare(firstWord, secondWord) {
  firstWord = firstWord.split('').sort().join('');
  secondWord = secondWord.split('').sort().join('');

  return firstWord === secondWord;
};
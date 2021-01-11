'use strict';

const wordInput = document.querySelector('.input__word');
const anagramInput = document.querySelector('.input__possible-anagrams');
const btnCheck = document.querySelector('.btn-check');
const displayAnagram = document.querySelector('.result');
const displayInfo = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');

btnCheck.addEventListener('click', e => {
  e.preventDefault();

  let word = wordInput.value;
  let possibleAnagrams = anagramInput.value;

  if (!word || !possibleAnagrams) {
    displayAnagram.textContent = '⚠️ invalid input';
    return;
  }

  let anagrams = isAnagram(word, possibleAnagrams);
  displayAnagram.textContent = `  
  ${
    anagrams.length > 0 ? `${word} -> ${anagrams.join(', ')}` : 'no anagrams 😭'
  }`;

  wordInput.value = '';
  anagramInput.value = '';
});

function isAnagram(word, possibleAnagrams) {
  // Removing whitespace characters form the begin and end of the word
  word = word.trim();

  // Splitting the list of possible anagrams into an array
  possibleAnagrams = possibleAnagrams.split(' ');

  // Looking for anagrams in the list
  let anagrams = possibleAnagrams.filter(
    anagram =>
      word.toLowerCase() !== anagram.toLowerCase() &&
      compare(word, anagram.toLowerCase()),
  );

  return anagrams;
}

// Comparing the word and the possible anagram letter by letter
function compare(word, anagram) {
  word = word.split('').sort().join('');
  anagram = anagram.split('').sort().join('');

  return word === anagram;
}

// Handling information modal
btnOpenModal.addEventListener('click', () => {
  displayInfo.classList.remove('hidden');
});

btnCloseModal.forEach(btn => {
  btn.addEventListener('click', () => {
    displayInfo.classList.add('hidden');
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !btnCloseModal.classList.contains('hidden'))
    displayInfo.classList.add('hidden');
});

'use strict';

const name = prompt("What's your name?");
const game = confirm("Hi " + name + ", are you ready to play Hangman?");

if (game) {
  let words = [
    "banana",
    "cantaloupe",
    "apple",
    "peach",
    "orange",
    "kiwi",
    "mango",
    "pineapple",
    "tangerine",
    "pear",
    "honeydew",
    "guava",
    "blueberry",
    "nectarine",
    "grape",
    "strawberry",
  ];

  let word = words[Math.floor(Math.random() * words.length)];
  let answerArray = [];

  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  let remainingLetters = word.length;

  alert("Guess a letter, or click Cancel to stop playing.");

  while (remainingLetters > 0) {
    let guess = prompt("Current word: " + answerArray.join(' '));

    if (guess === null) {
      break;
    } else if (guess.length != 1) {
      alert("Please enter a single letter.");
    } else {
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
    }
  }
  ``
  alert(answerArray.join(' '));
  alert(`Good job! The answer was ${word.toUpperCase()} 🥳`);
}
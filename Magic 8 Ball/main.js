const userInput = document.querySelector('input');
const result = document.querySelector('.result');
const btnAsk = document.querySelector('button');

var answers = ["It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes, definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again."
];


btnAsk.addEventListener("click", (e) => {
  e.preventDefault();

  let question = userInput.value;

  if (question.length === 0) return;
  result.textContent = answers[randomNumber(answers.length)];
});

function randomNumber(answers) {
  return Math.floor(Math.random() * answers);
}
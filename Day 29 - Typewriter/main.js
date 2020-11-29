const spanText = document.querySelector('.text');
const updateText = document.querySelector('input');
const cursor = document.querySelector('.cursor');
const txt = [
  'Welcome ☺...',
  'You can use the input field to write some text...',
  'I love you mummy ♥'
];

let activeLetter = -15;
let activeText = 0;


const addLetter = () => {
  if (activeLetter >= 0) {
    spanText.textContent += txt[activeText][activeLetter];
  }
  activeLetter++;
  if (activeLetter === txt[activeText].length) {

    activeText++;
    if (activeText === txt.length) return;

    return setTimeout(() => {
      activeLetter = -15;
      spanText.textContent = '';
      addLetter()
    }, 2000);

  }
  setTimeout(addLetter, 100)
}
addLetter();


updateText.addEventListener('input', () => {
  if (activeLetter >= 0) {
    spanText.textContent = updateText.value;
  }
});


const cursorAnimation = () => {
  cursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);
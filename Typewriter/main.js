const spanText = document.querySelector('.text__field');
const updateText = document.querySelector('.input__field');
const cursor = document.querySelector('.cursor');
const defaultTxt = [
  'Welcome ☺...',
  'You can use the input field to write some text...',
];

let activeLetter = -15;
let activeText = 0;

// Create the typewriter effect
function addLetter() {
  if (activeLetter >= 0)
    spanText.textContent += defaultTxt[activeText][activeLetter];
  activeLetter++;

  if (activeLetter === defaultTxt[activeText].length) {
    activeText++;

    if (activeText === defaultTxt.length) return;

    return setTimeout(() => {
      activeLetter = -15;
      spanText.textContent = '';
      addLetter();
    }, 2000);
  }
  setTimeout(addLetter, 150);
}
addLetter();

// Display the user's text
updateText.addEventListener('input', () => {
  if (activeLetter >= 0) spanText.textContent = updateText.value;
});

// Toggle the visibility of the cursor
setInterval(() => {
  cursor.classList.toggle('active');
}, 350);

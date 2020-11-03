const bgColor = document.querySelector('body');
const btnColor = document.querySelector('button');

// Change the background color when the button is pressed
btnColor.addEventListener('click', () => {
  bgColor.style.backgroundColor = getRandomColor();
});

// Create random color (hexadecimal color)
function getRandomColor() {
  return `#${(Math.floor(Math.random() * 10000000).toString(16))}`;
}
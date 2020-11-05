const bgColor = document.querySelector('body');
const btnChange = document.querySelector('button');
const paragraph = document.querySelector('p');

const baseURL = `https://www.thecolorapi.com/id?hex`;
let url;

btnChange.addEventListener('click', updatePage);


function updatePage() {
  paragraph.classList.remove('fade');
  url = `${baseURL}=${getRandomColor()}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.name.value === 'Black' && data.hex.value !== '#000') {
        paragraph.textContent = `unknown 🤔`;
        paragraph.classList.add('fade');
      } else {
        paragraph.textContent = data.name.value;
        paragraph.classList.add('fade');
      }
      bgColor.style.backgroundColor = data.hex.value;
    });
};


function getRandomColor() {
  return Math.floor(Math.random() * 10000000).toString(16);
}
'use strict';

const slideList = [
  {
    img: 'images/img1.jpg',
    text: `<a href='https://www.pexels.com/'>Photos on Pexels</a>`
  },
  {
    img: 'images/img2.jpg',
    text: `<a href='https://www.pexels.com/'>Photos on Pexels</a>`
  },
  {
    img: 'images/img3.jpg',
    text: `<a href='https://www.pexels.com/'>Photos on Pexels</a>`
  },
  {
    img: 'images/img4.jpg',
    text: `<a href='https://www.pexels.com/'>Photos on Pexels</a>`
  },
  {
    img: 'images/img5.jpg',
    text: `<a href='https://www.pexels.com/'>Photos on Pexels</a>`
  },
  {
    img: 'images/img6.jpg',
    text: `<a href='https://www.pexels.com/'>Photos on Pexels</a>`
  },
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const time = 5000;
let active = 0;


const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
  dots[activeDot].classList.remove('active');
  dots[active].classList.add('active');
};


const changeSlider = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }

  image.src = slideList[active].img;
  h1.innerHTML = slideList[active].text;
  changeDot();
}


setInterval(changeSlider, time);
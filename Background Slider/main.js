'use strict';

const body = document.body;
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');

let activeSlide = 0;

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove('active'));

  slides[activeSlide].classList.add('active');
}

btnLeft.addEventListener('click', () => {
  activeSlide < 0 ? (activeSlide = slides.length - 1) : activeSlide--;

  setBgToBody();
  setActiveSlide();
});

btnRight.addEventListener('click', () => {
  activeSlide > slides.length - 1 ? (activeSlide = 0) : activeSlide++;

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

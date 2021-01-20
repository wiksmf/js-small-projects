'use strict';

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;
const maxSlide = slides.length;

// Create the dots (number of dots = number of slides)
function createDots() {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`,
    );
  });
}

// Highlight the dot corresponding to the active slide
function activeDot(slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
}

// Move to the selected slide slide
function goToSlide(slide) {
  slides.forEach(
    (sl, i) => (sl.style.transform = `translateX(${100 * (i - slide)}%)`),
  );
}

// Move to the next slide
function nextSlide() {
  currentSlide === maxSlide - 1 ? (currentSlide = 0) : currentSlide++;

  goToSlide(currentSlide);
  activeDot(currentSlide);
}

// Move to the previous slide
function previousSlide() {
  currentSlide === 0 ? (currentSlide = maxSlide - 1) : currentSlide--;

  goToSlide(currentSlide);
  activeDot(currentSlide);
}

// Event handlers
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', previousSlide);

document.addEventListener('keydown', e => {
  e.key === 'ArrowLeft' && previousSlide();
  e.key === 'ArrowRight' && nextSlide();
});

dotsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activeDot(slide);
  }
});

// Initialize functions
function init() {
  goToSlide(0);
  createDots();

  activeDot(0);
}

init();

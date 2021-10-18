'use strict';

const remained = document.querySelector('#remained');
const liters = document.querySelector('#liters');
const percentage = document.querySelector('.percentage');
const smallCups = document.querySelectorAll('.cup-small');

smallCups.forEach((cup, i) => {
  cup.addEventListener('click', () => highlightCups(i));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling?.classList.contains('full')
  )
    idx--;

  smallCups.forEach((cup, i) => {
    i <= idx ? cup.classList.add('full') : cup.classList.remove('full');
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 33}rem`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}

updateBigCup();

'use strict';

const btnChangeBulb = document.querySelectorAll('button');
const bulb = document.querySelectorAll('div');


btnChangeBulb.forEach((btn) => {
  btn.addEventListener('click', () => {
    bulb.forEach((bulb) => {
      bulb.classList.toggle('hidden')
    });
  });
});
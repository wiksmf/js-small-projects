'use strict';

const btnBold = document.querySelector('.btn-bold');
const btnItalic = document.querySelector('.btn-italic');
const btnAlignLeft = document.querySelector('.btn-align-left');
const btnAlignCenter = document.querySelector('.btn-align-center');
const btnAlignRight = document.querySelector('.btn-align-right');
const btnClearText = document.querySelector('.btn-clear-text');
const text = document.querySelector('.editor');

btnBold.addEventListener('click', () => {
  text.classList.toggle('bold');
});

btnItalic.addEventListener('click', () => {
  text.classList.toggle('italic');
});

btnAlignLeft.addEventListener('click', () => {
  text.classList.remove('alignCenter', 'alignRight');
  text.classList.toggle('alignLeft');
});

btnAlignCenter.addEventListener('click', () => {
  text.classList.remove('alignLeft', 'alignRight');
  text.classList.toggle('alignCenter');
});

btnAlignRight.addEventListener('click', () => {
  text.classList.remove('alignLeft', 'alignCenter');
  text.classList.toggle('alignRight');
});

btnClearText.addEventListener('click', () => {
  text.classList = 'editor';
});

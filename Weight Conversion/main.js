'use strict';

const showKG = document.querySelector('.kg');
const showLB = document.querySelector('.lb');
const showOZ = document.querySelector('.oz');
const showST = document.querySelector('.st');

showKG.addEventListener('input', () => {
  showLB.value = (showKG.value * 2.2046).toFixed(1);
  showOZ.value = (showKG.value * 35.274).toFixed(1);
  showST.value = (showKG.value * 0.1574).toFixed(1);
});

showLB.addEventListener('input', () => {
  showKG.value = (showLB.value / 2.2046).toFixed(1);
  showOZ.value = (showLB.value * 16).toFixed(1);
  showST.value = (showLB.value * 0.071429).toFixed(1);
});

showOZ.addEventListener('input', () => {
  showKG.value = (showOZ.value / 35.274).toFixed(1);
  showLB.value = (showOZ.value * 0.0625).toFixed(1);
  showST.value = (showOZ.value * 0.0044643).toFixed(1);
});

showST.addEventListener('input', () => {
  showKG.value = (showST.value / 0.15747).toFixed(1);
  showLB.value = (showST.value * 14).toFixed(1);
  showOZ.value = (showST.value * 224).toFixed(1);
});

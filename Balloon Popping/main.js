'use strict';

const btnPlay = document.querySelector('.btn--play');
const canvas = document.querySelector('.balloon-container');
const ctx = canvas.getContext('2d');

const windowWidth = window.innerWidth - 600;
const windowHeight = window.innerHeight - 250;

canvas.width = windowWidth;
canvas.height = windowHeight;

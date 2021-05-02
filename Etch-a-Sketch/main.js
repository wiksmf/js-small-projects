'use strict';

const gridContainer = document.querySelector('.grid-container');
const gridSize = document.querySelector('.grid-size');
const btnClear = document.querySelector('.btn-clear');

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridContainer.appendChild(gridCell);
  }

  document.querySelectorAll('.grid-cell').forEach(cell => {
    cell.addEventListener('mouseover', changeColor);
  });
}

function changeGridSize() {
  gridContainer.innerHTML = '';
  gridContainer.style.setProperty(
    'grid-template-columns',
    `repeat(${gridSize.value}, 1fr)`,
  );
  gridContainer.style.setProperty(
    'grid-template-rows',
    `repeat(${gridSize.value}, 1fr)`,
  );

  createGrid(gridSize.value);
}

function clearGrid() {
  document.querySelectorAll('.grid-cell').forEach(cell => {
    cell.style.backgroundColor = '#fff';
  });
}

function changeColor(e) {
  e.target.style.backgroundColor = `
    #${Math.floor(Math.random() * 10000000).toString(16)}
  `;
}

function init() {
  gridSize.addEventListener('mouseup', changeGridSize);
  btnClear.addEventListener('click', clearGrid);
  createGrid(16);
}

init();

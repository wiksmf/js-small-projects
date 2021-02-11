'use strict';

const blockContainer = document.querySelector('.block-container');

const shapes = [
  'square',
  'rectangle-up',
  'rectangle-down',
  'circle',
  'semi-circle',
  'quartright-circle',
  'quartleft-circle',
  'triangle',
  'triangle-left',
  'triangle-right',
  'parallelogram-right',
  'parallelogram-left',
];

let currentIndex = 1;

// Create the blocks and append them to the container
for (var i = 0; i < shapes.length; i++) {
  for (var j = 0; j < 10; j++) {
    const block = document.createElement('div');
    block.classList.add('block', shapes[i]);
    blockContainer.append(block);
  }
}

// Select all the available blocks
document.querySelectorAll('.block').forEach(block => {
  block.addEventListener('mousedown', e => {
    const moveX = e.clientX - block.getBoundingClientRect().left;
    const moveY = e.clientY - block.getBoundingClientRect().top;

    // Assign a different z-index to each block when clicked
    block.style.zIndex = currentIndex * 2;
    currentIndex++;

    // Move the selected block
    document.addEventListener('mousemove', moveTo);

    // Drop the block at the current mouse position
    block.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', moveTo);
    });

    // Move the selected block
    function moveTo(e) {
      block.style.left = `${e.pageX - moveX}px`;
      block.style.top = `${e.pageY - moveY}px`;
    }
  });
});

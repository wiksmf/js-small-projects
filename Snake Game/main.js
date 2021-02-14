'use strict';

const displayScore = document.querySelector('.score');
const displayGameOver = document.querySelector('.game-over');
const playBtn = document.querySelector('.btn');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const directions = {
  ArrowLeft: 'left',
  ArrowUp: 'up',
  ArrowRight: 'right',
  ArrowDown: 'down',
};

let height = canvas.height = 400,
  width = canvas.width = 900,
  blockSize = 10,
  widthInBlocks = width / blockSize,
  heightInBlocks = height / blockSize,
  score = 0,
  intervalTimer = 100,
  intervalID,
  snake,
  apple;

// Draw a border around the canvas
function drawBorder() {
  ctx.fillStyle = '#0000ff';
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
}

// Draw a circle
function circle(x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  fillCircle ? ctx.fill() : ctx.stroke();
}

// Block class
class Block {
  // Block constructor
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  // Draw a square in a particular block on the grid
  drawSquare(color) {
    const x = this.col * blockSize;
    const y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
  }

  // Draw a circle in a particular block on the grid
  drawCircle(color) {
    const centerX = this.col * blockSize + blockSize / 2;
    const centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
  }

  // Check whether two blocks are in the same location
  equal(otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
  }
}

// Snake class
class Snake {
  // Snake constructor
  constructor() {
    this.segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];
    this.direction = 'right';
    this.nextDirection = 'right';
  }

  // Draw the snake looping through each of the blocks in its segments array
  draw() {
    this.segments.forEach((segment, i) => {
      if (i % 2 === 0) segment.drawSquare('#00ff00');
      else segment.drawSquare('#ff00d4');
    });
  }

  // Move the snake one block in its current direction and check whether
  // the head has collided with the rest of the snake or with the wall
  move() {
    const head = this.segments[0];
    let newHead;

    this.direction = this.nextDirection;

    if (this.direction === 'right') newHead = new Block(head.col + 1, head.row);
    else if (this.direction === 'down')
      newHead = new Block(head.col, head.row + 1);
    else if (this.direction === 'left')
      newHead = new Block(head.col - 1, head.row);
    else if (this.direction === 'up')
      newHead = new Block(head.col, head.row - 1);

    if (this.checkCollision(newHead)) {
      gameOver();
      return;
    }

    this.segments.unshift(newHead);

    if (newHead.equal(apple.position)) {
      score++;
      intervalTimer--;
      apple.move();
    } else {
      this.segments.pop();
    }
  }

  // Check for collisions with the wall and the snake itself
  checkCollision(head) {
    let selfCollision = false;
    const wallCollision =
      head.col === 0 ||
      head.row === 0 ||
      head.col === widthInBlocks - 1 ||
      head.row === heightInBlocks - 1;

    this.segments.forEach(segment => {
      if (head.equal(segment)) selfCollision = true;
    });

    return wallCollision || selfCollision;
  }

  // Set the snake's next direction based on the keyboard
  setDirection(newDirection) {
    if (this.direction === 'up' && newDirection === 'down') return;
    else if (this.direction === 'right' && newDirection === 'left') return;
    else if (this.direction === 'down' && newDirection === 'up') return;
    else if (this.direction === 'left' && newDirection === 'right') return;

    this.nextDirection = newDirection;
  }
}

// Apple class
class Apple {
  // Apple constructor
  constructor() {
    this.position = new Block(10, 10);
  }

  // Draw the apple
  draw() {
    this.position.drawCircle('#ff0000');
  }

  // Move the apple to a random new position within the game area
  move() {
    const randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    const randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
  }
}

// Start the game
function startGame() {
  // Create the snake and apple objects
  snake = new Snake();
  apple = new Apple();

  // Pass an animation function to setInterval
  intervalID = setInterval(() => {
    ctx.clearRect(0, 0, width, height);
    drawBorder();
    displayScore.textContent = score;
    snake.move();
    snake.draw();
    apple.draw();
  }, intervalTimer);
}

// Clear the interval and display Game Over text
function gameOver() {
  clearInterval(intervalID)
  displayGameOver.classList.remove('hidden');
}

// Restart game after game over
playBtn.addEventListener('click', () => {
  displayGameOver.classList.add('hidden');
  score = 0;
  startGame();
});

// Keydown handler for handling direction key presses
document.addEventListener('keydown', e => {
  const newDirection = directions[e.key];
  if (newDirection !== undefined) snake.setDirection(newDirection);
});

startGame();
'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = window.innerWidth - 100;
const height = window.innerHeight - 100;

canvas.width = width;
canvas.height = height;

let balls = [];

// Get random number between a range of two numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Ball constructor
class Ball {
  constructor(x, y, velocityX, velocityY, color, size) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;
    this.size = size;
  }

  // Ball draw method
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  // Ball update position method
  updatePosition() {
    if (this.x + this.size >= width || this.x - this.size <= 0)
      this.velocityX = -this.velocityX;

    if (this.y + this.size >= height || this.y - this.size <= 0)
      this.velocityY = -this.velocityY;

    this.x += this.velocityX;
    this.y += this.velocityY;
  }
}

// Draw the balls
function createBall() {
  const size = random(1, 50);

  return new Ball(
    random(0 + size, canvas.width - size),
    random(0 + size, canvas.height - size),
    random(-7, 7),
    random(-7, 7),
    `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`,
    size,
  );
}

// Add balls on click
window.addEventListener('click', function (e) {
  const ball = createBall();
  balls.push(ball);
});

// Loop through all the balls and draw each one on the screen
function loop() {
  ctx.fillStyle = 'rgba(255, 255, 255)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 30) {
    const ball = createBall();
    balls.push(ball);
  }

  balls.forEach(ball => {
    ball.draw();
    ball.updatePosition();
  });

  requestAnimationFrame(loop);
}

loop();

'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

let balls = [];

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Ball(x, y, velocityX, velocityY, color, size) {
  this.x = x;
  this.y = y;
  this.velocityX = velocityX;
  this.velocityY = velocityY;
  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

Ball.prototype.update = function () {
  if (this.x + this.size >= width || this.x - this.size <= 0) {
    this.velocityX = -this.velocityX;
  }
  if (this.y + this.size >= height || this.y - this.size <= 0) {
    this.velocityY = -this.velocityY;
  }

  this.x += this.velocityX;
  this.y += this.velocityY;
};

function createBall() {
  let size = random(25, 50);

  return new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`,
    size,
  );
}

function loop() {
  while (balls.length < 5) {
    let ball = createBall();
    balls.push(ball);
  }

  ctx.fillStyle = 'rgba(255, 255, 255)';
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  }

  requestAnimationFrame(loop);
}

loop();

window.addEventListener('click', function (e) {
  let ball = createBall();
  balls.push(ball);
});

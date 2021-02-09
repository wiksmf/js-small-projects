'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const windowHeight = window.innerHeight - 100;
const windowWidth = window.innerWidth - 100;

let bees = [];

canvas.width = windowWidth;
canvas.height = windowHeight;

// Bee constructor
class Bee {
  constructor(x, y, velocityX, velocityY) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  // Bee draw method
  drawBee() {
    circle(this.x, this.y, 16, 'yellow');
    circle(this.x, this.y, 16, 'white');
    circle(this.x - 10, this.y - 22, 10, 'white');
    circle(this.x + 10, this.y - 22, 10, 'black');
    circle(this.x - 4, this.y - 2, 4, 'black');
    circle(this.x + 4, this.y - 2, 4, 'black');
  }

  // Bee update position method
  updatePosition() {
    if (this.x >= windowWidth || this.x <= 0) this.velocityX = -this.velocityX;
    if (this.y >= windowHeight || this.y <= 0) this.velocityY = -this.velocityY;

    this.x += this.velocityX;
    this.y += this.velocityY;
  }
}

// Draw the circles
function circle(x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, Math.PI * 2, false);
  ctx.fill();
  ctx.fillStyle = color;
}

// Generate random number between a range of two numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Add bees to the canvas and animate them
while (bees.length <= 20) {
  let bee = new Bee(
    random(1, windowWidth),
    random(1, windowWidth),
    random(-4, 4),
    random(-4, 4),
  );

  bees.push(bee);
}

// Loop through all the bees and draw each one on the screen
function loop() {
  ctx.clearRect(0, 0, windowWidth, windowHeight);

  bees.forEach(bee => {
    bee.drawBee();
    bee.updatePosition();
  });

  requestAnimationFrame(loop);
}

loop();

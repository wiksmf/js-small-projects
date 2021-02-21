'use strict';

const btnPlay = document.querySelector('.btn--play');
const btnGameOver = document.querySelector('.btn--restart');
const displayScore = document.querySelector('.score-display');
const displayLives = document.querySelector('.lives-display');
const displayGameOver = document.querySelector('.game-over');
const canvas = document.querySelector('.balloon-container');
const ctx = canvas.getContext('2d');

const windowWidth = window.innerWidth - 600;
const windowHeight = window.innerHeight - 280;

canvas.width = windowWidth;
canvas.height = windowHeight;

let playGame, balloonArray, score, speed, lives;

// Balloon class
class Balloon {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  drawBalloon() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = '#ff00ff';
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  updateBalloonPosition() {
    this.y -= speed;
  }
}

// Start the game
function startGame() {
  btnPlay.classList.add('hidden');
  displayGameOver.classList.add('hidden');
  init();

  // Animate the game
  playGame = setInterval(() => {
    ctx.clearRect(0, 0, windowWidth, windowHeight);

    // Create the balloons and push them in the array
    while (balloonArray.length < 10) {
      const balloon = new Balloon(
        random(1, windowWidth),
        windowHeight + random(1, windowWidth),
        random(30, 50),
      );
      balloonArray.push(balloon);
    }

    // Draw and update the position of each balloon
    for (const [i, balloon] of Object.entries(balloonArray)) {
      balloon.drawBalloon();
      balloon.updateBalloonPosition();

      // Check if a balloon reaches the top
      if (balloon.y <= 0) {
        balloonArray.splice(i, 1);
        lives--;
        updateInfo();

        if (lives === 0) gameOver();
      }
    }
  }, 20);
}

// Event handlers
btnPlay.addEventListener('click', startGame);
btnGameOver.addEventListener('click', startGame);

canvas.addEventListener('click', e => {
  const mouseX = e.clientX - ctx.canvas.offsetLeft;
  const mouseY = e.clientY - ctx.canvas.offsetTop;

  // Check if a balloon has been clicked
  for (const [i, balloon] of Object.entries(balloonArray)) {
    const distance = getDifference(mouseX, mouseY, balloon);

    if (distance <= balloon.size) {
      balloonArray.splice(i, 1);
      speed += 0.01;
      displayScore.textContent = ++score;
    }
  }
});

// End the game over
function gameOver() {
  clearInterval(playGame);
  displayGameOver.classList.remove('hidden');
}

// Update lives information
function updateInfo() {
  displayLives.textContent = `❤️`.repeat(lives);
}

// Get distance between user's click and the target
function getDifference(mouseX, mouseY, balloon) {
  const diffX = mouseX - balloon.x;
  const diffY = mouseY - balloon.y;

  return Math.trunc(Math.sqrt(diffX ** 2 + diffY ** 2));
}

// Get random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Initialize variables
function init() {
  balloonArray = [];
  score = 0;
  speed = 1;
  lives = 5;
  updateInfo();
}

init();

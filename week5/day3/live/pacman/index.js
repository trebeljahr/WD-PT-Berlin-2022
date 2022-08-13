let angle;
let pacmanSound;

function preload() {
  soundFormats("wav");
  pacmanSound = loadSound("pacman_chomp.wav");
}

function setup() {
  stopGame();
  angle = 90;
}

function startGame() {
  console.log("Hello we ran");
  // pacmanSound.loop();
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  loop();
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

function restartGame() {
  loop();
  x = initialX;
  y = initialY;
  const gameOverScreen = document.getElementById("game-over");
  gameOverScreen.classList.toggle("hidden");
}
function stopGame() {
  noLoop();
}

function looseGame() {
  stopGame();
  const gameOverScreen = document.getElementById("game-over");
  gameOverScreen.classList.toggle("hidden");
}

const initialX = 100;
const initialY = 100;
let x = initialX;
let y = initialY;
const pacmanSpeed = 3;

let openAngle = 85;
let increment = -2;

function draw() {
  background(100);
  fill("yellow");
  openAngle += increment;
  if (openAngle > 85 || openAngle < 45) {
    increment = -increment;
  }

  arc(x, y, 80, 80, -openAngle + angle, 180 + openAngle + angle, PIE);

  if (angle === 90) {
    x += pacmanSpeed;
  }
  if (angle === 180) {
    y += pacmanSpeed;
  }
  if (angle === 270) {
    x -= pacmanSpeed;
  }
  if (angle === 360) {
    y -= pacmanSpeed;
  }
  // angle += 0.1;
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      angle = 360;
      break;
    case RIGHT_ARROW:
      angle = 90;
      break;
    case DOWN_ARROW:
      angle = 180;
      break;
    case LEFT_ARROW:
      angle = 270;
      break;
    case ESCAPE:
      if (isLooping()) {
        console.log("Hit escape!");
        looseGame();
      }
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", restartGame);

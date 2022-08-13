let player;
let food;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  player = new Player(width / 2, height / 2, 15);
  food = new Food();
  stopGame();
}

function startGame() {
  loop();
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

function restartGame() {
  loop();
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

function draw() {
  background("white");
  food.draw();
  player.move();
}

function keyPressed() {
  switch (keyCode) {
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

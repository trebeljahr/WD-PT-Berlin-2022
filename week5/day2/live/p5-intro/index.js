let bgImg;

function preload() {
  bgImg = loadImage("infinite-background.png");
}

function setup() {
  console.log("Hello");
  stopGame();
  noCanvas();

  // console.log(UP_ARROW);
  // console.log(RIGHT_ARROW);
  // console.log(DOWN_ARROW);
  // console.log(LEFT_ARROW);
}

function startGame() {
  createCanvas(window.innerWidth, window.innerHeight);
  loop();
}

function stopGame() {
  noLoop();
}

const W_KEY = 87;

let x = 0;
let y = 0;
const speed = 4;
let bgSpeed = 3;

let x1 = 0;
let x2 = window.innerWidth;

function draw() {
  image(bgImg, x1, 0, width, height);
  image(bgImg, x2, 0, width, height);

  //   console.log(x1, x2);
  x1 -= bgSpeed;
  x2 -= bgSpeed;

  if (x1 < -width) {
    x1 = width;
  }
  if (x2 < -width) {
    x2 = width;
  }

  //   background("rgba(10, 40, 200, 0.5)");
  //   background("red");
  //   background(100);
  //   background("rgb(10, 40, 200)");

  //   console.log("Hello from draw");
  // this draws a rect at x = 30, y = 20, width = 55 px height = 55 px
  stroke("blue");
  noStroke();

  if (keyIsDown(LEFT_ARROW)) {
    x -= speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += speed;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += speed;
  }

  fill("green");
  rect(x, y, 55, 55);

  //   fill("red");
  //   rect(width / 2 - 30 / 2, height / 2 - 30 / 2, 30, 30);

  fill("yellow");
  //   circle(mouseX, mouseY, 20);
  circle(width / 2 - 15, height / 2 - 15, 30);

  fill("red");
  triangle(30, 75, 58, 20, 86, 75);

  //   beginShape();
  //   vertex(30, 20);
  //   vertex(85, 20);
  //   vertex(85, 75);
  //   vertex(30, 75);
  //   endShape(CLOSE);

  //   beginShape(TESS);
  //   vertex(0 + mouseX, 0 + mouseY);
  //   vertex(80 + mouseX, 20 + mouseY);
  //   vertex(80 + mouseX, 40 + mouseY);
  //   vertex(40 + mouseX, 40 + mouseY);
  //   vertex(40 + mouseX, 60 + mouseY);
  //   vertex(80 + mouseX, 60 + mouseY);
  //   vertex(80 + mouseX, 80 + mouseY);
  //   vertex(20 + mouseX, 80 + mouseY);
  //   endShape(CLOSE);

  //   arc(mouseX, mouseY, 80, 80, 0, PI + QUARTER_PI, PIE);

  fill("cyan");
  stroke("black");
  textSize(30);
  textAlign(CENTER);
  text("Hello world", width / 2, height / 2);
}

const LEFT_CLICK = 0;
const RIGHT_CLICK = 2;
function mousePressed(event) {
  if (event.button === LEFT_CLICK) {
    console.log("Hey you clicked!");
    console.log("at ", mouseX, mouseY);
    bgSpeed++;
  }
  if (event.button === RIGHT_CLICK) {
    bgSpeed--;
  }

  //   console.log(event);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

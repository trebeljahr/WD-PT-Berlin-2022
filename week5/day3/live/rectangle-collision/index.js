let player;
let rectangle;

class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
  }

  collidesWith(rect2) {
    const collides =
      this.x < rect2.x + rect2.w &&
      this.x + this.w > rect2.x &&
      this.y < rect2.y + rect2.h &&
      this.h + this.y > rect2.y;

    console.log(collides);
    return collides;
  }
}

class Player extends Rectangle {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.speed = 1;
  }
  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
    // console.log(this.x, this.y);
    this.draw();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // rectMode(CENTER);
  rectangle = new Rectangle(width / 2 - 100 / 2, height / 2 - 50 / 2, 100, 50);
  player = new Player(30, 30, 30, 30);
}

function draw() {
  background(255);
  if (rectangle.collidesWith(player)) {
    fill("red");
  } else {
    fill("white");
  }
  rectangle.draw();
  player.move();
}

function randomColor() {
  const r = Math.floor(random(255));
  const g = Math.floor(random(255));
  const b = Math.floor(random(255));
  return `rgb(${r},${g},${b})`;
}

class Dot {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.color = randomColor();
  }

  //   this.pos.x this.pos.y

  get x() {
    return this.pos.x;
  }

  get y() {
    return this.pos.y;
  }

  draw() {
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }

  collidesWith(dot) {
    const distance = dot.pos.copy().sub(this.pos).mag();
    const sumOfRadii = this.r / 2 + dot.r;

    const isColliding = distance < sumOfRadii;
    return isColliding;
  }
}

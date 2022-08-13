class Player extends Dot {
  constructor(x, y, r) {
    super(x, y, r);
    this.v = createVector(0, 0);
    this.speed = 2;
  }

  move() {
    const vectorToMouse = createVector(mouseX, mouseY).sub(this.pos);
    if (vectorToMouse.mag() < this.speed) {
      this.v = createVector(0, 0);
    } else {
      this.v = vectorToMouse.normalize().mult(this.speed);
    }

    this.pos = this.pos.add(this.v);
    this.draw();
  }
}

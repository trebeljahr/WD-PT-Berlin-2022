class Food {
  constructor() {
    this.particles = [];
    // this.spawn(0);
    this.spawnInterval = setInterval(() => {
      //   console.log(this);
      this.spawn(1);
    }, 1000);
  }

  stopSpawning() {
    clearInterval(this.spawnInterval);
  }

  spawn(amount) {
    for (let i = 0; i < amount; i++) {
      this.particles.push(
        new Dot(random(0, width), random(0, height), random(5, 10))
      );
    }
  }

  draw() {
    this.particles = this.particles.filter((particle) => {
      const isColliding = particle.collidesWith(player);

      if (isColliding) player.r += 2;
      return !isColliding;
    });

    this.particles.forEach((particle) => particle.draw());
  }
}

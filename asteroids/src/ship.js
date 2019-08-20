import MovingObject from "./moving_object";
import Bullet from "./bullet.js";

const RADIUS = 10;
const COLOR = "pink";

export default class Ship extends MovingObject {
  constructor(options, game) {
    // options.pos = [50, 50];
    options.radius = RADIUS;
    options.color = COLOR;
    options.vel = [0, 0];
    super(options, game);
  }

  relocate() {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  }

  power(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  bindKeyHandlers() {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 87:
          this.power([0, -5]);
          break;
        case 65:
          this.power([-5, 0]);
          break;
        case 83:
          this.power([0, 5]);
          break;
        case 68:
          this.power([5, 0]);
          break;
        case 32:
          this.fireBullet();
          break;
      }
    });
  }

  fireBullet() {
    let bull = new Bullet({pos: this.pos, vel: this.vel}, this.game);
    this.game.bullets.push(bull);
  }
}


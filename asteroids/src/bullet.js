import MovingObject from "./moving_object";

export default class Bullet extends MovingObject {
  constructor(options, game) {
    super(options, game);
    this.radius = Bullet.RADIUS;
    this.color = Bullet.COLOR;
  }
}

Bullet.RADIUS = 5;
Bullet.COLOR = "black";
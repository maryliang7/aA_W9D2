import MovingObject from "./moving_object.js";
const Util = require("./utils.js");

export default class Asteroid extends MovingObject {

  constructor(options, game){
    super(options, game);
    this.color = Asteroid.COLOR;
    this.radius = Asteroid.RADIUS;
    this.vel = Util.randomVec(3);
  }

  collideWith(otherObject) {
    if (otherObject instanceof Ship) {
      otherObject.relocate();
    }
  }
}

Asteroid.COLOR = "#777";
Asteroid.RADIUS = 30;
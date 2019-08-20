const Utils = require("./utils.js");

export default class MovingObject {
  constructor(option, game) {
    this.pos = option.pos;
    this.vel = option.vel;
    this.radius = option.radius;
    this.color = option.color;
    this.game = game;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  move() {
    this.pos[0] += this.vel[0]; 
    this.pos[1] += this.vel[1];
    this.game.wrap(this.pos);
  }

  isCollidedWith(otherObject) {
    let distance = Utils.distance(this.pos, otherObject.pos);
    return (distance <= (this.radius + otherObject.radius));
  }

  collideWith(otherObject) {
    
  }


}
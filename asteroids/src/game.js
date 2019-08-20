import Asteroid from "./asteroid.js";
import Ship from "./ship.js";
import Bullet from "./bullet.js";

export default class Game {
  constructor() {
    this.asteroids = this.addAsteroids();
    this.ship = new Ship({ pos: this.randomPosition() }, this);
    this.bullets = [];
  }

  addAsteroids() {
    let asteroids = [];
    for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {
      asteroids.push(new Asteroid({ pos: this.randomPosition() }, this));
    }
    return asteroids;
  }
  
  randomPosition() {
    const pos = [Math.floor(Math.random() * Game.DIM_X), Math.floor(Math.random() * Game.DIM_Y)];
    return pos;
  }

  draw(ctx) {
    ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(el => {
      el.draw(ctx);
    });
  }

  moveObjects() {
    this.allObjects().forEach(el => {
      el.move();
    });
  }

  wrap(pos) {
    if (pos[0] >= Game.DIM_X) {
      pos[0] = 0;
    } else if (pos[0] <= 0) {
      pos[0] = Game.DIM_X;
    } 
    if (pos[1] >= Game.DIM_Y) {
      pos[1] = 0;
    } else if (pos[1] <= 0) {
      pos[1] = Game.DIM_Y;
    } 
  }

  checkCollisions() {
    for(let i = 0; i < this.allObjects().length -1; i ++) {
      for(let j = i + 1; j < this.allObjects().length; j++) {
        if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
          this.allObjects()[i].collideWith(this.allObjects()[j]);
        }
      }
    }
  }

  step(ctx) {
    this.moveObjects();
    this.draw(ctx);
    this.checkCollisions();
  }

  remove(asteroid) {
    let idx = this.asteroids.indexOf(asteroid);
    this.asteroids = this.asteroids.slice(0,idx).concat(this.asteroids.slice(idx+1));
  }

  removeBull(bullet) {
    if (bullet.pos[0] >= Game.DIM_X || (bullet.pos[0] <= 0) || (bullet.pos[1] >= Game.DIM_Y) || (bullet.pos[1] <= 0)) {
      let idx = this.bullets.indexOf(bullet);
      this.bullets = this.bullets.slice(0, idx).concat(this.bullets.slice(idx + 1));
    }
  }

  allObjects() {
    return this.asteroids.concat([this.ship]).concat(this.bullets);
    
  }
}
Game.DIM_X = 1000;
Game.DIM_Y = 700;
Game.NUM_ASTEROIDS = 25;
import Game from "./game.js";

export default class GameView {
  constructor(ctx) {
    this.game = new Game();
    this.ctx = ctx;
  }

  start() {
    this.game.ship.bindKeyHandlers();
    setInterval(() => {
      this.game.step(this.ctx);
    }, 20);
  }
}
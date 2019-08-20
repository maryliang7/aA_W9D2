import GameView from "./game_view.js";
import Ship from "./ship.js";

document.addEventListener('DOMContentLoaded', (event) => {
  let canvas = document.getElementById("game-screen");
  let ctx = canvas.getContext("2d");
  let gv = new GameView(ctx);
  gv.start();
  window.ctx = ctx;
  window.gv = gv;
  window.Ship = Ship;
});
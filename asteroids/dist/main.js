/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Asteroid; });\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nclass Asteroid extends _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(options, game){\n    super(options, game);\n    this.color = Asteroid.COLOR;\n    this.radius = Asteroid.RADIUS;\n    this.vel = Util.randomVec(3);\n  }\n\n  collideWith(otherObject) {\n    if (otherObject instanceof Ship) {\n      otherObject.relocate();\n    }\n  }\n}\n\nAsteroid.COLOR = \"#777\";\nAsteroid.RADIUS = 30;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bullet; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nclass Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options, game) {\n    super(options, game);\n    this.radius = Bullet.RADIUS;\n    this.color = Bullet.COLOR;\n  }\n}\n\nBullet.RADIUS = 5;\nBullet.COLOR = \"black\";\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _bullet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\n\n\n\nclass Game {\n  constructor() {\n    this.asteroids = this.addAsteroids();\n    this.ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: this.randomPosition() }, this);\n    this.bullets = [];\n  }\n\n  addAsteroids() {\n    let asteroids = [];\n    for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n      asteroids.push(new _asteroid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ pos: this.randomPosition() }, this));\n    }\n    return asteroids;\n  }\n  \n  randomPosition() {\n    const pos = [Math.floor(Math.random() * Game.DIM_X), Math.floor(Math.random() * Game.DIM_Y)];\n    return pos;\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);\n    this.allObjects().forEach(el => {\n      el.draw(ctx);\n    });\n  }\n\n  moveObjects() {\n    this.allObjects().forEach(el => {\n      el.move();\n    });\n  }\n\n  wrap(pos) {\n    if (pos[0] >= Game.DIM_X) {\n      pos[0] = 0;\n    } else if (pos[0] <= 0) {\n      pos[0] = Game.DIM_X;\n    } \n    if (pos[1] >= Game.DIM_Y) {\n      pos[1] = 0;\n    } else if (pos[1] <= 0) {\n      pos[1] = Game.DIM_Y;\n    } \n  }\n\n  checkCollisions() {\n    for(let i = 0; i < this.allObjects().length -1; i ++) {\n      for(let j = i + 1; j < this.allObjects().length; j++) {\n        if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {\n          this.allObjects()[i].collideWith(this.allObjects()[j]);\n        }\n      }\n    }\n  }\n\n  step(ctx) {\n    this.moveObjects();\n    this.draw(ctx);\n    this.checkCollisions();\n  }\n\n  remove(asteroid) {\n    let idx = this.asteroids.indexOf(asteroid);\n    this.asteroids = this.asteroids.slice(0,idx).concat(this.asteroids.slice(idx+1));\n  }\n\n  removeBull(bullet) {\n    if (bullet.pos[0] >= Game.DIM_X || (bullet.pos[0] <= 0) || (bullet.pos[1] >= Game.DIM_Y) || (bullet.pos[1] <= 0)) {\n      let idx = this.bullets.indexOf(bullet);\n      this.bullets = this.bullets.slice(0, idx).concat(this.bullets.slice(idx + 1));\n    }\n  }\n\n  allObjects() {\n    return this.asteroids.concat([this.ship]).concat(this.bullets);\n    \n  }\n}\nGame.DIM_X = 1000;\nGame.DIM_Y = 700;\nGame.NUM_ASTEROIDS = 25;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\nclass GameView {\n  constructor(ctx) {\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ctx = ctx;\n  }\n\n  start() {\n    this.game.ship.bindKeyHandlers();\n    setInterval(() => {\n      this.game.step(this.ctx);\n    }, 20);\n  }\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', (event) => {\n  let canvas = document.getElementById(\"game-screen\");\n  let ctx = canvas.getContext(\"2d\");\n  let gv = new _game_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  gv.start();\n  window.ctx = ctx;\n  window.gv = gv;\n  window.Ship = _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovingObject; });\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nclass MovingObject {\n  constructor(option, game) {\n    this.pos = option.pos;\n    this.vel = option.vel;\n    this.radius = option.radius;\n    this.color = option.color;\n    this.game = game;\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fill();\n  }\n\n  move() {\n    this.pos[0] += this.vel[0]; \n    this.pos[1] += this.vel[1];\n    this.game.wrap(this.pos);\n  }\n\n  isCollidedWith(otherObject) {\n    let distance = Utils.distance(this.pos, otherObject.pos);\n    return (distance <= (this.radius + otherObject.radius));\n  }\n\n  collideWith(otherObject) {\n    \n  }\n\n\n}\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ship; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _bullet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\n\n\nconst RADIUS = 10;\nconst COLOR = \"pink\";\n\nclass Ship extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options, game) {\n    // options.pos = [50, 50];\n    options.radius = RADIUS;\n    options.color = COLOR;\n    options.vel = [0, 0];\n    super(options, game);\n  }\n\n  relocate() {\n    this.pos = this.game.randomPosition();\n    this.vel = [0,0];\n  }\n\n  power(impulse) {\n    this.vel[0] += impulse[0];\n    this.vel[1] += impulse[1];\n  }\n\n  bindKeyHandlers() {\n    document.addEventListener(\"keydown\", (event) => {\n      switch (event.keyCode) {\n        case 87:\n          this.power([0, -5]);\n          break;\n        case 65:\n          this.power([-5, 0]);\n          break;\n        case 83:\n          this.power([0, 5]);\n          break;\n        case 68:\n          this.power([5, 0]);\n          break;\n        case 32:\n          this.fireBullet();\n          break;\n      }\n    });\n  }\n\n  fireBullet() {\n    let bull = new _bullet_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({pos: this.pos, vel: this.vel}, this.game);\n    this.game.bullets.push(bull);\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits: function inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  distance(pos1, pos2) {\n    return Math.sqrt(Math.pow((pos1[0] - pos2[0]), 2) + Math.pow((pos1[1] - pos2[1]), 2));\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
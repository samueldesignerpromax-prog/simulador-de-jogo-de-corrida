const Player = require("./player");
const { startRace } = require("./race");

const player1 = new Player("Mario");
const player2 = new Player("Luigi");

startRace([player1, player2]);

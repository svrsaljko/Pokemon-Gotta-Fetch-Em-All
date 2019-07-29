//const Pokemon = require("./pokemon");

const UNIT = 1000;
const SECONDS = 60;
const MINUTES = 60;
const HOURS = 24;
//const TIME = 2 * UNIT * SECONDS * MINUTES * HOURS;
//const TIME = (SECONDS * UNIT) / 12;
const TIME = 3000;

class PokeTimer {
  constructor(TIME) {
    //this.pokemon = null;
    this.expiration = this.calculateExpiration(TIME);
    this.SECOND = UNIT;
  }

  calculateExpiration(TIME) {
    return new Date(Date.now() + TIME + 500);
  }
}

// console.log("trenutni datum", new Date(Date.now() + TIME));

// console.log(
//   "broj s-a",
//   (new Date(Date.now() + TIME) - new Date(Date.now())) / UNIT
// );

module.exports = PokeTimer;
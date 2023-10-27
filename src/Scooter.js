const User = require("./User");

class Scooter {
  constructor(station) {
    this.station = station || null;
    this.user = User;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }
  // scooter code here
  static nextSerial = 1;
  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      this.station = null;
      this.user = user;
    } else {
      throw new Error("scooter needs to charge or scooter needs repair");
    }
  }
  dock(station) {
    if (this.user !== null) {
      this.user = null;
    }
    this.station = station;
  }
}

module.exports = Scooter;

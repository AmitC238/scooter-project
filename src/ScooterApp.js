const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  constructor() {
    this.stations = {
      StationA: ["Bond Street"],
      StationB: ["Liverpool Street"],
      StationC: ["Paddington"],
    };

    this.registeredUsers = {};
    // ScooterApp code here
  }
  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("User is already registered");
    }

    if (age >= 18) {
      const user = new User(username, password, age);
      this.registeredUsers[username] = user;
      console.log(`User ${username} has been registered.`);
      return user;
    } else {
      throw new Error("User is too young to register");
    }
  }
}

module.exports = ScooterApp;

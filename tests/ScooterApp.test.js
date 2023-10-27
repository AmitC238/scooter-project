const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

const scooterApp = new ScooterApp("Bond Street", ["Joe Bloggs", "test123", 21]);
// ScooterApp tests here
describe("ScooterApp test", () => {
  test("Should check if a string is a valid station", () => {
    const scooterApp = new ScooterApp();
    const validStationA = "StationA";
    const validStationB = "StationB";
    const validStationC = "StationC";
    const invalidStation = "StationX";

    // Check if validStation is a valid station
    expect(scooterApp.stations[validStationA]).toBeDefined();
    expect(scooterApp.stations[validStationB]).toBeDefined();
    expect(scooterApp.stations[validStationC]).toBeDefined();
    // Check if invalidStation is not a valid station
    expect(scooterApp.stations[invalidStation]).toBeUndefined();
  });
});
// register user
describe("registerUser method tests", () => {
  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
});

// log in

// log out

// rent scooter

// dock scooter

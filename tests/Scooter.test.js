const Scooter = require("../src/Scooter");
const User = require("../src/User");

const scooter = new Scooter("Hounslow", User, 5932, 80, false);

//typeof scooter === object
describe("scooter object", () => {
  test("Scooter class should create Scooter instance", () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
  // testing station
  it("station should be a string", () => {
    expect(typeof scooter.station).toBe("string");
  });
  it("station should be null", () => {
    const scooter = new Scooter(
      null,
      User,
      5932,
      Scooter.nextSerial++,
      80,
      false
    );
    expect(scooter.station).toBe(null);
  });
  // testing user
  it("user should connect with user class", () => {
    expect(scooter.user).toBe(User);
  });
  // testing serial
  it("serial should return number", () => {
    expect(typeof scooter.serial).toBe("number");
  });
  // testing next serial
  it("next serial should increment", () => {
    expect(Scooter.nextSerial).toBe(Scooter.nextSerial++);
  });
  // testing charge
  it("charge should be between 0 and 100", () => {
    expect(scooter.charge).toBeGreaterThanOrEqual(0);
    expect(scooter.charge).toBeLessThanOrEqual(100);
  });
  // testing isBroken
  it("isBroken should be true or false", () => {
    expect(typeof scooter.isBroken).toBe("boolean");
  });
});

//Method tests
describe("scooter methods", () => {
  //rent method
  it("rent method should remove from station if conditions are met", () => {
    scooter.charge = 50;
    scooter.isBroken = false;
    const user = new User("Joe Bloggs", "test123", 21);

    scooter.rent(user);

    expect(scooter.station).toBe(null);
    expect(scooter.user).toBe(user);
  });
  it("rent should throw error", () => {
    scooter.charge = 10;
    scooter.isBroken = true;
    const user = new User("Joe Bloggs", "test123", 21);

    expect(() => {
      scooter.rent(user);
    }).toThrow("scooter needs to charge or scooter needs repair");
  });
  //dock method
  it("returns the scooter to the dock", () => {
    const user = new User("Joe Bloggs", "test123", 21, false);
    scooter.dock(this.station);
    expect(scooter.station).toBe(this.station);
  });
  // it("stops charging the user", () => {
  //   const user = new User("Joe Bloggs", "test123", 21, false);
  //   scooter.dock();
  //   expect().toBe();
  // });

  //requestRepair method
  //charge method
});

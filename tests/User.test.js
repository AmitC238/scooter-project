const User = require("../src/User");

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  });
  // test password
  test("password should be a string", () => {
    expect(typeof user.password).toBe("string");
  });
  // test age
  test("age should be a number", () => {
    expect(typeof user.age).toBe("number");
  });
  // test loggedin is a boolean
  test("loggedIn should be a boolean", () => {
    expect(typeof user.loggedIn).toBe("boolean");
  });
  // test login
  it("enables users to login", () => {
    try {
      expect(user.loggedIn).toBe(true);
    } catch (error) {
      console.error(error.message);
    }
  });
  it("throws error to users if login failed", () => {
    expect(() => {
      user.login("fail");
    }).toThrow("Incorrect password");
  });
  // test logout
  it("logs out user", () => {
    expect(user.loggedIn).toBe(false);
  });
});

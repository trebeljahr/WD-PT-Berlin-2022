const Chuck = require("../src/Chuck");

describe("Chuck", () => {
  let chuck;
  const joke = "Chuck Norris can divide by zero";

  // add mocking code
  const mockMath = Object.create(global.Math);
  mockMath.random = () => {
    return 0.5;
  };

  // now assign our MockMath as Math -> i.e. global.Math
  global.Math = mockMath;
  // now global.Math should always return 0.5!

  // instantiate the Chuck class
  beforeEach(() => {
    chuck = new Chuck();
  });
  describe("can add a joke", () => {
    it("should add a joke", () => {
      chuck.addJoke(joke);
      expect(chuck.jokes).toContain(joke);
    });
  });
  describe("can get a random joke ", () => {
    it("(Math random) should return 0.5", () => {
      expect(Math.random()).toEqual(0.5);
    });
    it("should return a random joke", () => {
      expect(chuck.getRandomJoke()).toEqual(
        "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis"
      );
    });
  });
});

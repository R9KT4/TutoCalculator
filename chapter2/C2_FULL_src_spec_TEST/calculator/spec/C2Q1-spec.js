var calculator = require("../src/C2Q1.js");

describe("add", function () {
  it("should multiply 2 and 3", function () {
    var product = calculator.add(2, 3);
    expect(product).toBe(5);
  });
    
     it("should add 3 and 5", function () {
    var product = calculator.add(3, 5);
    expect(product).toBe(8);
  });
});    
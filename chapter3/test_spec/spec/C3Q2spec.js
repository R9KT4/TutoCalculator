var calculator = require("../src/C3Q2.js");

describe("precedence", function ()
{
  it("check precedence", function () 
  {

    solution = calculator.StudentSolution()
    
    var product = solution["^"];
    
    expect(product).toBe(4);
  });
});    


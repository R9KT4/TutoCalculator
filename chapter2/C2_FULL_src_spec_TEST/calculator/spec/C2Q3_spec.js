var calculator = require("../src/C2Q3.js");

describe("Chapter3  Contact", function(){
   it("Should be create a function that defines an object called Contact", function(){
       expect(typeof calculator.Contact).toBe('function');
   }) ;
     var test = new calculator.Contact('Cecilie', 'Boxer', 93072668);
    it("Should contain properties name, profession, and number", function(){
        expect(test.name).toBe('Cecilie');
        expect(test.profession).toBe('Boxer');
        expect(test.number).toBe(93072668);
    });
    
    it("Should contain a function 'changeNumber' that changes the number to the given number", function()
     {
        test.changeNumber(93072669);
       expect(test.number).toBe(93072669); 
    });
});
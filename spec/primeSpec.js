 const myApp = require("../app/app.js");

describe("A suite is just a function", function() {
		  it("to expect return prime numbers in 10", function() {
		  	let list = [ 2, 3, 5, 7];
		  	expect(myApp.getPrimes(10)).toBe(list.toString());
		   // expect(myApp.getPrimes(10) == [2,3,5,7]);
		  })
});


 const myApp = require("../app/app.js");

describe("A test case ", function() {
		  it("to expect return prime numbers in 10", function() {
		  	let list = [ 2, 3, 5, 7];
		  	expect(myApp.getPrimes(10)).toBe(list.toString());
		  })
		   it("to expect return prime numbers in 10", function() {
		  	expect(myApp.getPrimes(1)).toBe('');
		  })
		   it("to expect return prime numbers in 10", function() {
		  	expect(myApp.getPrimes(0)).toBe('');
		  })
		   it("to expect return prime numbers in 10", function() {
		  	expect(myApp.getPrimes('hhgjg')).toBe('not valid');
		  })
		   else if(Array.isArray(n) === true ){
		    return "array is not required";
		  }
});


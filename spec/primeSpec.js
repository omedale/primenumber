 const myApp = require("../app/app.js");

describe("A test case ", function() {
		  it("to expect return [ 2, 3, 5, 7] for 10", function() {
		  	let list = [ 2, 3, 5, 7];
		  	expect(myApp.getPrimes(10)).toBe(list.toString());
		  })
		   it("to expect return 'one is not prime' for 1 ", function() {
		  	expect(myApp.getPrimes(1)).toBe('one is not prime');
		  })
		   it("to expect return 'equal to zero' for 0 ", function() {
		  	expect(myApp.getPrimes(0)).toBe('equal to zero');
		  })
		   it("to expect return 'not valid' for hhgjg ", function() {
		  	expect(myApp.getPrimes('hhgjg')).toBe('not valid');
		  })
		    it("to expect return 'array is not required' for []", function() {
		  	expect(myApp.getPrimes([])).toBe('array is not required');
		  })
		    it("to expect return 'is it true 'for true", function() {
		  	expect(myApp.getPrimes(true)).toBe('is it true');
		  })
		    it("to expect return 'is it false 'for false", function() {
		  	expect(myApp.getPrimes(false)).toBe('is it false');
		  })
		    it("to expect return 'less than zero' for -08", function() {
		  	expect(myApp.getPrimes(-08)).toBe('less than zero');
		  })
		    it("to expect return 'graeter than 100' for  101", function() {
		  	expect(myApp.getPrimes(101)).toBe('greater than 100');
		  })

		    it("to expect return 'Output is null' for  null", function() {
		  	expect(myApp.getPrimes(null)).toBe('Output is null');
		  })
});


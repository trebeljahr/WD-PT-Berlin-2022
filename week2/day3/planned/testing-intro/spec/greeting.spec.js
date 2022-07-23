// this imports the greeting
const greeting = require('../src/greeting')

// test suite
describe('The function greeting', function () {
	// spec - specification
	it('should be a function', function () {
		// expectation using a matcher 
		expect(typeof greeting).toBe('function')
	});
	it('should greet all ironhackers', function () {
		expect(greeting()).toEqual('hello ironhackers!')
	});
})
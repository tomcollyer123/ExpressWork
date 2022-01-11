// Mocha tests are designated with the following:
// describe() - test suite, groups of tests together
// it() - an individual test

// describe('message of what the group is', what you're testing())
describe('my first group of tests', function() {


    // it('message of the test', what you're testing)
    it('should print the word hello', function() {
        console.log("hello")
    });

    it('should print the sum of 3 plus 4', function(func = 3+4) {
       console.log(func)
    })
});

// To run mocha tests: mocha <name of test folder> e.g mocha mocha-tests 
// Need to be in the 001-mocha folder for tests to run
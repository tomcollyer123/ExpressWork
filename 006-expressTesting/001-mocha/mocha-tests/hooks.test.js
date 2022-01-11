// Hooks are used to organise and configure your test environment
// Organise certain tests to run first
// Set up test - to set up environment
// Teardown tests - close environment

describe('hooks', function() {
    // set up test
    Before(function() {
        console.log("Run once before first test in this describe")
    });

    it('will print hello', function() {
        console.log("hello")
    });

});

    // Teardown test
    after(function() {
        console.log("Runs after the tests");
    })

    beforeEach(function() {
        console.log("Runs before each test");
    })

    afterEach(function() {
        console.log("Runs after each test");
    })

    // Two other configs we can use
    // .only - only this tests from this suite will run
    // .skip - skips this test - useful for having a large test suite and you know one test doesn't work

    it.only('only this test will run', function() {
        console.log("only run this test");
    });

    it.skip('this test will skip', function() {
        console.log("skip this test");
    });



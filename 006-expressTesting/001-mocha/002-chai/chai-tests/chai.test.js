// Import in chai
const {expect, assert} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

// Using chai, use the chaiHttp module (rather than a different framework)
chai.use(chaiHttp);

// When testing, we should follow a framework
// Arrange
// Act
// Assert

// Test should return sum of 1 + 1
describe('basic testing process', function() {
it('should return 2 when 1 + 1', function() {

    // Arrange - declaring my variables
    let num1 = 1;
    let num2 = 1
    let sum;

    // Act - What am i testsing
    sum = num1 + num2;

    // Assert - uses expect from chai
    expect(sum).to.equal(2);

    });

// Test should return red
it('the string should be "red"', function() {

    // Arrange
    let testString;

    // Act
    testString = "Red";

    // Assert
    expect(testString).to.equal("Red");
});


// Test should return sum of 4 x 5 (20)
it('the string should return 20 when 4 and 5 are multiplied', function() {

     // Arrange - declaring my variables
     let num1 = 4;
     let num2 = 5;
     let sum;
 
     // Act - What am i testsing
     sum = num1 * num2;
 
     // Assert - uses expect from chai
     expect(sum).to.equal(20);
 
     });

     // Test should return "hello Tom"
it('the string should be "hello Tom"', function() {

    // Arrange
    let testString;

    // Act
    testString = "hello Tom";

    // Assert
    expect(testString).to.equal("hello Tom");
});

// Test should return sum of 4 x 5 (20)
it('the string should return 20 when 4 and 5 are multiplied', function() {

    // Arrange - declaring my variables
    let num1 = 1;
    let num2 = 2;
    let num3 = 3;
    let num4 = 4;
    let sum;

    // Act - What am i testsing
    sum = num1 + num2 + num3 + num4;

    // Assert - uses expect from chai
    expect(sum).to.equal(10);

    });

// Test should make sure hello is a string
it('the word "hello" should be a string', function() {

    // Arrange
    let testString;

    // Act
    testString = "hello";

    // Assert
    expect(testString).to.be.a('string');
});

// Test should make sure 12 is not undefined
it('the string should make sure 12 is not undefined', function() {

    // Arrange - declaring my variables
    let testNum;
   

    // Act - What am i testsing
    testNum = 12;

    // Assert - uses expect from chai
    expect(testNum).not.undefined;

    });

    // Object should have a property of name
it('the object should have a property of name ', function() {

    // Arrange - declaring my variables
    let testObj = {
        name : "Tom"
    };

    // Act - What am i testsing
    testObj.name = "value"

    // Assert - uses expect from chai
   expect(testObj).to.contain.keys('name');
    expect(testObj.name).to.be.equal('value') // this tests that name is equal to Tom
    });

    // String should include reece
    it('a string should contain "reece"', function() {

        // Arrange

        let testReece = "hello reece"

        // Assert
        expect(testReece).to.contain("reece");
    })

// An array should contain apple
    it('a string should contain "apple"', function() {

        // Arrange

        let fruitArray = ["apple", "banana", "kiwi"];

        // Assert
        expect(fruitArray).to.include("apple");
    })

    // make sure 5 is odd
    it('should check if 5 is odd', function() {

        // Arrange
        let num = 5;
        let odd;

        // Act
        if(num % 2 == 0) {
            odd = false;
        } else {
            odd = true;
        };

        // Assert
        expect(odd).to.be.equal(true);
    })

});
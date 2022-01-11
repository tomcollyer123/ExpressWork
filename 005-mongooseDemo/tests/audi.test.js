const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

const {Audi} = require('../persistence/models/audi')
chai.use(chaiHttp);

const server = require('../server')

// Before function that will add atleast one document
// So we can delete/ get without needing to add anything

before(function(done) {
    console.log("Setup of environment");
    const testAudi = new Audi ({
        model: "testCar",
        colour: "carColour",
        price: 50000

    });
    testAudi.save().then((result) => {
        // This next line saves the _id of the item created so that other tests can delete it
        testID = result._id.toString();
        done();
    });
});

// Adding an after function that will clear all data
after(function(done) {
    Audi.deleteMany({}).then(() => {
        console.log("everything deleted")
        done();
    });
});

// pass in the word done into function to let chai know when the async code is done
describe('route testing', function() {

    // Object that can used throughout all testing
    const testAudi = {
        model: "testCar",
        colour: "carColour",
        price: 70000
    };

    it('should respond with "test path successful', function(done) {


        // Arrange
        // Telling chai to use index.js
        chai.request(server)

        // Act
        // use server to make a get request with '/test'
        .get('/audi/test')

        // end is used for async, saying when you have ended (eg. got some data) either error or give a response.
        .end((err, res) => {
            
            if (err) {
                console.log("Error occured");
                done(err);
            };

            // Assert
            // whatever get request returns, we test here
            expect(res).to.have.status(201);
            expect(res).to.not.be.null;
            expect(res).to.have.property('text', "Test path succesful!")
            done();

        });   
    });

    // POST test
    it('should post data to the database and return <model> added to db', function(done) {
        // Arrange
        chai.request(server)

        // Act
        .post('/audi/post')

        // Sending data as a body, you use .send(data)
        .send(testAudi) // testAudi is the object from above

        .end((err, res) => {
            
            if (err) {
                console.log("Error occured");
                done(err);
            };

            // Assert
            expect(res).to.have.status(201);
            expect(res).to.not.be.null;
            expect(res).to.have.property('text', `${testAudi.model} added to the database`)
            done();

        });
    });

// GET ALL test
    it('should return all audis in the database', function(done) {

        // Arrange
        chai.request(server)

        // Act
        .get('/audi/getAll')
       
        .end((err, res) => {
            
            if (err) {
                console.log("Error occured");
                done(err);
            };


        // Assert
        const resBody = res.body;
            expect(res).to.have.status(202);
            expect(resBody).to.not.be.null;

            // .map - Loops through an array and runs a command
            resBody.map((audi) => {
                expect(audi).to.be.a("Object");
                expect(audi).to.contain.keys("model");
            });
            done();
        });
    });

       // DELETE test
       it('should delete a car by ID', function(done) {
        // Arrange
        chai.request(server)

        // Act
        .delete('/audi/deleteById/:id')
        .end((err, res) => {
            
            if (err) {
                console.log("Error occured");
                done(err);
            };

            // Assert
            expect(res).to.have.status(202);
            expect(res).to.not.be.null;
            expect(res).to.have.property('text', "car removed")
            done();
        });
        
    });

});

const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chaiHttp');

const {Audi} = require('./')
chai.use(chaiHttp);

// pass in the word done into function to let chai know when the async code is done
describe('route testing', function() {
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
            expected(res).to.have.property('text', "Test path successful!")
            done();

        });   
    });
});
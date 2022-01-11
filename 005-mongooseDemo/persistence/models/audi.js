// Our audi file will be creating an audi object 
// specifying what params it should take in (colour, price, engine size etc)
// Exporting it for our route to use

const mongoose = require('mongoose')

// Deconstructing Mongoose, but make sure this is the way it's done. (capital S for schema)
const {Schema, model} = mongoose;


// Creating our schema
const audiSchema = new Schema({
    // Key value pair = name of attribute : Data type
model:  {  // These curly brackets means we can name the type of data and if it is required or not (eg. can the field be left empty)
    type: String,
    required: true
},
colour: String,
price: Number,
// tyreType: {
//     brand: String,
//     size: { 
//         type: Number,
//         max: 22
//         }   
//     },
});

// // Embedded document
// tyreType: {
//     brand: String,
//     size: Number
// },

// // Array of numbers
// favNumber: [Numbers]

// Creating the lizard model
const Audi = model('Audi', audiSchema);

// Export our model

module.exports = {'Audi': Audi};

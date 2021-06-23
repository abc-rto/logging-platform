const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Location = require('./location');

// Create a schema
const buildingSchema = new Schema({
    id: {
        required: true,
        type: Number
    },
    name: {
        required: [true, 'The Site name is required'],
        type: String
    },
    user: {
        type: String
    },
    locations: [{
        type: Location.schema
    }],
});

// Create a model 
const Building = mongoose.model('building', buildingSchema)

//Export the model
module.exports = Building;
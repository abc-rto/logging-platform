const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        id: {
            required: true,
            type: Number
        },
        name: {
            required: [true, 'The Building name is required'],
            type: String
        },
        assets: [{
            id: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: [true, 'The Asset name is required']
            },
            description: {
                type: String,
            },
            type: {
                type: String
            },
            rating: {
                type: String
            },
            sensors: [{
                id: {
                    required: true,
                    type: Number
                },
                name: {
                    required: [true, 'The sensor name is required'],
                    type: String
                },
                type: {
                    required: false,
                    type: Number
                },
                uuid: {
                    required: false,
                    type: String
                }
            }]
        }]
    }],
});

// Create a model 
//const Building = mongoose.model('building', buildingSchema)

// Export the model
//module.exports = Building;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Asset = require('./asset');

const LocationSchema = new Schema({
    id: {
        required: true,
        type: Number
    },
    name: {
        required: [true, 'The Building name is required'],
        type: String
    },
    assets: [{
        type: Asset.schema
    }]
})

const Location = mongoose.model('Locations', LocationSchema);

module.exports = Location;
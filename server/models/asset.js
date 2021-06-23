const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssetSchema = new Schema({
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
        sensortype: {
            required: false,
            type: Number
        },
        uuid: {
            required: false,
            type: String
        }
    }]
})

const Asset = mongoose.model('Assets', AssetSchema);

module.exports = Asset;
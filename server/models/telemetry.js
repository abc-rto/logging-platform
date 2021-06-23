const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for Site
const TelemetrySchema = new Schema({
    sensorUuid: {
        required: [true, 'The telemetry sensorUuid is required'],
        type: String
    },
    dateTime: {
        required: [true, 'The telemetry datetime is required'],
        type: Date
    },
    value: {
        type: Number,
        required: [true, 'The telemetry sensor value is required'],
    }
})

//create model for Site
const Telemetry = mongoose.model('Telemetry', TelemetrySchema, 'telemetries');

module.exports = Telemetry;
const JWT = require('jsonwebtoken');
const Telemetry = require('../models/telemetry');
const { JWT_SECRET } = require('../config');


module.exports = {
    getCurrentValue: async (req, res, next) => {
        const values = req.query.idArray
        const response = await Telemetry.find().where('sensorUuid').in(values);
        res.json(response);
    }
}
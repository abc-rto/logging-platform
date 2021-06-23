const JWT = require('jsonwebtoken');
const Building = require('../models/building');
const { JWT_SECRET } = require('../config');


module.exports = {
    listAllBuildings: async (req, res, next) => {
        // List all buildings
        const response = await Building.find({user: 'dave@gmail.com'});
        res.json(response);
    }
}
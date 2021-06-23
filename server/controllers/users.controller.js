const JWT = require('jsonwebtoken');
const User = require('../models/user');
const Building = require('../models/building');
const { JWT_SECRET } = require('../config');

signToken = user => {
    return JWT.sign({
        iss: 'dex',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
}


module.exports = {
    signUp: async (req, res, next) => {
        // Email and Password validated by function in helper
        const { email, password } = req.value.body;

        // Check if there is a user with the same email
        //const users = await User.find();
        const foundUser = await User.findOne({ email });
        if( foundUser ){ 
            return res.status(403).json({error: 'Email is already in use'});
        }

        // Create a new user
        const newUser = new User({ email, password });
        await newUser.save();
        
        // Generate the token
        const token = signToken(newUser);

        // Respond with token
        res.status(200).json({ token });
    },

    signIn: async (req, res, next) => {
        // Generate a token
        const token = signToken(req.user);
        res.status(200).json({ token });
    },

    secret: async (req, res, next) => {
        res.json({ secret: req.user.email })
    },

    getUserData: async (req, res, next) => {
        //const { email, password } = req.value.body;
        req.user
        const foundData = await Building.find( {});
        res.json(foundData)
    }
}
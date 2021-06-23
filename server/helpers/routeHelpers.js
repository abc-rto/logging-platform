const Joi = require('joi');

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = schema.validate(req.body);
            if (result.error) {
                return res.status(400).json(result.error);
            }

            if (!req.value) { req.value = {}; }
            req.value['body'] = result.value;
            next();
        }
    },

    schemas: {
        authSchema: Joi.object().keys({
            email: Joi.string().required().email(),
            password: Joi.string().required()
        }),
        buildingSchema: Joi.object().keys({
            name: Joi.string().required(),
            address: Joi.string().required(),
            description: Joi.string().required(),
            id: Joi.number().required(),
            locations: Joi.object().required()
        })
    }
}
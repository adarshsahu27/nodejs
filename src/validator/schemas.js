const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    gender: Joi.string()
        .min(4)
        .max(6)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    
    dob: Joi.date().iso().required(),

    standard: Joi.string().min(1).max(3).required(),

    rollNumber: Joi.string().min(2).max(3).required(),

    contactNumber: Joi.string().pattern(new RegExp('^[6-9]{1}[0-9]{9}')).required(),

    vaccinated: Joi.boolean().default(true),

    address: Joi.string().min(2).max(15).required(),

    state: Joi.string().min(2).max(10).required(),

    pincode: Joi.string().pattern(new RegExp('^[1-9]{1}[0-9]{5}')).required(),


});

module.exports = {schema};
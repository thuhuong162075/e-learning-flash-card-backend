const { Joi, validate } = require('express-validation');

const login = {
    body: Joi.object({
        email: Joi.string().email().trim().lowercase().required(),
        password: Joi.string().trim().required(),
    }),
};

const register = {
    body: Joi.object({
        email: Joi.string().email().trim().lowercase().required(),
        username: Joi.string().trim().required(),
        password: Joi.string().trim().required(),
        againPassword: Joi.string().trim().required()
    }),
};

module.exports = {
    loginValidate: validate(login, { keyByField: true }),
    registerValidate: validate(register, { keyByField: true }),
};

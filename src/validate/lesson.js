const { Joi, validate } = require('express-validation');
const image = {
    body: Joi.object({
        url: Joi.string().trim().required(),
        desc: Joi.string().trim().required(),
        name: Joi.string().trim().required(),
        idLesson: Joi.string().required()
    }),
};

module.exports = {
    imageValidate: validate(image, { keyByField: true }),
};

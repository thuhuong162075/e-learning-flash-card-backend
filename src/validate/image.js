const { Joi, validate } = require('express-validation');

const lesson = {
    body: Joi.object({
        name: Joi.string().trim().required(),
        desc: Joi.string().trim().required(),
    }),
};

module.exports = {
    lessonValidate: validate(lesson, { keyByField: true }),
};

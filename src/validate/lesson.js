const { Joi, validate } = require('express-validation');
const lesson = {
    body: Joi.object({
        desc: Joi.string().trim().required(),
        name: Joi.string().trim().required(),
    }),
};

module.exports = {
    lessonValidate: validate(lesson, { keyByField: true }),
};

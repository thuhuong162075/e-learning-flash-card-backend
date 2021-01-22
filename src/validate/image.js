const { Joi, validate } = require('express-validation');

const image = {
	body: Joi.object({
		name: Joi.string().trim().required(),
		desc: Joi.string().trim().required(),
		lessonId: Joi.string().trim().required(),
		url: Joi.string().trim().required(),
	}),
};

module.exports = {
	imageValidate: validate(image, { keyByField: true }),
};

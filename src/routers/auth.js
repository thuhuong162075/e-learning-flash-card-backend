const express = require('express');
const authRouter = express.Router();

const authController = require('../controllers/auth');
const { loginValidate, registerValidate } = require('../validate/auth');

authRouter.post('/auth/register', registerValidate, authController.register);
authRouter.post('/auth/login', loginValidate, authController.login);

module.exports = authRouter;

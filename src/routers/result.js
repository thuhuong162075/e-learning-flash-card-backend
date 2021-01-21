var express = require("express");
var resultRouter = express.Router();
const asyncMiddleware = require('../middlewares/async');

const resultController = require('../controllers/result')
const {
    auth
} = require('../middlewares/auth')

resultRouter.get('/result/getResultByIdUser', auth, asyncMiddleware(resultController.getResultByIdUser))
resultRouter.post('/result/createResult', auth, asyncMiddleware(resultController.createResult))
resultRouter.patch('/result/editResult', auth, asyncMiddleware(resultController.editResult))

module.exports = resultRouter
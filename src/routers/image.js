var express = require("express");
var imageRouter = express.Router();

const imageController = require('../controllers/image')
const { imageValidate } = require('../validate/image')
const { authAdmin } = require('../middlewares/auth')
imageRouter.post('/lesson/createImage', authAdmin, imageValidate, imageController.createImage)
imageRouter.patch('/lesson/editImage', authAdmin, imageController.editImage)
imageRouter.delete('/lesson/deleteImage', authAdmin, imageController.deleteImage)

module.exports = imageRouter
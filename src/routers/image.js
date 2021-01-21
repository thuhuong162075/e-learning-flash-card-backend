var express = require("express");
var imageRouter = express.Router();
const asyncMiddleware = require('../middlewares/async');

const imageController = require('../controllers/image')
const { imageValidate } = require('../validate/image')
const { auth, authAdmin } = require('../middlewares/auth')

imageRouter.post('/lesson/createImage', authAdmin, imageValidate, imageController.createImage)
imageRouter.patch('/lesson/editImage', authAdmin, imageController.editImage)
imageRouter.delete('/lesson/deleteImage', authAdmin, imageController.deleteImage)
imageRouter.get('/image/deleteImageByIdLesson', imageController.deleteImageByIdLesson)
imageRouter.get('/image/getImageByIdLesson', auth, asyncMiddleware(imageController.findImageByIdLesson))

module.exports = imageRouter
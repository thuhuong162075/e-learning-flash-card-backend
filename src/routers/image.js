const express = require('express');
const imageRouter = express.Router();

const asyncMiddleware = require('../middlewares/async');
const imageController = require('../controllers/image');
const { imageValidate } = require('../validate/image');
const { auth, authAdmin } = require('../middlewares/auth');

imageRouter.post(
  '/lesson/createImage',
  authAdmin,
  imageValidate,
  asyncMiddleware(imageController.createImage),
);
imageRouter.patch('/lesson/editImage', authAdmin, asyncMiddleware(imageController.editImage));
imageRouter.delete(
  '/lesson/deleteImage',
  authAdmin,
  asyncMiddleware(imageController.deleteImage),
);
imageRouter.delete(
  '/image/deleteImageByLessonId',
  authAdmin,
  asyncMiddleware(imageController.deleteImageByLessonId),
);
imageRouter.get(
  '/image/getImageBylessonId/:lessonId',
  auth,
  asyncMiddleware(imageController.findImageBylessonId),
);

module.exports = imageRouter;

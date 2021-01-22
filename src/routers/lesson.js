const express = require('express');
const lessonRouter = express.Router();

const asyncMiddleware = require('../middlewares/async');
const lessonController = require('../controllers/lesson');
const { lessonValidate } = require('../validate/lesson');
const { auth, authAdmin } = require('../middlewares/auth');

lessonRouter.get('/lesson/getAll', auth, asyncMiddleware(lessonController.getListAllLesson));
lessonRouter.post(
  '/lesson/createLesson',
  authAdmin,
  asyncMiddleware(lessonController.createLesson),
);
lessonRouter.get(
  '/lesson/detailLesson/:id',
  auth,
  lessonValidate,
  asyncMiddleware(lessonController.detailLesson),
);
lessonRouter.patch(
  '/lesson/editLesson',
  authAdmin,
  asyncMiddleware(lessonController.editLesson),
);
lessonRouter.delete(
  '/lesson/deleteLesson',
  authAdmin,
  asyncMiddleware(lessonController.deleteLesson),
);

module.exports = lessonRouter;

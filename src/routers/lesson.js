var express = require("express");
var lessonRouter = express.Router();
const asyncMiddleware = require('../middlewares/async');

const lessonController = require('../controllers/lesson')
const { lessonValidate } = require('../validate/lesson')
const {
    auth, authAdmin
} = require('../middlewares/auth')

lessonRouter.get('/lesson/getAll', auth, lessonController.getListAllLesson)
lessonRouter.post('/lesson/createLesson', authAdmin, asyncMiddleware(lessonController.createLesson))
lessonRouter.get('/lesson/detailLesson/:id', auth, lessonController.detailLesson)
lessonRouter.patch('/lesson/editLesson/:id', authAdmin, lessonController.editLesson)
lessonRouter.delete('/lesson/deleteLesson', authAdmin, lessonController.deleteLesson)

module.exports = lessonRouter
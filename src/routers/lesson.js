var express = require("express");
var lessonRouter = express.Router();

const lessonController = require('../controllers/lesson')
const { lessonValidate } = require('../validate/lesson')
const {
    auth, authAdmin
} = require('../middlewares/auth')

lessonRouter.get('/lesson/getAll', auth, lessonController.getListAllLesson)
lessonRouter.post('/lesson/createLesson', authAdmin, lessonValidate, lessonController.createLesson)
lessonRouter.patch('/lesson/editLesson', authAdmin, lessonController.editLesson)
lessonRouter.delete('/lesson/deleteLesson', authAdmin, lessonController.deleteLesson)

module.exports = lessonRouter
var express = require("express");
var lessonRouter = express.Router();

const lessonController = require('../controllers/lesson')
const lessonValidate = require('../validate/lesson')

lessonRouter.get('/lesson/getAll', lessonController.getListAllLesson)
lessonRouter.post('/lesson/createLesson', lessonController.createLesson)
lessonRouter.patch('/lesson/editLesson', lessonController.editLesson)
lessonRouter.delete('/lesson/deleteLesson', lessonController.deleteLesson)

module.exports = lessonRouter
const lessonService = require('../services/lesson')
const CustomError = require('../errors/CustomError');
const codes = require('../errors/code');

const getListAllLesson = async (req, res) => {
    const result = await lessonService.getListAll()
    return res.send(result)
}
const createLesson = async (req, res) => {
    const { name, desc } = req.body
    console.log("body", req.body)
    const lesson = await lessonService.createLesson({ name, desc })
    return res.send({ status: 1, result: lesson })
}
const editLesson = async (req, res) => {
    const { id, data } = req.body
    const lessons = await lessonService.editLessonById({ id, data })
    return res.send({ status: 1, result: lessons })
}
const detailLesson = async (req, res) => {
    const { id } = req.params
    const lesson = await lessonService.detailLessonById({ id })
    return res.send({ status: 1, result: lesson })
}

const deleteLesson = async (req, res) => {
    const { id } = req.body
    if (!id) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập id của lesson')
    }
    const lessons = await lessonService.deleteLessonById(id)
    return res.send(lessons)
}
module.exports = {
    createLesson,
    getListAllLesson,
    editLesson,
    deleteLesson,
    detailLesson
}
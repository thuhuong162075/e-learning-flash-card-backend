const lessonService = require('../services/lesson')
const CustomError = require('../errors/CustomError');
const codes = require('../errors/code');

const getListAllLesson = async (req, res) => {
    const result = await lessonService.getListAll()
    return res.send(result)
}
const createLesson = async (req, res) => {
    const { name, desc } = req.body
    const lesson = await lessonService.createLesson({ name, desc })
    return res.send(lesson)
}
const editLesson = async (req, res) => {
    const { id, data } = req.body
    if (!id) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập id của lesson')
    }
    if (!data) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập dữ liệu chỉnh sửa cho lesson')
    }
    const lessons = await lessonService.editLessonById({ id, data })
    return res.send(lessons)
}
const detailLesson = async (req, res) => {
    const { id } = req.params
    if (!id) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập id của lesson')
    }
    const lesson = await lessonService.detailLessonById({ id })
    return res.send(lesson)
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
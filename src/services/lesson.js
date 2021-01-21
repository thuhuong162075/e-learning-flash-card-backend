const lessonDao = require('../daos/lessons')
const Lesson = require('../models/lessons')

const getListAll = async () => {
    try {
        const lesson = await Lesson.find({})
        return { status: 1, data: lesson }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}
const createLesson = async ({ name, desc }) => {
    try {
        const listLesson = await Lesson.find({})
        if (listLesson.findIndex(item => item.name.trim().toLowerCase() === name.trim().toLowerCase()) >= 0) {
            throw new Error(`Bài học ${name} đã tồn tại `)
        }
        const lesson = await lessonDao.createLesson({ name, desc })
        return { status: 1, data: lesson }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}

const detailLessonById = async ({ id }) => {
    try {
        const lesson = await lessonDao.findLesson({ _id: id })
        return { status: 1, data: lesson }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}
const editLessonById = async ({ id, data }) => {
    try {
        const lesson = await lessonDao.editLesson({ id, data })
        return { status: 1, data: lesson }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}
const deleteLessonById = async (id) => {
    try {
        const data = await Lesson.findByIdAndRemove({ _id: id });
        if (!data) {
            throw new Error(`Không thể xoá Lesson: ${id}`)
        }
        return { status: 1, data: id }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}

module.exports = {
    createLesson,
    getListAll,
    editLessonById,
    deleteLessonById,
    detailLessonById
}

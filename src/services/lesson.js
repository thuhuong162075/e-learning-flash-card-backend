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
        const lesson = await lessonDao.createLesson({ name, desc })
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
        await Lesson.deleteOne({ _id: id });
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
    deleteLessonById
}

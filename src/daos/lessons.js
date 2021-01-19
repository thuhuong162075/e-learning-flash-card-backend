const Lesson = require('../models/lessons');

const createLesson = async ({ name, desc }) => {
    try {
        const lesson = await Lesson.create({ name, desc })
        return lesson
    } catch (e) {
        console.log(e)
    }
}
const findLesson = async (condition) => {
    if (typeof condition === 'object' && condition !== null) {
        const lesson = await Lesson.findOne(condition);
        return lesson;
    }
    return null;
}
const editLesson = async ({ id, data }) => {
    try {
        let lessonById = await Lesson.findById(id);
        lessonById.name = data.name || lessonById.name
        lessonById.desc = data.desc || lessonById.desc
        await lessonById.save();
        return await Lesson.findById(id)
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    createLesson,
    findLesson,
    editLesson
}
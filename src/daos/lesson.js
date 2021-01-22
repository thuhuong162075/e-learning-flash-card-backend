const Lesson = require('../models/lesson');

const createLesson = async ({ name, desc }) => {
  const lesson = await Lesson.create({ name, desc });
  return lesson;
};

const findLesson = async (condition) => {
  if (typeof condition === 'object' && condition !== null) {
    const lesson = await Lesson.findOne(condition);
    return lesson;
  }
  return null;
};

const findLessonAndRemove = async (id) => {
  const result = await Lesson.findByIdAndRemove(id);
  return result
};

const editLesson = async ({ id, data }) => {
  let lessonById = await Lesson.findById(id);
  if (!lessonById) {
    throw new Error(`Not found ${id}`);
  }
  lessonById.name = data.name || lessonById.name;
  lessonById.desc = data.desc || lessonById.desc;
  await lessonById.save();
  return lessonById;
};

module.exports = {
  createLesson,
  findLesson,
  editLesson,
  findLessonAndRemove
};

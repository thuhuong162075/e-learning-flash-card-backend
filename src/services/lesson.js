const lessonDao = require('../daos/lesson');

const getListAll = async () => {
  const lesson = await lessonDao.getAllLesson();
  return { status: 1, data: lesson };
};

const createLesson = async ({ name, desc }) => {
  const lesson = await lessonDao.createLesson({ name, desc });
  return { status: 1, data: lesson };
};

const detailLessonById = async ({ id }) => {
  const lesson = await lessonDao.findLesson({ _id: id });
  return { status: 1, data: lesson };
};

const editLessonById = async ({ id, data }) => {
  const lesson = await lessonDao.editLesson({ id, data });
  return { status: 1, data: lesson };
};

const deleteLessonById = async (id) => {
  const data = await lessonDao.findLessonAndRemove(id);
  if (!data) {
    throw new Error(`Không thể xoá Lesson: ${id}`);
  }
  return { status: 1, data: id };
};

module.exports = {
  createLesson,
  getListAll,
  editLessonById,
  deleteLessonById,
  detailLessonById,
};

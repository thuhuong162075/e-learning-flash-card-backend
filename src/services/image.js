const imageDao = require('../daos/image');

const createImage = async ({ desc, name, url, lessonId }) => {
  const image = await imageDao.createImage({ desc, name, url, lessonId });
  return { status: 1, data: image };
};

const deleteImageByLessonId = async ({ lessonId }) => {
  const data = await imageDao.findImage({ lessonId });
  if (data) {
    for (let i = 0; i < data.length; i++) {
      await imageDao.findImageAndRemove(data[i]._id);
    }
  }
  return { status: 1 };
};

const findImageByLessonId = async ({ lessonId }) => {
  const data = await imageDao.findImage({ lessonId });
  if (!data) {
    throw new Error(`Not found ${lessonId}`);
  }
  return { status: 1, data: data };
};

const editImage = async ({ id, data }) => {
  const image = await imageDao.editImage({ id, data });
  return { status: 1, data: image };
};

const deleteImageById = async (id) => {
  const data = await imageDao.findImageAndRemove(id);
  if (!data) {
    throw new Error(`Not delete Image has ${id}`);
  }
  return { status: 1, data: id };
};

module.exports = {
  createImage,
  editImage,
  deleteImageById,
  findImageByLessonId,
  deleteImageByLessonId,
};

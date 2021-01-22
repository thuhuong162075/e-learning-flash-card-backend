const imageService = require('../services/image');
const CustomError = require('../errors/CustomError');
const codes = require('../errors/code');

const createImage = async (req, res) => {
  const { desc, name, lessonId, url } = req.body;
  const result = await imageService.createImage({ desc, name, lessonId, url });
  return res.send(result);
};

const editImage = async (req, res) => {
  const { id, data } = req.body;
  if (!id) {
    throw new CustomError(codes.BAD_REQUEST, 'Not found id image');
  }
  const result = await imageService.editImage({ id, data });
  return res.send(result);
};

const deleteImage = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    throw new CustomError(codes.BAD_REQUEST, 'Not found id image');
  }
  const result = await imageService.deleteLessonById(id);
  return res.send(result);
};

const deleteImageByLessonId = async (req, res) => {
  const { lessonId } = req.body;
  const result = await imageService.deleteImageByLessonId({ lessonId });
  return res.send(result);
};

const findImageBylessonId = async (req, res) => {
  const { lessonId } = req.params;
  const result = await imageService.findImageBylessonId({ lessonId });
  return res.send(result);
};

module.exports = {
  createImage,
  editImage,
  deleteImage,
  deleteImageByLessonId,
  findImageBylessonId,
};

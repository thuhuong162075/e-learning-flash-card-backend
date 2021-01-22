const resultService = require('../services/result');
const CustomError = require('../errors/CustomError');
const codes = require('../errors/code');

const getResultByUserId = async (req, res) => {
  const { userId, lessonId } = req.body;
  if (!userId) {
    throw new CustomError(codes.BAD_REQUEST, 'Not found userId');
  }
  if (!lessonId) {
    throw new CustomError(codes.BAD_REQUEST, 'Not found LessonId');
  }
  const result = await resultService.getResultByUserId({ userId, lessonId });
  return res.send(result);
};

const createResult = async (req, res) => {
  const { userId, lessonId, arrImage } = req.body;
  if (!userId) {
    throw new CustomError(codes.BAD_REQUEST, 'Not found userId');
  }
  if (!lessonId) {
    throw new CustomError(codes.BAD_REQUEST, 'Not found lessonId');
  }
  if (!arrImage) {
    arrImage = [];
  }
  const result = await resultService.createResult({
    userId,
    lessonId,
    arrImage,
  });
  return res.send(result);
};

const editResult = async (req, res) => {
  const { userId, lessonId, arrImage, status } = req.body;
  if (!userId) {
    throw new CustomError(codes.BAD_REQUEST, 'Not found userId');
  }
  if (!lessonId) {
    throw new CustomError(codes.BAD_REQUEST, 'Not found lessonId');
  }
  if (!arrImage) {
    throw new CustomError(codes.BAD_REQUEST, 'Not found arrImage');
  }
  if (!status) {
    throw new CustomError(codes.BAD_REQUEST, 'Not found status');
  }
  const result = await resultService.editResultById({
    userId,
    lessonId,
    arrImage,
    status,
  });
  return res.send(result);
};

module.exports = {
  getResultByUserId,
  createResult,
  editResult,
};

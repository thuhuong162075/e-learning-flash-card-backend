const resultDao = require('../daos/result');

const getResultByUserId = async ({ userId, lessonId }) => {
  const result = await resultDao.findResult({ userId, lessonId });
  return { status: 1, data: result };
};

const createResult = async ({ userId, lessonId, arrImage }) => {
  // result được tạo khi user bắt đầu học 1 bài học
  const listResult = await resultDao.findResult({ userId, lessonId });
  if (listResult) {
    throw new Error(`Đã tạo kết quả cho bài học`);
  }
  const result = await resultDao.createResult({
    userId,
    lessonId,
    arrImage: arrImage,
    status: 1,
  });
  return { status: 1, data: result };
};

const editResultById = async ({ userId, lessonId, arrImage, status }) => {
  const result = await resultDao.editResult({
    userId,
    lessonId,
    arrImage,
    status,
  });
  return { status: 1, data: result };
};

module.exports = { getResultByUserId, createResult, editResultById };

const Result = require('../models/result');

const createResult = async ({ userId, lessonId, arrImage, status }) => {
  const result = await Result.create({ userId, lessonId, arrImage, status });
  return result;
};

const findResult = async (condition) => {
  if (typeof condition === 'object' && condition !== null) {
    const result = await Result.findOne(condition);
    return result;
  }
  return null;
};

const editResult = async ({ lessonId, userId, status, arrImage }) => {
  let findResult = await Result.findOne({ lessonId, userId });
  if (!findResult) {
    throw new Error(`Not found result ${lessonId} and ${userId}`);
  }
  findResult.status = status || findResult.status;
  findResult.arrImage = arrImage || findResult.arrImage;
  await findResult.save();
  return findResult;
};

module.exports = { createResult, findResult, editResult };

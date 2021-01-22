const Images = require('../models/image');

const createImage = async ({ url, desc, name, lessonId }) => {
  const image = await Images.create({ url, desc, name, lessonId });
  return image;
};

const findImage = async (condition) => {
  if (typeof condition === 'object' && condition !== null) {
    const image = await Images.find(condition);
    return image;
  }
  return null;
};

const findImageAndRemove = async (id) => {
  const result = Images.findByIdAndRemove(id);
  return result;
};

const editImage = async ({ id, data }) => {
  let imageById = await Images.findById(id);
  if (!imageById) {
    throw new Error(`Not found ${id}`);
  }
  imageById.name = data.name || imageById.name;
  imageById.desc = data.desc || imageById.desc;
  await imageById.save();
  return imageById
};

module.exports = {
  createImage,
  editImage,
  findImage,
  findImageAndRemove,
};

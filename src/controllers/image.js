const imageService = require('../services/image')
const CustomError = require('../errors/CustomError');
const codes = require('../errors/code');

const createImage = async (req, res) => {
    const { desc, name, idLesson, url } = req.body
    const result = await imageService.createImage({ desc, name, idLesson, url })
    return res.send(result)
}
const editImage = async (req, res) => {
    const { id, data } = req.body
    const result = await imageService.editImage({ id, data })
    return res.send(result)
}
const deleteImage = async (req, res) => {
    const { id } = req.body
    if (!id) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập id của lesson')
    }
    const result = await imageService.deleteLessonById(id)
    return res.send(result)
}
const findImageByIdLesson = async (req, res) => {
    const { id } = req.body
    const result = await imageService.findImageByIdLesson(id)
    return res.send(result)
}
module.exports = {
    createImage,
    editImage,
    deleteImage,
    findImageByIdLesson
}

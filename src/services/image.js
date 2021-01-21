const imageDao = require('../daos/image')
const Images = require('../models/image');

const createImage = async ({ desc, name, url, idLesson }) => {
    try {
        const image = await imageDao.createImage({ desc, name, url, idLesson })
        return { status: 1, data: image }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}
const findImageByIdLesson = async ({ idLesson }) => {
    try {
        const image = await imageDao.findImage({ idLesson })
        return { status: 1, data: image }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}
const editImage = async ({ id, data }) => {
    try {
        const image = await imageDao.editImage({ id, data })
        return { status: 1, data: image }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}
const deleteImageById = async (id) => {
    try {
        const data = await Images.findByIdAndRemove({ _id: id });
        if (!data) {
            throw new Error(`Không thể xoá Image: ${id}`)
        }
        return { status: 1, data: id }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}

module.exports = {
    createImage,
    editImage,
    deleteImageById,
    findImageByIdLesson
}
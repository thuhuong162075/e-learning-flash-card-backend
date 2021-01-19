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
        await Images.deleteOne({ _id: id });
        return { status: 1, data: id }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}

module.exports = {
    createImage,
    editImage,
    deleteImageById
}
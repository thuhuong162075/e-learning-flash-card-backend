const Images = require('../models/image');

const createImage = async ({ url, desc, name, idLesson }) => {
    try {
        const image = await Images.create({ url, desc, name, idLesson })
        return image
    } catch (e) {
        console.log(e)
        return null
    }
}
const findImage = async (condition) => {
    if (typeof condition === 'object' && condition !== null) {
        const image = await Images.find(condition);
        console.log('lesson', condition, image)
        return image;
    }
    return null;
}
const editImage = async ({ id, data }) => {
    try {
        let imageById = await Images.findById(id);
        imageById.name = data.name || imageById.name
        imageById.desc = data.desc || imageById.desc
        await imageById.save();
        return await Images.findById(id)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    createImage,
    editImage,
    findImage
}
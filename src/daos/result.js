const Result = require('../models/result');

const createResult = async ({ idUser, idLesson, arrImage, status }) => {
    try {
        const result = await Result.create({ idUser, idLesson, arrImage, status })
        return result
    } catch (e) {
        console.log(e)
    }
}

const findResult = async (condition) => {
    if (typeof condition === 'object' && condition !== null) {
        const result = await Result.findOne(condition);
        return result;
    }
    return null;
}
const editResult = async ({ idLesson, idUser, status, arrImage }) => {
    try {
        let findResult = await findResult({ idLesson, idUser });
        findResult.status = status || findResult.status
        findResult.arrImage = arrImage || findResult.arrImage
        await findResult.save();
        return await Result.findResult({ idLesson, idUser })
    } catch (e) {
        console.log(e)
    }
}

module.exports = { createResult, findResult, editResult }
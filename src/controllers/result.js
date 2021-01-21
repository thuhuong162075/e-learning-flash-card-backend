
const resultService = require('../services/result')
const CustomError = require('../errors/CustomError');
const codes = require('../errors/code');

const getResultByIdUser = async (req, res) => {
    const { idUser, idLesson } = req.body
    if (!idUser) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập userId')
    }
    if (!idLesson) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập idLesson')
    }
    const result = await resultService.getResultByIdUser({ idUser, idLesson })
    return res.send(result)
}
const createResult = async (req, res) => {
    const { idUser, idLesson } = req.body
    if (!idUser) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập userId')
    }
    if (!idLesson) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập idLesson')
    }
    const result = await resultService.createResult({ idUser, idLesson })
    return res.send(result)
}
const editResult = async (req, res) => {
    const { idUser, idLesson, arrImage, status } = req.body
    if (!idUser) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập userId')
    }
    if (!idLesson) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập idLesson')
    }
    if (!arrImage) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập arrImage')
    }
    if (!status) {
        throw new CustomError(codes.BAD_REQUEST, 'Hãy nhập status')
    }
    const result = await resultService.editResultById({ idUser, idLesson, arrImage, status })
    return res.send(result)
}
module.exports = {
    getResultByIdUser,
    createResult,
    editResult
}
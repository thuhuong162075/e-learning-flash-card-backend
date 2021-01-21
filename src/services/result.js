const ResultDao = require('../daos/result')
// const Result = require('../models/result')

const getResultByIdUser = async ({ idUser, idLesson }) => {
    try {
        const result = await ResultDao.findResult({ idUser, idLesson })
        return { status: 1, data: result }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}
const createResult = async ({ idUser, idLesson }) => { // result được tạo khi user bắt đầu học 1 bài học
    try {
        const listResult = await ResultDao.findResult({ idUser, idLesson })
        if (listResult) {
            throw new Error(`Đã tạo kết quả cho bài học`)
        }
        const result = await ResultDao.createResult({ idUser, idLesson, arrImage: [], status: 1 })
        return { status: 1, data: result }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}
const editResultById = async ({ idUser, idLesson, arrImage, status }) => {
    try {
        const result = await ResultDao.editResult({ idUser, idLesson, arrImage, status })
        return { status: 1, data: result }
    } catch (e) {
        console.log(e)
        return { status: 0, data: e }
    }
}

module.exports = { getResultByIdUser, createResult, editResultById }
const imageService = require('../services/image')

const createImage = async (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    let url = file.destination + "/" + file.filename
    const { desc, idLesson } = req.body
    console.log(desc, idLesson, url, file)
    // const result = await imageService.createImage({ desc, name: file.filename, idLesson, file })
    // return res.send(result)
}
const editImage = async (req, res) => {
    const { id, data } = req.body
    const result = await imageService.editImage({ id, data })
    return res.send(result)
}
const deleteImage = async (req, res) => {
    const { id } = req.body
    const result = await imageService.deleteLessonById(id)
    return res.send(result)
}
module.exports = {
    createImage,
    editImage,
    deleteImage
}

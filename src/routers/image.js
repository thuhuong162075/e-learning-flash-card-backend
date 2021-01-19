var express = require("express");
var imageRouter = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/storage')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({ storage: storage })
const imageController = require('../controllers/image')
const { imageValidate } = require('../validate/image')

imageRouter.post('/lesson/createImage', upload.single('image'), imageController.createImage)
imageRouter.patch('/lesson/editImage', imageController.editImage)
imageRouter.delete('/lesson/deleteImage', imageController.deleteImage)

module.exports = imageRouter
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const imageSchema = new mongoose.Schema(
    {
        idUser: {
            type: Schema.Types.ObjectId,
            ref: 'UserObject'
        },
        idLesson: {
            type: Schema.Types.ObjectId,
            ref: 'LessonObject'
        },
        status: Number,
        arrImage: [{
            idImage: {
                type: Schema.Types.ObjectId,
                ref: 'LessonObject'
            },
            status: Number
        }]
    }, {
    timestamps: true
}
);

module.exports = mongoose.model('Image', imageSchema, 'images');
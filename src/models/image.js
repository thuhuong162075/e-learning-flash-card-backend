const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    desc: {
      type: String,
    },
    name: {
      type: String,
    },
    lessonId: {
      type: Schema.Types.ObjectId,
      ref: 'LessonObject',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Image', imageSchema, 'images');

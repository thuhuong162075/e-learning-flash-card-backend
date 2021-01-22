const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Lesson', lessonSchema, 'lessons');

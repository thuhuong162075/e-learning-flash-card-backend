const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
    },
    lessonId: {
      type: Schema.Types.ObjectId,
    },
    status: Number,
    arrImage: [
      {
        idImage: {
          type: Schema.Types.ObjectId,
        },
        status: Number,
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Result', resultSchema, 'result');

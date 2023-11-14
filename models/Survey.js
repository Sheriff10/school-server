const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  options: [String],
});

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [questionSchema],
  responses: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
      },
      answers: [String], // Array of answers corresponding to each question
    },
  ],
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;

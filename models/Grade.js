const mongoose = require('mongoose');

const gradebookSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  // assignment_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Assignment',
  // },
  // quiz_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Quiz',
  // },
  exam_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
  },
  grade: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
  },
});

const Gradebook = mongoose.model('Gradebook', gradebookSchema);

module.exports = Gradebook;

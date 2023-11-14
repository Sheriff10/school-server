const mongoose = require('mongoose');

const extracurricularActivitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  schedule: [
    {
      day: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
    },
  ],
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
});

const ExtracurricularActivity = mongoose.model('ExtracurricularActivity', extracurricularActivitySchema);

module.exports = ExtracurricularActivity;
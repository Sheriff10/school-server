const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['announcement', 'news', 'event', 'resource', 'schedule', 'assignment', 'exam', "projects"],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;

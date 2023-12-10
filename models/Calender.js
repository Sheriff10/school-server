const mongoose = require('mongoose');

const schoolCalendarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['academic event', 'holiday', 'extracurricular activity'],
    required: true,
  },
});

const SchoolCalendarEvent = mongoose.model('SchoolCalendarEvent', schoolCalendarSchema);

module.exports = SchoolCalendarEvent;

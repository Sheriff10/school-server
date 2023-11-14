const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  personal_info: {
    // Define the structure of personal information, such as name, address, etc.
    // Example: { name: String, address: String, dob: Date, ... }
  },
  academic_records: {
    // Define the structure of academic records, such as grades, GPA, etc.
    // Example: { grades: [Number], gpa: Number, ... }
  },
  attendance: {
    // Define the structure of attendance records, if needed.
    // Example: { totalClasses: Number, attendedClasses: Number, ... }
  },
  behavior_reports: {
    // Define the structure of behavior reports, if needed.
    // Example: { incidents: [String], comments: String, ... }
  },
  extracurricular_activities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ExtracurricularActivity',
    },
  ],
  participated_surveys: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Survey',
    },
  ],
  signed_up_events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
    },
  ],
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

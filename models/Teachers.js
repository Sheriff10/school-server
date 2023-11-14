const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  contact_info: {
    // Define the structure of contact information, such as email, phone, etc.
    firstname: String,
      lastname: String,
      address: String,
      email: String,
      phone: String,
      dob: Date,
  },
  subjects_taught: [{
    type: String,
    required: true,
  }],
  class_assignments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
  }],
  class_rosters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
  }],
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;

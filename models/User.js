const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['administrator', 'teacher', 'student', 'parent', "dev"],
    required: true,
  },
  permissions: {
    type: [String], // You may want to customize this based on your permission system
    default: [],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
   user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
   },
   personal_info: {
      // Define the structure of personal information, such as name, address, etc.
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
      address: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      dob: { type: String, required: true },
   },
   subjects_taught: [
      {
         type: String,
         required: true,
      },
   ],
   class_assignments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Class",
      },
   ],
   class_rosters: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Class",
      },
   ],
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;

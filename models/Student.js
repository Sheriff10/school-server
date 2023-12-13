const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
   user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
   },
   personal_info: {
      // Define the structure of personal information, such as name, address, etc.
      firstname: {type: String, required: true},
      lastname: {type: String, required: true},
      parentEmail: {type: String, required: true},
      address: {type: String, required: true},
      grade: {type: String, required: true},
      dob: {type: String, required: true},
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
      incidents: [String],
      comments: String,
   },
   extracurricular_activities: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "ExtracurricularActivity",
      },
   ],
   participated_surveys: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Survey",
      },
   ],
   signed_up_events: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Event",
      },
   ],
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

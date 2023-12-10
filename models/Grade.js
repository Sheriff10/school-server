const mongoose = require("mongoose");

const GradeSchema = mongoose.Schema({
   user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
   subject: { type: String, required: true },
   grade: { type: String, required: true },
   result: { type: String, required: true },
   student_name: { type: String, required: true },
});

const Grade = mongoose.model("grade", GradeSchema);

module.exports = Grade;

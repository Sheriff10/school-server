const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
   class_name: {
      type: String,
      required: true,
   },
   teacher_id: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "Teacher",
      type: String,
      required: true,
   },
   grade: { type: String, required: true },
   class_begin: {
      date: String,
      time: String,
   },
   class_ends: {
      date: String,
      time: String,
   },
   class_roster: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "students",
      },
   ],
   class_status: {
      type: String,
      enum: ["completed", "ongoing", "pending", "canceled"],
      default: "pending",
   },
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;

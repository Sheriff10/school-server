const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
   class_name: {
      type: String,
      required: true,
   },
   teacher_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
   },
   grade: String,
   class_schedule: {
      day: {
         type: String,
         required: true,
      },
      time: {
         type: String,
         required: true,
      },
   },
   class_roster: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "students",
      },
   ],
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;

const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const teacherAuth = require("../../../middleware/teachAuth");
const Attendance = require("../../../models/Attendance");
const Class = require("../../../models/Class");
const User = require("../../../models/User");

const router = express.Router();

router.post("/", [adminAuth], async (req, res) => {
   const { class_id, user_id, status } = req.body;

   // verify if student exists
   const user = await User.findById(user_id);
   if (!user) return res.status(404).send({ error: "User not found" });

   // verify if class exists
   const classes = await Class.findById(class_id);
   if (!classes) return res.status(404).send({ error: "Class not found" });

   // Verify if student attendance is marked previously
   const isAttended = await Attendance.findOne({ class_id, user_id });
   if (isAttended)
      return res
         .status(200)
         .send({ message: "Student attendance record exists!" });

   const markAttendance = new Attendance({
      class_id,
      user_id,
      status,
   });
   try {
      await markAttendance.save();
   } catch (error) {
      return res.status(400).send({ error: error.message });
   }

   res.status(200).send({ message: `Student Attendance Recorded` });
});

module.exports = router;

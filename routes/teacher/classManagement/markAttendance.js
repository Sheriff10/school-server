const express = require("express");
const teacherAuth = require("../../../middleware/teachAuth");
const Attendance = require("../../../models/Attendance");
const Class = require("../../../models/Class");
const User = require("../../../models/User");

const router = express.Router();

router.post("/", [teacherAuth], async (req, res) => {
   const { class_id, user_id, date, status } = req.body;

   // verify if student exists
   const user = await User.findById(user_id);
   if (!user) return res.status(404).send({ error: "User not found" });

   // Verify if student attendance is marked previously
   const isAttended = await Attendance.findOne({ class_id, user_id });
   if (isAttended)
      return res
         .status(400)
         .send({ error: "Student attendance record exists!" });

   // Verify if class teacher
   const getClass = await Class.findById(class_id);
   const classTeacher = getClass.teacher_id;
   const teacherId = req.user.id;

   if (classTeacher !== teacherId)
      return res.status(400).send({ error: "Invalid class teacher" });

   const markAttendance = new Attendance({
      class_id,
      user_id,
      date,
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

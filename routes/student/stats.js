const express = require("express");
const studentAuth = require("../../middleware/studentAuth");
const Class = require("../../models/Class");
const Content = require("../../models/Content");
const Student = require("../../models/Student");
const Teacher = require("../../models/Teachers");

const router = express.Router();

router.get("/", studentAuth, async (req, res) => {
   const { limit } = req.query;


   // Student stats
   const user = req.user;
   const student = await Student.findOne({ user_id: user._id });
   const grade = student.personal_info.grade;
   const name = `${student.personal_info.firstname} ${student.personal_info.lastname}`;
   const classes = (await Class.find({ grade })).length;
   const stats = { grade, name, classes };

   
   // Announcement and Ongoing classes
   const announcement = await Content.find({ type: "announcement", recipient: "student" })
      .sort({ _id: -1 })
      .limit(limit);
   const ongoing_classes = await Class.find({ grade, class_status: "ongoing" });

   // Get Upcoming class
   const upcoming_class = await Class.find({ grade, class_status: "pending" }).limit(3);

   res.status(200).send({ stats, ongoing_classes, announcement, upcoming_class });
});

module.exports = router;

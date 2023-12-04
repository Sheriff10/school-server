const express = require("express");
const studentAuth = require("../../middleware/studentAuth");
const Class = require("../../models/Class");
const Student = require("../../models/Student");

const router = express.Router();

router.get("/", [studentAuth], async (req, res) => {
   const { limit, status, id } = req.query;
   const user = req.user;
   const student = await Student.findOne({ user_id: user._id });

   // console.log(student)

   if (id) {
      const classId = await Class.findById(id);
      return res.status(200).send({ classId });
   }
   if (status) {
      const classes = await Class.find({
         class_status: status,
         grade: student.personal_info.grade,
      })
         .limit(limit)
         .sort({ _id: -1 });
      return res.status(200).send({ classes });
   }
   const classes = await Class.find({ grade: student.personal_info.grade })
      .limit(limit)
      .sort({ _id: -1 });

   res.status(200).send({ classes });
});

module.exports = router;

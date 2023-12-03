const express = require("express");
const teacherAuth = require("../../../middleware/teachAuth");
const Class = require("../../../models/Class");
const Student = require("../../../models/Student");
const Teacher = require("../../../models/Teachers");

const router = express.Router();

router.get("/", teacherAuth, async (req, res) => {
   const user = req.user;
   const students = (await Student.find({})).length;
   const teachers = (await Teacher.find({})).length;
   const classes = (await Class.find({ _id: user._id })).length;

   res.status(200).send({ students, teachers, classes });
});

module.exports = router;

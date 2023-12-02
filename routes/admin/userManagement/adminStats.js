const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Class = require("../../../models/Class");
const Student = require("../../../models/Student");
const Teacher = require("../../../models/Teachers");

const router = express.Router();

router.get("/", adminAuth, async (req, res) => {
   const students = (await Student.find({})).length;
   const teachers = (await Teacher.find({})).length;
   const classes = (await Class.find({})).length;

   res.status(200).send({ students, teachers, classes });
});

module.exports = router;

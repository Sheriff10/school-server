const express = require("express");
const teacherAuth = require("../../../middleware/teachAuth");
const Student = require("../../../models/Student");

const router = express.Router();

router.get("/", teacherAuth, async (req, res) => {
   const students = await Student.find({});

   res.status(200).send(students.reverse());
});

module.exports = router;

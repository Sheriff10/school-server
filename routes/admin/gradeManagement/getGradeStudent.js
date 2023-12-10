const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Student = require("../../../models/Student");

const router = express.Router();

router.get("/", adminAuth, async (req, res) => {
   const { grade } = req.query;
   const gradeStudent = await Student.find({ "personal_info.grade": grade });

   console.log({ grade, gradeStudent });

   res.status(200).send(gradeStudent);
});

module.exports = router;

const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Student = require("../../../models/Student");

const router = express.Router();

router.get("/", adminAuth, async (req, res) => {
   const students = await Student.find({});

   res.status(200).send(students.reverse());
});

module.exports = router;

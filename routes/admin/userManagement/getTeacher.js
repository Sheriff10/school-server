const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Student = require("../../../models/Student");
const Teacher = require("../../../models/Teachers");

const router = express.Router();

router.get("/", adminAuth, async (req, res) => {
   const teachers = await Teacher.find({});

   res.status(200).send(teachers.reverse());
});

module.exports = router;

const { default: axios } = require("axios");
const express = require("express");
const adminAuth = require("../../middleware/adminAuth");
const studentAuth = require("../../middleware/studentAuth");
const Grade = require("../../models/Grade");
const Student = require("../../models/Student");
const User = require("../../models/User");

const router = express.Router();

router.get("/", [studentAuth], async (req, res) => {
   // const { grade } = req.query;
   try {
      const user = req.user;
      const student = await Student.findOne({ user_id: user._id });
      const user_id = student._id;

      // console.log(student.u);

      const userGrade = await Grade.find({
         user_id,
         grade: student.personal_info.grade,
      });

      return res.status(200).send(userGrade);
   } catch (error) {
      console.log(error);
      res.status(400).send({ error: error.message });
   }
});

module.exports = router;

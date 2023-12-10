const { default: axios } = require("axios");
const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const studentAuth = require("../../../middleware/studentAuth");
const Grade = require("../../../models/Grade");
const Student = require("../../../models/Student");
const User = require("../../../models/User");

const router = express.Router();

router.post("/", [studentAuth], async (req, res) => {
   const { grade } = req.query;
   try {
      const user = req.user
      const user_id = user._id;

      const userGrade = await Grade.find({ user_id, grade });

      res.status(200).send(userGrade);
   } catch (error) {
      console.log(error);
      res.status(400).send({ error: error.message });
   }

   res.status(200).send(gradeStudent);
});

module.exports = router;

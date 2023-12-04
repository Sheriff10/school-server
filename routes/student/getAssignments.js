const express = require("express");
const studentAuth = require("../../middleware/studentAuth");
const Content = require("../../models/Content");
const Student = require("../../models/Student");

const router = express.Router();

router.get("/", studentAuth, async (req, res) => {
   const { limit, id } = req.query;

   // get assignment by if
   if (id) {
      const assignment = await Content.findById(id);
      return res.status(200).send(assignment);
   }

   const user = req.user;
   const student = await Student.findOne({ user_id: user._id });
   const grade = student.personal_info.grade;

   const assignment = await Content.find({ type: "assignment", grade })
      .limit(limit)
      .sort({ _id: -1 });

   res.status(200).send({ assignment });
});
module.exports = router;

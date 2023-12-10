const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const teacherAuth = require("../../../middleware/teachAuth");
const Grade = require("../../../models/Grade");

const router = express.Router();

router.post("/", [adminAuth || teacherAuth], async (req, res) => {
   const { user_id, subject, student_grade, result, student_name } = req.body;

   // check if student grade is recorded previously

   const checkIsRecorded = await Grade.findOne({ user_id, subject });
   if (checkIsRecorded)
      return res.status(400).send({ error: "Grade data exists already" });

   try {
      const grade = new Grade({
         user_id,
         subject,
         grade: student_grade,
         result,
         student_name,
      });
      await grade.save();

      res.status(200).send({ message: "New result recorded" });
   } catch (error) {
      res.status(400).send({ error: error.message });
   }
});

module.exports = router;

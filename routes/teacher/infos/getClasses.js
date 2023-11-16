const express = require("express");
const teacherAuth = require("../../../middleware/teachAuth");
const Class = require("../../../models/Class");

const router = express.Router();

router.get("/", [teacherAuth], async (req, res) => {
   const teacherId = req.user.id;
   const teacherClasses = await Class.find({ teacher_id: teacherId });

   if (!teacherClasses)
      return res.status(404).send({ error: "Class Not Found" });

   res.status(200).send({ teacherClasses });
});

module.exports = router;

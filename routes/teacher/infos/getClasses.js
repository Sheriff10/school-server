const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const teacherAuth = require("../../../middleware/teachAuth");
const Class = require("../../../models/Class");

const router = express.Router();

router.get("/", [teacherAuth], async (req, res) => {
   const { limit, status, id } = req.query;
   const teacher_id = req.user._id;
   console.log(teacher_id)

   if (id) {
      const classId = await Class.findOne({ _id: id });
      return res.status(200).send({ classId });
   }
   if (status) {
      const classes = await Class.find({ class_status: status, teacher_id })
         .limit(limit)
         .sort({ _id: -1 });
      return res.status(200).send({ classes });
   }
   const classes = await Class.find({ teacher_id })
      .limit(limit)
      .sort({ _id: -1 });

   res.status(200).send({ classes });
});

module.exports = router;

const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Class = require("../../../models/Class");

const router = express.Router();

router.get("/", adminAuth, async (req, res) => {
   const { class_name, teacher_id, day, time, grade } = req.body;
   const newClass = new Class({
      class_name,
      teacher_id,
      grade,
      class_schedule: [{ day, time }],
   });

   await newClass.save();

   res.status(200).send({ message: "New content added" });
});

module.exports = router;

const express = require("express");
const teacherAuth = require("../../../middleware/teachAuth");
const Student = require("../../../models/Student");
const User = require("../../../models/User");

const router = express.Router();

router.get("/:id", [teacherAuth], async (req, res) => {
   const { id } = req.params;

   const isUser = await User.findById(id);
   if (!isUser) return res.status(404).send({ error: "User not found" });
   const studentData = await Student.findOne({ user_id: id });

   res.status(200).send({studentData})
});

module.exports = router;

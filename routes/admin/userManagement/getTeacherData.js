const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const teacherAuth = require("../../../middleware/teachAuth");
const Student = require("../../../models/Student");
const Teacher = require("../../../models/Teachers");
const User = require("../../../models/User");

const router = express.Router();

router.get("/:id", [adminAuth], async (req, res) => {
   const { id } = req.params;
   const isUser = await User.findById(id);
   if (!isUser) return res.status(404).send({ error: "User not found" });
   const teacherData = await Teacher.findOne({ user_id: id });
   console.log(teacherData);

   res.status(200).send({ teacherData });
});

module.exports = router;

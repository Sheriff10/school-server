const express = require("express");
const adminAuth = require("../../middleware/adminAuth");
const Student = require("../../models/Student");
const Teacher = require("../../models/Teachers");
const User = require("../../models/User");

const router = express.Router();

router.post("/:id/:role", [adminAuth], async (req, res) => {
   const { id, role } = req.params;
   await User.findByIdAndDelete(id);

   if (role === "teacher") await Teacher.findByIdAndDelete(id);
   if (role === "student") await Student.findByIdAndDelete(id);

   return res.status(200).send("User deleted");
   // gets id, find it and deletes it...
});

module.exports = router;

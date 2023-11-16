const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Student = require("../../../models/Student");
const Teacher = require("../../../models/Teachers");
const User = require("../../../models/User");

const router = express.Router();

router.post("/:role/:user_id", [adminAuth], async (req, res) => {
   const { user_id, role } = req.params;

   const user = User.findById(user_id);
   if (!user) return res.status(404).send({ error: "User Not Found" });

   // Delete user from User Collection and other collection.
   await User.findByIdAndDelete(user_id);
   if (role === "teacher") await Teacher.deleteOne({ user_id });
   if (role === "student") await Student.deleteOne({ user_id });

   return res.status(200).send("User deleted");
   // gets id, find it and deletes it...
});

module.exports = router;

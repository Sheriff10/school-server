const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Student = require("../../../models/Student");
const User = require("../../../models/User");

const router = express.Router();

router.post("/", [adminAuth], async (req, res) => {
   const { username, password, role, firstname, lastname, address, grade, dob } =
      req.body;

   // New User
   const newUser = new User({
      username,
      password,
      role,
   });

   // Save the user and wait for the result
   const user = await newUser.save();

   const userId = user._id;

   const newStudent = new Student({
      user_id: userId,
      personal_info: {
         firstname,
         lastname,
         address,
         grade,
         dob,
      },
   });

   // Save the student and wait for the result
   await newStudent.save();

   res.status(200).send({ message: "New student created" });
});

module.exports = router;

const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const bcrypt = require("bcrypt");
const Student = require("../../../models/Student");
const User = require("../../../models/User");

const router = express.Router();

router.post("/", [adminAuth], async (req, res) => {
   const {
      username,
      password,
      role,
      firstname,
      lastname,
      address,
      grade,
      dob,
   } = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);

   try {
      // New User
      const newUser = new User({
         username,
         password: hashedPassword,
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
   } catch (error) {
      res.status(400).send({ error: error.message });
   }

   res.status(200).send({ message: "New student created" });
});

module.exports = router;

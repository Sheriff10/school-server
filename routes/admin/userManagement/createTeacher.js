const express = require("express");
const adminAuth = require("../../middleware/adminAuth");
const Teacher = require("../../models/Teachers");
const User = require("../../models/User");

const router = express.Router();

router.post("/", [adminAuth], async (req, res) => {
   const {
      username,
      password,
      role,
      firstname,
      lastname,
      address,
      email,
      phone,
      dob,
   } = req.body;

   try {
      // New User
      const newUser = new User({
         username,
         password,
         role,
      });

      // Save the user and wait for the result
      const user = await newUser.save();

      const userId = user._id;

      const newTeacher = new Teacher({
         user_id: userId,
         personal_info: {
            firstname,
            lastname,
            address,
            email,
            phone,
            dob,
         },
      });

      // Save the Teacher and wait for the result
      await newTeacher.save();
   } catch (error) {
      res.status(400).send({ error: error.message });
   }
   res.status(200).send({ message: "New Teacher created" });
});

module.exports = router;

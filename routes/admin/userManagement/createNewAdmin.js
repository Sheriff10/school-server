const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const User = require("../../../models/User");

const router = express.Router();

router.post("/", [adminAuth], async (req, res) => {
   const { username, password, role } = req.body;

   try {
      // New User
      const newUser = new User({
         username,
         password,
         role,
         permissions: ["readWrite"],
      });

      // Save the user and wait for the result
      const user = await newUser.save();
   } catch (error) {
      return res.status(400).send({ error: error.message });
   }

   res.status(200).send({ message: "New Teacher created" });
});

module.exports = router;

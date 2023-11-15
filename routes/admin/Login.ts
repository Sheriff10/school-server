const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const Token = require("../../utils/generateToken");

const router = express.Router();

router.post("/", async (req, res) => {
   // get username and password
   const { username, password } = req.body;

   // find the user
   const isUser = await User.findOne({ username });
   if (!isUser) return res.status(404).send({ message: "Invalid Credentials" }); // if user not found

   // get hashed password compare it to req password
   const encryptedPassword = isUser.password;
   const isPasswordValid = await bcrypt.compare(password, encryptedPassword);
   if (!isPasswordValid)
      return res.status(404).send({ message: "Invalid Credentials" }); // if password not valid

   // generate token
   const userRole = isUser.role;
   const generateToken = new Token();

   let token;

   switch (userRole) {
      case "teacher":
         token = generateToken.teacherToken(username);
         break;
      case "student":
         token = generateToken.studentToken(username);
         break;
      case "dev":
      case "administrator":
         token = generateToken.adminToken(username);
         break;
      default:
         break;
   }

   const userToken = `${isUser.role}-token`;

   res.header(userToken, token);
   res.header("Access-Control-Expose-Headers", userToken);
   res.send({ message: "Authenticated" });
});

module.exports = router;

const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Content = require("../../../models/Content");
const Student = require("../../../models/Student");
const emailHandler = require("../../../utils/nodemailer");

const router = express.Router();

router.post("/", adminAuth, async (req, res) => {
   const { type, title, description, link, recipient } = req.body;
   const role = req.user.role;
   const user_id = req.user._id;
   try {
      const newContent = new Content({
         type,
         title,
         description,
         link,
         role,
         recipient,
         user_id,
      });

      // send email to parent if recipient is parent
      if (recipient === "parent") {
         const students = await Student.find({});

         const parentEmail = students.map((i) => {
            return i.personal_info.parentEmail;
         });
         console.log(parentEmail);
         await emailHandler(title, description, parentEmail);
      }

      await newContent.save();
   } catch (error) {
      return res.status(400).send({ error: error.message });
   }

   res.status(200).send({ message: "New content added" });
});

module.exports = router;

const express = require("express");
const studentAuth = require("../../middleware/studentAuth");
const Content = require("../../models/Content");

const router = express.Router();

router.post("/", studentAuth, async (req, res) => {
   const { type, title, description, link } = req.body;
   const role = req.user.role
   const user_id = req.user._id
   const newContent = new Content({
      type,
      title,
      description,
      link,
      role,
      user_id
   });
   try {
      await newContent.save();
   } catch (error) {
      return res.status(400).send({ error: error.message });
   }

   res.status(200).send({ message: "New content added" });
});

module.exports = router;

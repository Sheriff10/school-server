const express = require("express");
const teacherAuth = require("../../../middleware/teachAuth");
const Content = require("../../../models/Content");

const router = express.Router();

// teacher can create assignment, project etc... for  students and drop 
// the content 
router.post("/", [teacherAuth], async (req, res) => {
   const { type, title, description, link } = req.body;
   const newContent = new Content({
      type,
      title,
      description,
      link,
   });
   try {
      await newContent.save();
   } catch (error) {
      return res.status(400).send({ error: error.message });
   }

   res.status(200).send({ message: `New ${type} added` });
});

module.exports = router;

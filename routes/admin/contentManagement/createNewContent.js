const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Content = require("../../../models/Content");

const router = express.Router();

router.post("/", adminAuth, async (req, res) => {
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

   res.status(200).send({ message: "New content added" });
});

module.exports = router;

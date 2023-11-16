const express = require("express");
const teacherAuth = require("../../../middleware/teachAuth");
const Content = require("../../../models/Content");

const router = express.Router();

// teacher can create assignment, project etc... for  students and drop
// the content
router.post("/", [teacherAuth], async (req, res) => {
   const { id, key, value } = req.body;

   const isIdValid = await Content.findById(id);
   if (!isIdValid) return res.status(400).send({ error: "Invalid ID" });
   try {
      await Content.findByIdAndUpdate(id, { [key]: value });
   } catch (error) {
      return res.status(400).send({ error: error.message });
   }
   res.status(200).send({ message: `${key} field value is now: ${value}` });
});

module.exports = router;

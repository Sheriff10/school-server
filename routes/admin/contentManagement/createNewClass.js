const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Class = require("../../../models/Class");

const router = express.Router();

router.post("/", adminAuth, async (req, res) => {
   const { class_name, teacher_id, grade, class_begin, class_ends } = req.body;
   try {
      const newClass = new Class({
         class_name,
         teacher_id,
         grade,
         class_begin,
         class_ends,
      });c

      await newClass.save();
   } catch (error) {
      return res.status(400).send({ error: error.message });
   }

   res.status(200).send({ message: "New content added" });
});

module.exports = router;

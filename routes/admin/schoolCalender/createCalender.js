const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const SchoolCalendarEvent = require("../../../models/Calender");

const router = express.Router();

router.post("/", [adminAuth], async (req, res) => {
   const { title, description, date, type } = req.body;

   const newCalender = new SchoolCalendarEvent({
      title,
      description,
      date,
      type,
   });

   try {
      await newCalender.save();
   } catch (error) {
      return res.send({ error: error.message });
   }
   res.status(200).send({ message: "Calender Created Successfully" });

});

module.exports = router;

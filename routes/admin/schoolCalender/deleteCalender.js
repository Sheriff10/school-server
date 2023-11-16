const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const SchoolCalendarEvent = require("../../../models/Calender");

const router = express.Router();

router.post("/", [adminAuth], async (req, res) => {
   const { id } = req.body;
   const result = await SchoolCalendarEvent.findByIdAndDelete(id);
   if (!result) res.send({ error: "Calender not found" });
   res.status(200).send({ message: "Calender Deleted Successfully" });
});

module.exports = router;

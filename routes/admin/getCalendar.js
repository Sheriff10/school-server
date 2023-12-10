const express = require("express");
const SchoolCalendarEvent = require("../../models/Calender");

const router = express.Router();

router.get("/", async (req, res) => {
   const { limit } = req.query;
   const calender = await SchoolCalendarEvent.find({})
      .limit(limit)
      .sort({ _id: -1 });
   res.status(200).send(calender);
});

module.exports = router;

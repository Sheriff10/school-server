const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const SchoolCalendarEvent = require("../../../models/Calender");

const router = express.Router();

router.post("/", [adminAuth], async (req, res) => {
   const { id, key, value } = req.body;
   try {
      // check if calender id exists
      const calender = await SchoolCalendarEvent.findById(id);
      if (!calender)
         return res.status(404).send({ error: "Calender not found" });

      // update caleneder
      await SchoolCalendarEvent.findByIdAndUpdate(id, { [key]: value });
      res.status(200).send({
         message: `${key} field changed to "${value}" Successfully`,
      });
   } catch (error) {
      return res.status(400).send({ error: error.message });
   }
});

module.exports = router;

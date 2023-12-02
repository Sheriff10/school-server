const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Class = require("../../../models/Class");

const router = express.Router();

router.get("/", adminAuth, async (req, res) => {
   const { limit } = req.query;
   console.log(limit)
   const ongoingClasses = await Class.find({ class_status: "ongoing" }).limit(
      limit
   );

   res.status(200).send(ongoingClasses);
});

module.exports = router;

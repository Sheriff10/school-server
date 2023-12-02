const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Class = require("../../../models/Class");

const router = express.Router();

router.get("/", [adminAuth], async (req, res) => {
   const { limit, status, id } = req.query;
   if (id) {
      const classId = await Class.findById(id)
      return res.status(200).send({ classId });
   }
   if (status) {
      const classes = await Class.find({ class_status: status })
         .limit(limit)
         .sort({ _id: -1 });
      return res.status(200).send({ classes });
   }
   const classes = await Class.find({}).limit(limit).sort({ _id: -1 });

   res.status(200).send({ classes });
});

module.exports = router;

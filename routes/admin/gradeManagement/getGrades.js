const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Grade = require("../../../models/Grade");
const Student = require("../../../models/Student");

const router = express.Router();

router.get("/", adminAuth, async (req, res) => {
   const { grade } = req.query;
   console.log(grade);

   const grades = await Grade.find({ grade }).sort({ _id: -1 });

   res.status(200).send(grades);
});

module.exports = router;

const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const teacherAuth = require("../../../middleware/teachAuth");
const Class = require("../../../models/Class");

const router = express.Router();

router.post("/:id/:status", teacherAuth, async (req, res) => {
   const { status, id } = req.params;

   await Class.findByIdAndUpdate(id, { class_status: status });

   res.status(200).send({ message: "Class Updated" });
});

module.exports = router;

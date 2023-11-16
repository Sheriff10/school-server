const express = require("express");
const teacherAuth = require("../../../middleware/teachAuth");
const Class = require("../../../models/Class");

const router = express.Router();

router.update("/", [teacherAuth], async (req, res) => {
   const { class_id, user_id } = req.body;
   await Class.findByIdAndUpdate(
      class_id,
      {
         $push: { class_roster: user_id },
      },
      { new: true }
   );

   res.send({message: "Student added to roaster"})
});

module.exports = router;

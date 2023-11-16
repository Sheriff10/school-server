const Student = require("../../../models/Student");
const Teacher = require("../../../models/Teachers");
const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Content = require("../../../models/Content");
const User = require("../../../models/User");

const router = express.Router();

router.post("/", adminAuth, async (req, res) => {
   const { value, key, user_id, role } = req.body;

   // find if user exist
   // Find if user exists
   const user = await User.findById(user_id);
   if (!user) {
      return res.status(404).send({ error: "User Not Found" });
   }

   let updatedModel;

   switch (role) {
      case "teacher":
         updatedModel = await Teacher.updateOne(
            { user_id },
            { $set: { [key]: value } }
         );
         break;

      case "student":
         updatedModel = await Student.updateOne(
            { user_id },
            { $set: { [key]: value } }
         );
         break;

      default:
         return res.status(400).send({ error: "Invalid Role" });
   }

   if (!updatedModel) {
      return res.status(404).send({ error: `${updatedModel} Not Found` });
   }

   res.status(202).send({
      message: `${key} field new data is: ${value}`,
   });
});

module.exports = router;

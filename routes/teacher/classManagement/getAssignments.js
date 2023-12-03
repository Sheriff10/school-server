const express = require("express");

const teacherAuth = require("../../../middleware/teachAuth");
const Content = require("../../../models/Content");

const router = express.Router();

router.get("/", teacherAuth, async (req, res) => {
   const { limit, id } = req.query;
   const { role, _id } = req.user;

   if (id) {
      const assignment = await Content.findById(id);
      return res.status(200).send(assignment);
   }

   console.log(_id);

   const assignment = await Content.find({ role, user_id: _id }).sort({ _id: -1 }).limit(limit);
   res.status(200).send(assignment);
});

module.exports = router;

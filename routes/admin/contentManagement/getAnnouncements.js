const express = require("express");
const adminAuth = require("../../../middleware/adminAuth");
const Content = require("../../../models/Content");

const router = express.Router();

router.get("/", adminAuth, async (req, res) => {
   const { limit, id } = req.query;
   const { role, _id } = req.user;

   if (id) {
      const announcement = await Content.findById(id);
      return res.status(200).send(announcement);
   }

   console.log(_id);

   const announcement = await Content.find({ role, user_id: _id }).sort({ _id: -1 }).limit(limit);
   res.status(200).send(announcement);
});

module.exports = router;

const express = require("express");
const adminAuth = require("../../middleware/adminAuth");
const Content = require("../../models/Content");
const studentAuth = require("../../middleware/studentAuth");

const router = express.Router();

router.get("/", studentAuth, async (req, res) => {
   const { limit, id } = req.query;
   const { role, _id } = req.user;

   if (id) {
      const message = await Content.findById(id);
      return res.status(200).send(message);
   }
   const message =  await Content.find({ type: "message", user_id: _id }).limit(limit).sort({ _id: -1 });
   res.status(200).send(message);
});

module.exports = router;

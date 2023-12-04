const express = require("express");
const adminAuth = require("../../middleware/adminAuth");
const Content = require("../../models/Content");
const studentAuth = require("../../middleware/studentAuth");

const router = express.Router();

router.get("/", studentAuth, async (req, res) => {
   const { limit, id } = req.query;
   // const { role, _id } = req.user;

   if (id) {
      const announcement = await Content.findById(id);
      return res.status(200).send(announcement);
   }
   res.status(404).send({error: "Bad Request"})
});

module.exports = router;

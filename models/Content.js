const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
   type: {
      type: String,
      enum: [
         "announcement",
         "news",
         "event",
         "resource",
         "schedule",
         "assignment",
         "exam",
         "message",
         "projects",
      ],
      required: true,
   },
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   grade: String,
   link: {
      type: String,
   },
   role: {
      type: String,
      required: true,
   },
   user_id: {
      type: String,
      required: true,
   },
   date: {
      type: Date,
      default: Date.now,
   },
});

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;

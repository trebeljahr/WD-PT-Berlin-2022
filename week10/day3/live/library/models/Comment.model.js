const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  message: String,
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "book" },
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = { Comment };

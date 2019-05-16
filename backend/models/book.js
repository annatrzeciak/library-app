const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  author: { type: String, required: true },
  ISBN: { type: String, required: true }
});

module.exports = mongoose.model("Book", bookSchema);

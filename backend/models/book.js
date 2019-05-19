const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  author: { type: String, required: true },
  ISBN: { type: String, required: true },
  reader: {type: String}
});

module.exports = mongoose.model("Book", bookSchema);

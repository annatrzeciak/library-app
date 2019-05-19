const mongoose = require("mongoose");

const readerSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String },
  books: { type: Array }
});

module.exports = mongoose.model("Reader", readerSchema);

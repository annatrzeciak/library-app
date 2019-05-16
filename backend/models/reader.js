const mongoose = require("mongoose");

const readerSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String }
});

module.exports = mongoose.model("Reader", readerSchema);

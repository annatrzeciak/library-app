const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  email: { type: String, required: true },
  message: { type: Number, required: true }
});

module.exports = mongoose.model("Message", messageSchema);

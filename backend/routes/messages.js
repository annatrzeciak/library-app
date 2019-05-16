const express = require("express");
const router = express.Router();
const Message = require("../models/message");

router.get("", (req, res, next) => {
  Message.find().then(documents => {
    res.status(200).json({
      messages: documents.map(item => {
        return {
          id: item._id,
          email: item.email,
          message: item.releaseYear
        };
      })
    });
  });
});

module.exports = router;

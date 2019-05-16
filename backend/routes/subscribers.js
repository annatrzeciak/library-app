const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

router.get("", (req, res, next) => {
  Subscriber.find().then(documents => {
    res.status(200).json({
      subscribers: documents.map(item => {
        return {
          id: item._id,
          email: item.email
        };
      })
    });
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Reader = require("../models/reader");

router.get("", (req, res, next) => {
  Reader.find().then(documents => {
    res.status(200).json({
      readers: documents.map(item => {
        return {
          id: item._id,
          firstName: item.firstName,
          lastName: item.lastName,
          address: item.address,
          phone: item.phone
        };
      })
    });
  });
});

module.exports = router;

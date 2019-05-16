const express = require("express");
const router = express.Router();
const Reader = require("../models/reader");

//load all readers from db
router.get("", (req, res, next) => {
  //find all readers in db
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

//save new reader in db
router.post("", (req, res, next) => {
  const reader = new Reader({
    firstName: req.body.reader.firstName,
    lastName: req.body.reader.lastName,
    address: req.body.reader.address,
    phone: req.body.reader.phone
  });
  reader.save().then(() => {
    console.log("Reader added successfully");
    res.status(201);
  })
});

module.exports = router;

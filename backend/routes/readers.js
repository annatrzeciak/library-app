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
  reader.save().then((item) => {
    console.log("Reader added successfully");
    res.status(201).json({
      reader: {
        id: item._id,
        firstName: item.firstName,
        lastName: item.lastName,
        address: item.address,
        phone: item.phone
      }
    });
  });
});

//load only one reader (by id)
router.get("/:id", (req, res, next) => {
  Reader.findById(req.params.id).then(item => {
    if (item) {
      console.log("Reader found");
      res.status(200).json({
        reader: {
          id: item._id,
          firstName: item.firstName,
          lastName: item.lastName,
          address: item.address,
          phone: item.phone
        }
      });
    } else {
      console.log("Reader not found");
      res.status(404);
    }
  });
});

//update reader
router.put("/:id", (req, res, next) => {
  const reader = new Reader({
    _id: req.params.id,
    firstName: req.body.reader.firstName,
    lastName: req.body.reader.lastName,
    address: req.body.reader.address,
    phone: req.body.reader.phone
  });
  Reader.updateOne({ _id: req.params.id }, reader).then(item => {
    console.log('Reader updated');
    res.status(200).json({
      reader: {
        id: item._id,
        firstName: item.firstName,
        lastName: item.lastName,
        address: item.address,
        phone: item.phone
      }
    });
  });
});

//delete reader
router.delete("/:id", (req, res, next) => {
  Reader.deleteOne({ _id: req.params.id }).then(result => {
    console.log('Reader deleted');
    res.status(200);
  });
});
module.exports = router;

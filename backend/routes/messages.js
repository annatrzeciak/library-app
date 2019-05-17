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
          message: item.message
        };
      })
    });
  });
});


//save new message in db
router.post("", (req, res, next) => {
  const message = new Message({
    email: req.body.message.email,
    message: req.body.message.message,
  });
  message.save().then((item) => {
    console.log("Message added successfully");
    res.status(201).json({
      message: {
        id: item._id,
          email: item.email,
          message: item.message
      }
    });
  });
});

//load only one message (by id)
router.get("/:id", (req, res, next) => {
  Message.findById(req.params.id).then(item => {
    if (item) {
      console.log("Message found");
      res.status(200).json({
        message: {
          id: item._id,
          email: item.email,
          message: item.message
        }
      });
    } else {
      console.log("Message not found");
      res.status(404);
    }
  });
});

//update message
router.put("/:id", (req, res, next) => {
  const message = new Message({
    _id: req.params.id,
    email: req.body.message.email,
    message: req.body.message.message
  });
  Message.updateOne({ _id: req.params.id }, message).then(item => {
    console.log('Message updated');
    res.status(200).json({
      message: {
        id: item._id,
        email: item.email,
        message: item.message
      }
    });
  });
});

//delete message
router.delete("/:id", (req, res, next) => {
  Message.deleteOne({ _id: req.params.id }).then(result => {
    console.log('Message deleted');
    res.status(200);
  });
});

module.exports = router;

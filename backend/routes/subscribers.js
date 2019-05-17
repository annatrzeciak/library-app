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


//save new subscriber in db
router.post("", (req, res, next) => {
  const subscriber = new Subscriber({
    email: req.body.subscriber.email,
  });
  subscriber.save().then((item) => {
    console.log("Subscriber added successfully");
    res.status(201).json({
      subscriber: {
        id: item._id,
        email: item.email,
      }
    });
  });
});

//load only one subscriber (by id)
router.get("/:id", (req, res, next) => {
  Subscriber.findById(req.params.id).then(item => {
    if (item) {
      console.log("Subscriber found");
      res.status(200).json({
        subscriber: {
          id: item._id,
          email: item.email,
        }
      });
    } else {
      console.log("Subscriber not found");
      res.status(404);
    }
  });
});

//update subscriber
router.put("/:id", (req, res, next) => {
  const subscriber = new Subscriber({
    _id: req.params.id,
    email: req.body.subscriber.email,
  });
  Subscriber.updateOne({ _id: req.params.id }, subscriber).then(item => {
    console.log('Subscriber updated');
    res.status(200).json({
      subscriber: {
        id: item._id,
        email: item.email,
      }
    });
  });
});

//delete subscriber
router.delete("/:id", (req, res, next) => {
  Subscriber.deleteOne({ _id: req.params.id }).then(result => {
    console.log('Subscriber deleted');
    res.status(200);
  });
});

module.exports = router;

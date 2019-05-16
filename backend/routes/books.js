const express = require("express");
const router = express.Router();
const Book = require("../models/book");

router.get("", (req, res, next) => {
  Book.find().then(documents => {
    res.status(200).json({
      books: documents.map(item => {
        return {
          id: item._id,
          title: item.title,
          releaseYear: item.releaseYear,
          author: item.author,
          ISBN: item.ISBN
        };
      })
    });
  });
});

module.exports = router;

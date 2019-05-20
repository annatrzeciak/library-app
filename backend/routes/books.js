const express = require("express");
const router = express.Router();
const Book = require("../models/book");

router.get("", (req, res, next) => {
  var pageSize;
  var currentPage;
  if (req.query.page) {
    pageSize = +req.query.page.size;
    currentPage = +req.query.page.number;
  }
  const bookQuery = Book.find();
  let fatchedBooks;
  if (pageSize || currentPage) {
    bookQuery
      //don't load (pageSize * (currentPage + 1)) posts
      .skip(pageSize * (currentPage - 1))
      // get only (pageSize) posts
      .limit(pageSize);
  }
  bookQuery
    .then(documents => {
      fatchedBooks = documents;
      return Book.countDocuments();
    })
    .then(count => {
      res.status(200).json({
        books: fatchedBooks.map(item => {
          return {
            id: item._id,
            title: item.title,
            releaseYear: item.releaseYear,
            author: item.author,
            ISBN: item.ISBN,
            reader: item.reader
          };
        }),
        meta: {
          count: count,
          page: currentPage,
          size: pageSize
        }
      });
    });
});

//save new book in db
router.post("", (req, res, next) => {
  const book = new Book({
    title: req.body.book.title,
    releaseYear: req.body.book.releaseYear,
    author: req.body.book.author,
    ISBN: req.body.book.ISBN,
    reader: req.body.book.reader
  });
  book.save().then(item => {
    console.log("Book added successfully");
    res.status(201).json({
      book: {
        id: item._id,
        title: item.title,
        releaseYear: item.releaseYear,
        author: item.author,
        ISBN: item.ISBN,
        reader: item.reader
      }
    });
  });
});

//load only one reader (by id)
router.get("/:id", (req, res, next) => {
  Book.findById(req.params.id).then(item => {
    if (item) {
      console.log("Book found");
      res.status(200).json({
        book: {
          id: item._id,
          title: item.title,
          releaseYear: item.releaseYear,
          author: item.author,
          ISBN: item.ISBN,
          reader: item.reader
        }
      });
    } else {
      console.log("Book not found");
      res.status(404);
    }
  });
});

//update book
router.put("/:id", (req, res, next) => {
  const book = new Book({
    _id: req.params.id,
    title: req.body.book.title,
    releaseYear: req.body.book.releaseYear,
    author: req.body.book.author,
    ISBN: req.body.book.ISBN,
    reader: req.body.book.reader
  });
  Book.updateOne({ _id: req.params.id }, book).then(item => {
    console.log("Book updated");
    res.status(200).json({
      book: {
        id: item._id,
        title: item.title,
        releaseYear: item.releaseYear,
        author: item.author,
        ISBN: item.ISBN,
        reader: item.reader
      }
    });
  });
});

//delete book
router.delete("/:id", (req, res, next) => {
  Book.deleteOne({ _id: req.params.id }).then(result => {
    console.log("Book deleted");
    res.status(200);
  });
});

module.exports = router;

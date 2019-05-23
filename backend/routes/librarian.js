const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Librarian = require("../models/librarian");

const router = express.Router();

router.post("", (req, res, next) => {
  bcrypt.hash(req.body.librarian.password, 10).then(hash => {
    const librarian = new Librarian({
      firstName: req.body.librarian.firstName,
      lastName: req.body.librarian.lastName,
      email: req.body.librarian.email,
      password: hash
    });
    librarian
      .save()
      .then(result => {
        console.log('Librarian created')
        res.status(201).json({
          librarian: result,
          meta: {
            message: "Librarian created"
          }
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

router.post("/login", (req, res, next) => {
  let fetchedLibrarian;
  Librarian.findOne({ email: req.body.email })
    .then(librarian => {
      if (!librarian) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedLibrarian = librarian;
      return bcrypt.compare(req.body.password, librarian.password);
    })
    .then(result => {
      console.log(result);

      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedLibrarian.email, librarianId: fetchedLibrarian._id },
        "veryVerySecretKey",
        { expiresIn: "1min" }
      );
      return res.status(200).json({
        token: token,
        exp: ((new Date()).getTime() + 60*1000)
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(401).json({
        message: "Auth failed"
      });
    });
});

module.exports = router;

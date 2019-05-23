const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const readersRoutes = require("./routes/readers");
const booksRoutes = require("./routes/books");
const messagesRoutes = require("./routes/messages");
const subscribersRoutes = require("./routes/subscribers");
const librarianRoutes = require("./routes/librarian");


const app = express();
mongoose
  .connect(
    "mongodb+srv://ania:xOMOQEjv83105hSN@cluster0-cr7xd.mongodb.net/test?retryWrites=true"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/readers", readersRoutes);
app.use("/api/books", booksRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/subscribers", subscribersRoutes);
app.use("/api/librarian", librarianRoutes);


module.exports = app;

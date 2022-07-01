const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cardRouter = require("./routes/cardRouter");
const app = express();
//define the vars
require("dotenv").config();
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3001;
//handle the app modules
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/cards", cardRouter);
// error handler middleware
app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});
// handle the database and the server running
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("database connected!");
    app.listen(PORT);
  })
  .catch((e) => {
    console.log("cannot connect to the database");
    console.log(e.message);
  });

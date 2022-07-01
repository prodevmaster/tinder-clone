const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    name: String,
    imgUrl: String,
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("cards", cardSchema);
module.exports = Card;

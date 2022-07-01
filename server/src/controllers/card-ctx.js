const Card = require("../models/card");

const createCard = async (req, res, next) => {
  const body = req.body;
  try {
    const newCard = await Card.create(body);
    res.status(201).send(newCard);
  } catch (e) {
    next(e);
  }
};

const getCards = async (req, res, next) => {
  try {
    const cards = await Card.find();
    res.status(200).send(cards);
  } catch (e) {
    next(e);
  }
};

module.exports = { createCard, getCards };

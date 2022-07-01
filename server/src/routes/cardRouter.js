const { Router } = require("express");
const { createCard, getCards } = require("../controllers/card-ctx");
const router = Router();

router.post("/", createCard);
router.get("/", getCards);

module.exports = router;

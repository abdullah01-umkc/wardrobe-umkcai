const express = require("express");
const router = express.Router();
const { getOutfitRecommendation } = require("../controllers/outfitController");

router.post("/", getOutfitRecommendation);

module.exports = router;
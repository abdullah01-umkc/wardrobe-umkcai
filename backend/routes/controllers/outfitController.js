const Outfit = require("../models/Outfit");
const { retrieveOutfitSuggestions } = require("../RAG_pipeline");

exports.getOutfitRecommendation = async (req, res) => {
  try {
    const { event } = req.body;
    const recommendation = await retrieveOutfitSuggestions(event);
    res.status(200).json({ event, recommendation });
  } catch (error) {
    res.status(500).json({ message: "Error fetching outfit recommendations." });
  }
};
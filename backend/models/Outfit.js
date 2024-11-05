const mongoose = require("mongoose");

const outfitSchema = new mongoose.Schema({
  event: String,
  recommendation: String,
});

module.exports = mongoose.model("Outfit", outfitSchema);
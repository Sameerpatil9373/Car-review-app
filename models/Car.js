const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },           // e.g. "Hyundai Creta"
  brand: { type: String, required: true },          // e.g. "Hyundai"
  slug: { type: String, required: true, unique: true }, // e.g. "hyundai-creta"
  segment: String,                                  // SUV, Hatchback, etc.
  fuelTypes: [String],                              // ["Petrol", "Diesel"]
  transmissionTypes: [String],                      // ["Manual", "Automatic"]
  priceMin: Number,
  priceMax: Number,
  mileage: Number,
  image: String                                     // image URL
});

module.exports = mongoose.model("Car", carSchema);

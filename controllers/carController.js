const Car = require("../models/Car");

// GET all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cars" });
  }
};

// SEARCH cars
exports.searchCars = async (req, res) => {
  try {
    const query = req.query.q;

    const cars = await Car.find({
      name: { $regex: query, $options: "i" },
    });

    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Search error" });
  }
};

// GET car by ID
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: "Car not found" });
  }
};

const express = require("express");
const router = express.Router();
const { getAllCars, searchCars, getCarById } = require("../controllers/carController");

router.get("/", getAllCars);
router.get("/search", searchCars);
router.get("/:id", getCarById);

module.exports = router;

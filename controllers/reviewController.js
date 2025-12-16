import Review from "../models/Review.js";

// Add review
export const addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all reviews for a car
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ carId: req.params.id });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

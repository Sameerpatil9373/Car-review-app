const express = require("express");
const Review = require("../models/Review");
const upload = require("../middleware/upload");

const router = express.Router();

// 👇 CAR-SPECIFIC REVIEWS
router.get("/cars/:slug/reviews", async (req, res) => {
  try {
    const { slug } = req.params;
    const reviews = await Review.find({ carSlug: slug }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    console.error("Error fetching reviews:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post(
  "/cars/:slug/reviews",
  upload.array("images", 5),
  async (req, res) => {
    try {
      const { slug } = req.params;
      const { userName, rating, title, comment } = req.body;

      let imageUrls = [];
      if (req.files) {
        imageUrls = req.files.map((file) => `/uploads/${file.filename}`);
      }

      const review = await Review.create({
        carSlug: slug,
        userName,
        rating,
        title,
        comment,
        images: imageUrls,
      });

      res.status(201).json(review);
    } catch (err) {
      console.error("Error creating review:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// 👇 LATEST REVIEWS
// GET latest reviews (for homepage)
router.get("/reviews/latest", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 6;

    const reviews = await Review.find()
      .sort({ createdAt: -1 }) // latest first
      .limit(limit);

    res.json(reviews);
  } catch (err) {
    console.error("Error fetching latest reviews:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ⭐ Rating Summary for a specific car
router.get("/reviews/summary/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const reviews = await Review.find({ carSlug: slug });

    if (reviews.length === 0) {
      return res.json({
        avg: 0,
        count: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        breakdown: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
      });
    }

    const count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    reviews.forEach((r) => {
      count[r.rating]++;
    });

    const total = reviews.length;
    const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / total;

    const breakdown = {};
    for (let star = 1; star <= 5; star++) {
      breakdown[star] = Math.round((count[star] / total) * 100); 
    }

    res.json({ avg, count, breakdown });
  } catch (err) {
    console.error("Error in summary:", err);
    res.status(500).json({ message: "Server error" });
  }
});
// ⭐ Owner Highlights for a specific car
router.get("/reviews/highlights/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const reviews = await Review.find({ carSlug: slug });

    if (reviews.length === 0) {
      return res.json({
        total: 0,
        avgRating: 0,
        bestMileage: null,
        commonPros: [],
        commonCons: []
      });
    }

    // Extract pros & cons mentioned inside comments
    const prosKeywords = ["mileage", "comfort", "engine", "features", "pickup", "space"];
    const consKeywords = ["mileage", "service", "noise", "suspension", "build", "vibration"];

    const prosCount = {};
    const consCount = {};

    reviews.forEach((r) => {
      const text = r.comment.toLowerCase();

      prosKeywords.forEach((p) => {
        if (text.includes(p)) {
          prosCount[p] = (prosCount[p] || 0) + 1;
        }
      });

      consKeywords.forEach((c) => {
        if (text.includes(c)) {
          consCount[c] = (consCount[c] || 0) + 1;
        }
      });
    });

    const topPros = Object.entries(prosCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map((x) => x[0]);

    const topCons = Object.entries(consCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map((x) => x[0]);

    const avgRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    res.json({
      total: reviews.length,
      avgRating,
      bestMileage: null, // future: extract user-reported mileage
      commonPros: topPros,
      commonCons: topCons
    });
  } catch (err) {
    console.error("Error in highlights:", err);
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;

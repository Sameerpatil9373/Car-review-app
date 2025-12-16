const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://sameerpatil9637_db_user:sp_123456@cluster0.yucbzal.mongodb.net/carreview"
  )
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.log("MongoDB error:", err));

// Mount all routes under /api
app.use("/api", reviewRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import { useState } from "react";
import { useParams } from "react-router-dom";

const WriteReviewPage = () => {
  const { id } = useParams(); // car ID
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      carId: id,
      name,
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    // save to localStorage
    const existing = JSON.parse(localStorage.getItem("reviews")) || [];
    existing.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(existing));

    alert("Review added successfully!");
    window.history.back();
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Write Review</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="w-full p-3 border rounded"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Select Rating</option>
          <option value="5">⭐ 5 Stars</option>
          <option value="4">⭐ 4 Stars</option>
          <option value="3">⭐ 3 Stars</option>
          <option value="2">⭐ 2 Stars</option>
          <option value="1">⭐ 1 Star</option>
        </select>

        <textarea
          placeholder="Write your review..."
          className="w-full p-3 border rounded"
          rows="5"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default WriteReviewPage;

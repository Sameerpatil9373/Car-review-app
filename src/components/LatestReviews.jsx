import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    user: "Rahul Sharma",
    car: "Hyundai Creta 2023",
    rating: 4,
    text: "Amazing mileage and very comfortable for long trips...",
  },
  {
    user: "Priya Patel",
    car: "Maruti Swift 2022",
    rating: 5,
    text: "Best budget car, low maintenance and good pickup...",
  },
  {
    user: "Arjun Mehta",
    car: "Mahindra Thar",
    rating: 4,
    text: "Strong road presence and powerful engine, but mileage is average...",
  },
];

const LatestReviews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-8">Latest Reviews</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="font-bold text-xl mb-1">{item.car}</h3>
              <p className="text-gray-600 mb-2">By {item.user}</p>

              {/* Rating */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-lg ${i < item.rating ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <p className="text-gray-700">{item.text}</p>

              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Read more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestReviews;

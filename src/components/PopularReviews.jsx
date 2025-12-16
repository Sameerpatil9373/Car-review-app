import React from "react";

const PopularReviews = () => {
  const reviews = [
    {
      name: "Rohit Sharma",
      car: "Hyundai Creta",
      rating: 5,
      review: "Amazing mileage and very comfortable for long drives.",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Priya Mehta",
      car: "Maruti Swift",
      rating: 4,
      review: "Best budget car with low maintenance cost.",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Aditya Verma",
      car: "Mahindra Thar",
      rating: 5,
      review: "Beast in off-roading! Build quality is top-notch.",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          ⭐ Popular Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.avatar}
                  alt="user"
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.car}</p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex mb-3">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              <p className="text-gray-700">{item.review}</p>

              <button className="mt-4 text-blue-600 hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularReviews;

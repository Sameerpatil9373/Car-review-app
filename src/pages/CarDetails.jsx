import React from "react";
import { useParams } from "react-router-dom";

const carData = {
  "hyundai-creta": {
    name: "Hyundai Creta",
    brand: "Hyundai",
    image: "/assets/cars/creta.png",
    rating: 4.5,
    description: "A stylish and feature-rich compact SUV.",
  },
  "maruti-swift": {
    name: "Maruti Swift",
    brand: "Maruti Suzuki",
    image: "/assets/cars/swift.png",
    rating: 4.3,
    description: "A reliable and fuel-efficient hatchback.",
  },
  "mahindra-thar": {
    name: "Mahindra Thar",
    brand: "Mahindra",
    image: "/assets/cars/thar.png",
    rating: 4.7,
    description: "A rugged off-road SUV with strong road presence.",
  },
};

const CarDetails = () => {
  const { id } = useParams();
  const car = carData[id];

  if (!car) {
    return <h2 className="text-center text-xl mt-10">Car not found.</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <img src={car.image} alt={car.name} className="w-full rounded-xl shadow-lg" />

      <h1 className="text-4xl font-bold mt-6">{car.name}</h1>
      <p className="text-gray-600 text-lg">{car.brand}</p>

      <p className="mt-4 text-gray-700">{car.description}</p>

      <div className="mt-6 p-4 bg-blue-50 rounded-xl">
        ⭐ <strong>{car.rating}</strong> / 5 Rating
      </div>

      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
        Write a Review
      </button>
    </div>
  );
};

export default CarDetails;

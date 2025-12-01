import React from "react";
import { useParams, Link } from "react-router-dom";

import creta from "../assets/cars/creta.png";
import swift from "../assets/cars/swift.png";
import thar from "../assets/cars/thar.png";
import innova from "../assets/cars/innova.png";

// TEMPORARY DATA (use your backend later)
const cars = [
  {
    id: 1,
    name: "Hyundai Creta",
    image: creta,
    brand: "Hyundai",
    rating: 4.5,
    description:
      "The Hyundai Creta offers premium features, great mileage, refined engine performance and solid driving comfort.",
    price: "₹11.5 Lakhs",
  },
  {
    id: 2,
    name: "Maruti Swift",
    image: swift,
    brand: "Maruti Suzuki",
    rating: 4.3,
    description:
      "The Maruti Swift is known for its peppy engine, sporty design and excellent mileage.",
    price: "₹7.2 Lakhs",
  },
  {
    id: 3,
    name: "Mahindra Thar",
    image: thar,
    brand: "Mahindra",
    rating: 4.8,
    description:
      "Mahindra Thar is an iconic off-roader offering unmatched road presence, power and adventure capabilities.",
    price: "₹16.0 Lakhs",
  },
  {
    id: 4,
    name: "Toyota Innova",
    image: innova,
    brand: "Toyota",
    rating: 4.7,
    description:
      "Toyota Innova offers luxury comfort, a powerful engine and a spacious family-oriented interior.",
    price: "₹20.4 Lakhs",
  },
];

const CarDetailPage = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car)
    return (
      <h1 className="text-center text-3xl font-bold mt-10">Car Not Found</h1>
    );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* BACK BUTTON */}
      <Link
        to="/"
        className="inline-block mb-6 text-blue-600 hover:underline text-lg"
      >
        ← Back to Home
      </Link>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Car Image */}
        <img
          src={car.image}
          alt={car.name}
          className="w-full rounded-xl shadow-lg"
        />

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold mb-2">{car.name}</h1>
          <p className="text-gray-600 text-xl mb-4">{car.brand}</p>

          <p className="text-yellow-500 text-lg font-semibold">
            ⭐ {car.rating} / 5
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            {car.description}
          </p>

          <p className="text-2xl font-bold mt-6">{car.price}</p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow">
            Read Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;

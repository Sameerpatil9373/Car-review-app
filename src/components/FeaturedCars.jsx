import React from "react";
import { Link } from "react-router-dom";
import creta from "../assets/cars/creta.png";
import swift from "../assets/cars/swift.png";
import thar from "../assets/cars/thar.png";
import innova from "../assets/cars/innova.png";

const cars = [
  { id: 1, name: "Hyundai Creta", image: creta },
  { id: 2, name: "Maruti Swift", image: swift },
  { id: 3, name: "Mahindra Thar", image: thar },
  { id: 4, name: "Toyota Innova", image: innova },
];

const FeaturedCars = () => {
  return (
    <section className="px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Cars</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {cars.map((car) => (
          <Link to={`/car/${car.id}`} key={car.id}>
            <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition cursor-pointer">
              <img
                src={car.image}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{car.name}</h3>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default FeaturedCars;

import React from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  // temporary dummy cars (later will come from backend)
  const cars = [
    { id: 1, name: "Hyundai Creta", image: "/cars/creta.webp", mileage: "18 kmpl" },
    { id: 2, name: "Maruti Swift", image: "/cars/swift.webp", mileage: "22 kmpl" },
    { id: 3, name: "Mahindra Thar", image: "/cars/thar.webp", mileage: "15 kmpl" },
  ];

  const filtered = cars.filter((car) =>
    car.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-6 lg:px-20 py-10">
      <h2 className="text-3xl font-semibold mb-6">
        Showing results for: <span className="text-blue-500">{query}</span>
      </h2>

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-lg">No matching cars found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <div
              key={car.id}
              className="bg-white shadow-md p-4 rounded-xl hover:scale-105 transition"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-44 w-full object-cover rounded-lg"
              />
              <h3 className="mt-3 text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-600">Mileage: {car.mileage}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;

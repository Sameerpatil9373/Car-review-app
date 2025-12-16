import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/search?q=${query}`);
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col justify-center h-full">
        <h1 className="text-white font-extrabold leading-tight text-5xl md:text-6xl lg:text-7xl drop-shadow-xl">
          Find the Best{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            Car Reviews
          </span>
          <br /> Written by Real Users
        </h1>

        <p className="text-gray-200 mt-6 text-lg md:text-xl max-w-2xl">
          Compare ratings, read experiences, explore features, and make the
          right decision.
        </p>

        {/* Search Box */}
        <form
          onSubmit={handleSearch}
          className="mt-10 flex flex-col md:flex-row items-center gap-4"
        >
          <div className="flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 w-full md:w-[450px] shadow-lg">
            <FaSearch className="text-gray-300 text-xl ml-2" />
            <input
              type="text"
              placeholder="Search for cars, brands, reviews..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent outline-none text-white placeholder-gray-300 w-full ml-3"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-lg"
          >
            Search
          </button>
        </form>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-8 py-3 rounded-xl bg-white/15 backdrop-blur-xl border border-white/20 text-white font-semibold hover:bg-white/25 transition shadow-md">
            Browse Cars
          </button>

          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

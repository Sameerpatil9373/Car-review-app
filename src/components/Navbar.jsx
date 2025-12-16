import { useState } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
          CarReview
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Cars</li>
          <li className="hover:text-blue-600 cursor-pointer">Reviews</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
        </ul>

        {/* Auth Button */}
        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Login
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white w-full px-6 py-4 shadow-lg">
          <ul className="flex flex-col gap-4 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Cars</li>
            <li className="hover:text-blue-600 cursor-pointer">Reviews</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
          </ul>

          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

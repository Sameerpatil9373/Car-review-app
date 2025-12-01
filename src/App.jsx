import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCars from "./components/FeaturedCars";
import PopularReviews from "./components/PopularReviews";
import LatestReviews from "./components/LatestReviews";
import SearchPage from "./pages/Searchpage";
import CarDetails from "./pages/CarDetails";
import WriteReviewPage from "./pages/WriteReviewPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedCars />
              <PopularReviews />
              <LatestReviews />
            </>
          }
        />

        {/* Search Page */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/write-review/:id" element={<WriteReviewPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

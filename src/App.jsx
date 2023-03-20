import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { getAllCategories, getAllReviews } from "./utils/api";

import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import SingleReview from "./pages/SingleReview";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllCategories().then((categorysData) => {
      setCategories(categorysData);
    });
  }, []);

  useEffect(() => {
    getAllReviews().then((reviewsData) => {
      setReviews(reviewsData);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home categories={categories} reviews={reviews} />}
        />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
};

export default App;
